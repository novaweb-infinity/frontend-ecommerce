"use client"

import Cookies from "js-cookie"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { userFavoriteProducts } from "@/api/queryParamsUser"
import { getUser } from "@/api/services/user/getUser"
import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"
import { setItem } from "@/store/slices/cartSlice"
import { setUser } from "@/store/slices/userSlice"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  let cartItems = useSelector((state: RootState) => state.cart.items)

  const favorites = useSelector((state: RootState) => state.user.profile.favorites) || []
  const dispatch = useDispatch()
  const token = Cookies.get("token")

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
    if (cartItems.length === 0) {
      const storedCart = localStorage.getItem("cart")
      if (storedCart) {
        dispatch(setItem(JSON.parse(storedCart)))
      }
    }
  }, [cartItems, dispatch])

  return (
    <nav className="fixed z-10 w-full bg-white shadow-md">
      <div className="relative flex items-center justify-between px-4 py-4">
        <div className="flex w-1/3 flex-grow">
          <NavLinks />
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
            tutienda.com
          </Link>
        </div>

        <div className="flex w-1/3 flex-grow flex-wrap items-center justify-end gap-2">
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favorites} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favorites} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
