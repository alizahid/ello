import { ApolloError, gql, useQuery } from '@apollo/client'
import { Query, QueryThreadCollectionArgs, Thread } from '@graphql'

const THREADS = gql`
  query threads($filter: ThreadFilter) {
    threadCollection(filter: $filter) {
      edges {
        node {
          id
          groupId
          user {
            id
            name
            email
          }
          body
          status
          createdAt
          updatedAt
        }
      }
    }
  }
`

type Returns = {
  error?: ApolloError
  loading: boolean
  threads?: Array<Thread>
}

export const useThreads = (id: number): Returns => {
  const { data, error, loading } = useQuery<
    Pick<Query, 'threadCollection'>,
    QueryThreadCollectionArgs
  >(THREADS, {
    variables: {
      filter: {
        groupId: {
          eq: id
        }
      }
    }
  })

  return {
    error,
    loading,
    threads: data?.threadCollection?.edges.map(
      ({ node }) => node
    ) as Array<Thread>
  }
}
