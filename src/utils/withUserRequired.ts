import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const withUserRequired: GetServerSideProps = async ({
  req
}: GetServerSidePropsContext) => {
  try {
    const { user } = await supabaseClient.auth.api.getUserByCookie(req)
    const email = user?.email

    if (!email) {
      throw new Error('User is not authenticated')
    }

    const { data: userData } = await supabaseClient
      .from('User')
      .select('*')
      .eq('email', email)

    if (!userData || userData.length === 0) {
      throw new Error('User is not onboarded')
    }

    return {
      props: {
        user
      }
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/auth/onboarding',
        permanent: false
      }
    }
  }
}
