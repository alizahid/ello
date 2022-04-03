import { getUser } from '@supabase/supabase-auth-helpers/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'

type GuestHocProps = {
  req: NextApiRequest
  res: NextApiResponse
}

export const withGuestRequired = async ({ req, res }: GuestHocProps) => {
  try {
    const { user } = await getUser({ req, res })

    if (user) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    } else {
      throw new Error('')
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return {
    props: {}
  }
}
