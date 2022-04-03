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

  const { data } = await supabase.from('User').select('*').eq('email', email)

  if (!data || data.length === 0) {
    return UserStatus.Authenticated
  }

  return UserStatus.Onboarded
}

export const withUserCheck = (options: CheckOptions = {}) => {
  const { authenticated, onboarded, redirectTo } = options

  let defaultRedirectUrl = ''

  return async ({ req }: GetServerSidePropsContext): Promise<any> => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req)

      const userStatus = await getUserStatus(user)

      if (authenticated) {
        if (onboarded) {
          if (userStatus !== UserStatus.Onboarded) {
            defaultRedirectUrl = '/auth/onboarding'
            throw new Error('')
          }
        } else {
          if (userStatus !== UserStatus.Authenticated) {
            defaultRedirectUrl = '/auth/sign-in'
            throw new Error('')
          }
        }

        return {
          props: { user }
        }
      } else {
        if (userStatus !== UserStatus.None) {
          defaultRedirectUrl = '/app'
          throw new Error('')
        }
      }

      return {
        props: {}
      }
    } catch (error) {
      return {
        redirect: {
          destination: redirectTo ?? defaultRedirectUrl,
          permanent: false
        }
      }
    }
  }
}
