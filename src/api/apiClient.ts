import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // Tiempo de espera
  headers: {
    "Content-Type": "application/json",
  },
})

// // Agregar un interceptor a la petición
// axios.interceptors.request.use(
//   function (config) {
//     // Haz algo antes que la petición se ha enviada
//     return config
//   },
//   function (error) {
//     // Haz algo con el error de la petición
//     return Promise.reject(error)
//   }
// )

// // Agregar una respuesta al interceptor
// axios.interceptors.response.use(
//   function (response) {
//     // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
//     // Haz algo con los datos de la respuesta
//     return response
//   },
//   function (error) {
//     // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
//     // Haz algo con el error
//     return Promise.reject(error)
//   }
// )

export default apiClient
