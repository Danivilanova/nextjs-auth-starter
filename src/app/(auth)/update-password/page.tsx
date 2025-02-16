import { Metadata } from "next"
import UpdatePassword from "@/components/auth/update-password"

export const metadata: Metadata = {
  title: "Update Password",
  description: "Update your password",
}

export default function UpdatePasswordPage() {
  return (
    <UpdatePassword />
  )
}