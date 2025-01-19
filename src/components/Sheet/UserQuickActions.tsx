import { userFavoriteProducts } from "@/api/queryParamsUser"
import { getUser } from "@/api/services/user/getUser"
import { ProductProps } from "@/types"

export default async function UserFavoriteProducts(): Promise<ProductProps[]> {
  const favorites = await getUser(userFavoriteProducts)
  console.log(favorites)
  return favorites
}
