import { User } from '@supabase/supabase-js'
import { GetServerSidePropsContext } from 'next'

import { supabase } from '../lib/supabase'

type CheckOptions = {
  authenticated?: boolean
  onboarded?: boolean
  redirectTo?: string
}

enum UserStatus {
  None,
  Authenticated,
  Onboarded
}

const getUserStatus = async (user?: User | null): Promise<UserStatus> => {
  const email = user?.email

  if (!email) {
    return UserStatus.None
  }

  const { data } = await supabase
    .from('User')
    .select('*')
    .eq('email', email)
    .single()

  if (!data) {
    return UserStatus.Authenticated
  }

  return UserStatus.Onboarded
}

export const withUserCheck = (options: CheckOptions = {}) => {
  const { authenticated, onboarded, redirectTo } = options

  return async ({ req }: GetServerSidePropsContext): Promise<any> => {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    const userStatus = await getUserStatus(user)

    if (authenticated) {
      if (onboarded) {
        if (userStatus !== UserStatus.Onboarded) {
          return {
            redirect: {
              destination: redirectTo,
              permanent: false
            }
          }
        }
      } else {
        if (userStatus !== UserStatus.Authenticated) {
          return {
            redirect: {
              destination: redirectTo,
              permanent: false
            }
          }
        }
      }

      return {
        props: { user }
      }
    } else {
      if (userStatus !== UserStatus.None) {
        return {
          redirect: {
            destination: redirectTo,
            permanent: false
          }
        }
      }
    }

    return {
      props: {}
    }
  }
}
