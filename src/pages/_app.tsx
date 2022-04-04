import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

import { ApolloProvider } from '@apollo/client'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { FunctionComponent, useEffect } from 'react'

import en from '../i18n/en.json'
import { useApollo } from '../lib/apollo'
import { request } from '../lib/request'
import { supabase } from '../lib/supabase'
import { UserProvider } from '../providers/user'
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

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          await request('/auth', { data: { event, session }, method: 'post' })
        } catch (error) {
          //
        }

        router.push('/app')
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [router])

  return (
    <NextIntlProvider locale={locale} messages={messages[locale]}>
      <ApolloProvider client={client}>
        <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
      </ApolloProvider>
    </NextIntlProvider>
  )
}

export default Ello
