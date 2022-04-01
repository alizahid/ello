import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { FunctionComponent } from 'react'

import en from '../i18n/en.json'
import { AppPropsWithLayout } from '../types/next'

const messages: Record<string, AbstractIntlMessages> = {
  en
}

const Ello: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router
}) => {
  const locale = router.locale ?? 'en'

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <NextIntlProvider locale={locale} messages={messages[locale]}>
      {getLayout(<Component {...pageProps} />)}
    </NextIntlProvider>
  )
}

export default Ello
