import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useCallback, useState } from 'react'

type Returns = {
  error?: string
  loading: boolean
  success?: boolean

  signUp: (email: string) => Promise<void>
}

export const useSignUp = (): Returns => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<boolean>()

  const signUp = useCallback<Returns['signUp']>(async (email) => {
    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    const { error } = await supabaseClient.auth.signUp({
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
    signUp,
    success
  }
}
