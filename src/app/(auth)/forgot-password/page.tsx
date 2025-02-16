import { Metadata } from "next"
import ResetPassword from "@/components/auth/reset-password"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot your password?",
}

export default function ForgotPasswordPage() {
  return (
    <ResetPassword />
  )
}