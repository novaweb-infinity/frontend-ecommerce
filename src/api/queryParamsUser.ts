import { QueryParamsProps } from "@/types/"

export const userFavoriteProducts: QueryParamsProps = {
  populate: {
    favorites: {
      populate: "images",
    },
  },
}
