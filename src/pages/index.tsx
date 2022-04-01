import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Logo } from '../components/common/logo'
import { PageLayout } from '../layouts/page'
import { NextPageWithLayout } from '../types/next'

const Home: NextPageWithLayout = () => {
  const t = useTranslations()

  return (
    <>
      <Logo />

      <h1 className="mt-6 text-6xl font-bold">{t('ello')}</h1>
      <p className="mt-3 text-2xl font-medium text-neutral-600">
        {t('say_hello')}
      </p>

      <Link href="/auth/sign-in">
        <a className="px-3 py-2 mt-6 text-lg font-semibold text-white rounded-lg hover:bg-secondary-500 active:bg-secondary-700 bg-secondary-600">
          {t('get_started')}
        </a>
      </Link>
    </>
  )
}

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>

export default Home
