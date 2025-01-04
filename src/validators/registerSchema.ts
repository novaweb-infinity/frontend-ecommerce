import { z } from "zod"

export const registerSchema = z
  .object({
    email: z.string().email({ message: "Introduce una dirección de correo válida." }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 caracteres." })
      .regex(/[A-Z]/, { message: "Debe contener al menos una letra mayúscula." })
      .regex(/[a-z]/, { message: "Debe contener al menos una letra minúscula." })
      .regex(/[0-9]/, { message: "Debe contener al menos un número." })
      .regex(/^(?!.*(.)\1{3}).*$/, {
        message: "No repitas el mismo carácter más de tres veces.",
      }),
    confirmPassword: z.string(),
    privacyPolicy: z.boolean().refine((val) => val, {
      message: "Debes aceptar la política de privacidad.",
    }),
    receiveNews: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden.",
  })
