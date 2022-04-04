import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { request } from '../lib/request'
import { supabase } from '../lib/supabase'

type Context = {
  error?: string
  loading: boolean
  user?: User
}

export const UserContext = createContext<Context>({
  error: undefined,
  loading: false,
  user: undefined
})

export const UserProvider: FunctionComponent = ({ children }) => {
  const { pathname, push: pushRoute } = useRouter()

  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  const checkSession = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(undefined)
    setUser(undefined)

    try {
      const user = await supabase.auth.user()

      if (user) {
        setUser(user)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Unhandled error')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkSession()
  }, [pathname, checkSession])

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setLoading(true)

        try {
          await request('/auth', { data: { event, session }, method: 'post' })
        } catch (error) {
          setError('Callback request failed')
        }

        pushRoute('/app')
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [checkSession, pushRoute])

  return (
    <UserContext.Provider
      value={{
        error,
        loading,
        user
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext<Context>(UserContext)
