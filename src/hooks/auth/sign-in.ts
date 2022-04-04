import { useCallback, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  error?: string
  loading: boolean
  success?: boolean

  signIn: (data: { email: string; password: string }) => Promise<void>
}

export const useSignIn = (): Returns => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<boolean>(false)

  const signIn: Returns['signIn'] = useCallback(async ({ email, password }) => {
    setLoading(true)
    setError(undefined)
    setSuccess(false)

    const { error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }

    setLoading(false)
  }, [])

  return {
    error,
    loading,
    signIn,
    success
  }
}
