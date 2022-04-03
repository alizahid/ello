import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const withGuestRequired: GetServerSideProps = async ({
  req
}: GetServerSidePropsContext) => {
  try {
    const { user } = await supabaseClient.auth.api.getUserByCookie(req)

    if (user) {
      return {
        redirect: {
          destination: '/app',
          permanent: false
        }
      }
    } else {
      throw new Error('')
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}
