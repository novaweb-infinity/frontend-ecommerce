import { getUserProductsFavorites } from "@/api/services/user/getUser"
import { ProductProps } from "@/types"

export default async function UserFavoriteProducts(): Promise<ProductProps[]> {
  const favorites = await getUserProductsFavorites()
  return favorites
}
