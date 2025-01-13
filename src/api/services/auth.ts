import Cookies from "js-cookie"

import apiClient from "../apiClient"

interface RegisterFormProps {
  email: string
  password: string
}

interface LoginFormProps {
  email: string
  password: string
}

export const registerUser = async (data: RegisterFormProps) => {
  const response = await apiClient.post("/api/auth/local/register", {
    username: data.email,
    email: data.email,
    password: data.password,
  })
  return response.data
}

export const loginUser = async (data: LoginFormProps) => {
  const response = await apiClient.post("/api/auth/local", {
    identifier: data.email,
    password: data.password,
  })
  return response.data
}

export const logoutUser = () => {
  Cookies.remove("token")
}
