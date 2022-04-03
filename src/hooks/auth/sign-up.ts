import { useCallback, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  error?: string
  loading: boolean
  success?: boolean

  signUp: (data: { email: string; password: string }) => Promise<void>
}

export const useSignUp = (): Returns => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<boolean>(false)

  const signUp: Returns['signUp'] = useCallback(async ({ email, password }) => {
    setLoading(true)
    setError(undefined)
    setSuccess(false)

    const { error } = await supabase.auth.signUp({
      email,
      password
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
