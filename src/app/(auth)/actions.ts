'use server'

import { createClient } from '@/lib/supabase/server'

import { TLoginForm } from '@/components/auth/login'
import { TResetPasswordForm } from '@/components/auth/reset-password'
import { TSignupForm } from '@/components/auth/signup'
import { TUpdatePasswordForm } from '@/components/auth/update-password'

interface AuthResponse {
  error: string | undefined
  success: boolean
}

export async function login(formData: TLoginForm): Promise<AuthResponse> {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  return {
    error: error?.message,
    success: !error,
  }
}

export async function signup(formData: TSignupForm): Promise<AuthResponse> {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: 'http://localhost:3000/dashboard',
      data: {
        full_name: formData.full_name,
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  return {
    error: error?.message,
    success: !error,
  }
}

export async function resetPassword(formData: TResetPasswordForm): Promise<AuthResponse> {
  const supabase = await createClient()

  const data = {
    email: formData.email,
  }

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: 'http://localhost:3000/update-password',
  })

  return {
    error: error?.message,
    success: !error,
  }
}

export async function updatePassword(formData: TUpdatePasswordForm): Promise<AuthResponse> {
  const supabase = await createClient()

  const data = {
    password: formData.password,
  }

  const { error } = await supabase.auth.updateUser(data)

  return {
    error: error?.message,
    success: !error,
  }
}