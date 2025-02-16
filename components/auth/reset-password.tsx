"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { resetPassword } from "@/src/app/(auth)/actions"
import { redirect } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export type TResetPasswordForm = z.infer<typeof formSchema>

export default function ResetPassword() {
  const [loading, setLoading] = useState(false)

  const form = useForm<TResetPasswordForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: TResetPasswordForm) {
    setLoading(true)
    const { error, success } = await resetPassword(values)
    setLoading(false)

    if (!success) {
      toast.error(error)
    } else {
      toast.success("Password reset email sent")
      redirect("/login")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to reset your password
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" type="email" disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Reset Password
        </Button>
        <div className="text-center text-sm">
          <Link href="/login" className="underline underline-offset-4">
            Back to Login
          </Link>
        </div>
      </form>

    </Form>
  )
}