import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  session?: Session
}

export const useAuth = (): Returns => {
  const [session, setSession] = useState(supabase.auth.session())

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) =>
      setSession(session)
    )

    return () => {
      data?.unsubscribe()
    }
  }, [])

  return {
    session: session ?? undefined
  }
}
