import axios from "axios"

export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`,
  },
})
