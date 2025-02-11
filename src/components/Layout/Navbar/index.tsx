"use client"

import Cookies from "js-cookie"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { userFavoriteProducts } from "@/api/queryParamsUser"
import { getUser } from "@/api/services/user/getUser"
import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"
import { clearCart, setItem } from "@/store/slices/cartSlice"
import { setUser } from "@/store/slices/userSlice"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const favorites = useSelector((state: RootState) => state.user.profile.favorites) || []
  const dispatch = useDispatch()
  const token = Cookies.get("token")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (token && favorites.length === 0) {
          const user = await getUser(userFavoriteProducts)
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log("Error al obtener los fav en el nav del usuario:", error)
      }
    }
    fetchFavorites()
  }, [token])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      dispatch(setItem(JSON.parse(storedCart)))
    }
    setIsInitialized(true)
  }, [dispatch])

  useEffect(() => {
    if (isInitialized && token) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, token, isInitialized])

  useEffect(() => {
    if (isInitialized && !token) {
      dispatch(clearCart())
      localStorage.removeItem("cart")
    }
  }, [token, dispatch, isInitialized])

  return (
    <nav className="fixed z-10 w-full bg-white shadow-md">
      <div className="grid grid-cols-1 gap-y-0 px-4 py-4 md:gap-y-2 xl:grid-cols-3 xl:items-center xl:gap-y-0">
        {/* Título y Iconos para pantallas pequeñas */}
        <div className="flex items-center justify-between xl:hidden">
          <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
            tutienda.com
          </Link>
          <div className="flex scale-75 sm:scale-90 sm:gap-0 md:scale-100 md:gap-2">
            <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favorites} />
            <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favorites} />
            <Login />
          </div>
        </div>

        {/* NavLinks para pantallas pequeñas y grandes */}
        <div className="w-full xl:justify-start">
          <NavLinks />
        </div>

        {/* Logo centrado solo en pantallas grandes */}
        <div className="hidden justify-center xl:flex">
          <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
            tutienda.com
          </Link>
        </div>

        {/* Iconos alineados a la derecha en pantallas grandes */}
        <div className="hidden justify-end gap-2 xl:flex">
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favorites} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favorites} />
          <Login />
        </div>
      </div>
    </nav>
  )
}
