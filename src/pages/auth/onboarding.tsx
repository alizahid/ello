import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs'
import { NextPage } from 'next'
import Head from 'next/head'

const Onboarding: NextPage = () => {
  return (
    <>
      <Head>
        <title>Onboarding</title>
      </Head>
    </>
  )
}

export const getServerSideProps = withAuthRequired({
  redirectTo: '/auth/sign-in'
})

export default Onboarding
