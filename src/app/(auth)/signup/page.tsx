import { Metadata } from "next"
import Signup from "@/components/auth/signup"

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup to your account",
}

export default function SignupPage() {
  return (
    <Signup />
  )
}