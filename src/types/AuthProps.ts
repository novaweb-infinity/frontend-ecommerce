import { z } from "zod"

import { loginSchema } from "@/schemas/loginSchema"
import { registerSchema } from "@/schemas/registerSchema"

export interface RegisterProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type LoginFormProps = z.infer<typeof loginSchema>

export type RegisterFormProps = z.infer<typeof registerSchema>
