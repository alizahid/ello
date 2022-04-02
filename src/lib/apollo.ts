import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import { AppProps } from 'next/app'
import { useMemo } from 'react'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

type Client = ApolloClient<InMemoryCache>
type PageProps = AppProps['pageProps']

let client: Client

const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: 'same-origin',
      uri: `${process.env.SUPABASE_URL}/graphql/v1`
    }),
    ssrMode: typeof window === 'undefined'
  })

export const initializeApollo = (initialState = null) => {
  const next = client ?? createApolloClient()

  if (initialState) {
    const existingCache = next.extract()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = merge(existingCache, initialState)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    next.cache.restore(data)
  }

  if (typeof window === 'undefined') {
    return next
  }

  if (!client) {
    client = next
  }

  return next
}

export const addApolloState = (client: Client, pageProps: PageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export const useApollo = (pageProps: PageProps) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]

  const store = useMemo(() => initializeApollo(state), [state])

  return store
}
