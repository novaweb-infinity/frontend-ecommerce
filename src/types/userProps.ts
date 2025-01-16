import { ProductProps } from "./productProps"

export interface UserProps {
  profile: {
    documentId: string
    username: string
    email: string
    provider: string
    confirmed: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    favorites: ProductProps[]
  }
}
