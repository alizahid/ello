import { ApolloClient, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import { AppProps } from 'next/app'
import { useMemo } from 'react'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

type Client = ApolloClient<InMemoryCache>
type PageProps = AppProps['pageProps']

let client: Client

const createApolloClient = (token?: string) => {
  const headers: Record<string, string> = {
    apiKey: process.env.SUPABASE_KEY
  }

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return new ApolloClient({
    cache: new InMemoryCache(),
    headers,
    ssrMode: typeof window === 'undefined',
    uri: `${process.env.SUPABASE_URL}/graphql/v1`
  })
}

export const initializeApollo = ({
  initialState = null,
  token
}: {
  initialState: unknown
  token?: string
}) => {
  const next = client ?? createApolloClient(token)

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

type Props = {
  pageProps: PageProps
  token?: string
}

export const useApollo = ({ pageProps, token }: Props) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]

  const store = useMemo(
    () => initializeApollo({ initialState: state, token }),
    [state, token]
  )

  return store
}
