import { NextPage } from 'next'
import Head from 'next/head'

import { withUserRequired } from '../utils/withUserRequired'

const Onboarding: NextPage = () => {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
    </>
  )
}

export const getServerSideProps = withUserRequired

export default Onboarding
