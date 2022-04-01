import compact from 'lodash/compact'
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

type Props = {
  title?: string
}

export const PageLayout: FunctionComponent<Props> = ({ children, title }) => {
  const t = useTranslations()

  const titleFull = compact([title ? t(title) : null, t('ello')]).join(': ')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <Head>
        <title>{titleFull}</title>
      </Head>

      {children}
    </div>
  )
}
