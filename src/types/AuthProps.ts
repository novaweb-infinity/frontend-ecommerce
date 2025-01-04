import { z } from "zod"

import { loginSchema } from "@/validators/loginSchema"
import { registerSchema } from "@/validators/registerSchema"

export interface RegisterProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type LoginFormProps = z.infer<typeof loginSchema>

export type RegisterFormProps = z.infer<typeof registerSchema>
