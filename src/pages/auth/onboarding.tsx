import { NextPage } from 'next'
import Head from 'next/head'

import { withUserCheck } from '../../utils/withUserCheck'

const Onboarding: NextPage = () => {
  return (
    <>
      <Head>
        <title>Onboarding</title>
      </Head>
    </>
  )
}

export const getServerSideProps = withUserCheck({
  authenticated: true,
  onboarded: false
})

export default Onboarding
