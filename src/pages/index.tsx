import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
    <Head>
      <title>Ello</title>
    </Head>

    <Image src="/img/ello.svg" height={64} width={64} alt="Ello" />
    <h1 className="mt-6 text-6xl font-bold">Ello</h1>
    <p className="mt-3 text-xl font-medium text-neutral-600">
      Say hello to the future of work
    </p>
  </div>
)

export default Home
