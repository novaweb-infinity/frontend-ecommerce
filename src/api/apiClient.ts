import axios from "axios"
import Cookies from "js-cookie"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // Tiempo de espera
  headers: {
    "Content-Type": "application/json",
  },
})

// Interceptor para agregar el token de autorización a cada solicitud
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response, // Si la respuesta es correcta, la devuelve
  (error) => {
    if (error.response) {
      const status = error.response.status
      const message = error.response.data?.error?.message || "Error desconocido"
      return Promise.reject(new Error(`Error ${status}: ${message}`))
    } else if (error.request) {
      return Promise.reject(new Error("No se pudo conectar con el servidor. Verifica tu conexión."))
    } else {
      return Promise.reject(new Error("Ocurrió un error inesperado al procesar la solicitud."))
    }
  }
)

export default apiClient
