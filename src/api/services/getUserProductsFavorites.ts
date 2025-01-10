import apiClient from "../apiClient"

export const getUserProductsFavorites = async () => {
  try {
    // Obtén el token de supabase desde sessionStorage
    const supabaseAuthToken = sessionStorage.getItem("supabase.auth.token")

    if (!supabaseAuthToken) {
      throw new Error("No hay una sesión activa o el token no está disponible.")
    }

    // Parsear el token para obtener el ID del usuario
    const parsedToken = JSON.parse(supabaseAuthToken)
    const userId = parsedToken.user.id

    console.log("User ID:", userId)

    const response = await apiClient.get("/api/custom-users", {
      params: {
        "filters[supabaseUserId][$eq]": userId, // Filtra por supabaseUserId
        populate: "favorite", // Obtén la relación de favoritos
      },
    })

    const userData = response.data.data?.[0]
    const favorites = userData?.favorite || []

    console.log("Favorites:", favorites)
    return favorites
  } catch (error) {
    console.error("Error al obtener favoritos:", error)
    throw error
  }
}
