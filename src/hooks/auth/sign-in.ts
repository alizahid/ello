import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useCallback, useState } from 'react'

type Returns = {
  error?: string
  loading: boolean
  success?: boolean

  signIn: (email: string) => Promise<void>
}

export const useSignIn = (): Returns => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<boolean>()

  const signIn = useCallback<Returns['signIn']>(async (email) => {
    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    const { error } = await supabaseClient.auth.signIn({
      email
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }
  }, [])

  return {
    error,
    loading,
    signIn,
    success
  }
}
