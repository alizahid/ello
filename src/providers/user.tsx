import { User } from '@supabase/supabase-js'
import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

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
  }, [checkSession])

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
