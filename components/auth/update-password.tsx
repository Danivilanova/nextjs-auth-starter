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
import { resetPassword, updatePassword } from "@/src/app/(auth)/actions"
import { redirect } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const passwordValidationRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const formSchema = z.object({
  password: z.string().regex(passwordValidationRegex, { message: "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character" }),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
})
export type TUpdatePasswordForm = z.infer<typeof formSchema>

export default function UpdatePassword() {
  const [loading, setLoading] = useState(false)

  const form = useForm<TUpdatePasswordForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: TUpdatePasswordForm) {
    setLoading(true)
    const { error, success } = await updatePassword(values)
    setLoading(false)

    if (!success) {
      toast.error(error)
    } else {
      toast.success("Password updated")
      redirect("/dashboard")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Update Password</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your new password below
          </p>
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Reset Password
        </Button>
      </form>

    </Form>
  )
}