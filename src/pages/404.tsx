import { useTranslations } from 'next-intl'

import { Logo } from '../components/common/logo'
import { PageLayout } from '../layouts/page'
import { NextPageWithLayout } from '../types/next'

const NotFound: NextPageWithLayout = () => {
  const t = useTranslations()

  return (
    <>
      <Logo />

      <h1 className="mt-6 text-4xl font-bold">{t('not_found')}</h1>
      <p className="mt-3 text-xl font-medium text-neutral-600">
        {t('404_message')}
      </p>
    </>
  )
}

NotFound.getLayout = (page) => <PageLayout title="not_found">{page}</PageLayout>

export default NotFound
