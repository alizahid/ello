import { NextPage } from 'next'
import Head from 'next/head'

import { withUserCheck } from '../utils/withUserCheck'

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
    </>
  )
}

export const getServerSideProps = withUserCheck({
  redirectTo: '/auth/onboarding'
})

export default App
