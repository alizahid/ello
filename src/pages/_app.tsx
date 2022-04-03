import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

import { ApolloProvider } from '@apollo/client'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { FunctionComponent } from 'react'

import en from '../i18n/en.json'
import { useApollo } from '../lib/apollo'
import { AppPropsWithLayout } from '../types/next'

const messages: Record<string, AbstractIntlMessages> = {
  en
}

const Ello: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router
}) => {
  const client = useApollo(pageProps)

  const locale = router.locale ?? 'en'

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <NextIntlProvider locale={locale} messages={messages[locale]}>
      <ApolloProvider client={client}>
        <UserProvider supabaseClient={supabaseClient}>
          {getLayout(<Component {...pageProps} />)}
        </UserProvider>
      </ApolloProvider>
    </NextIntlProvider>
  )
}

export default Ello
