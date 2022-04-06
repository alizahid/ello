import { ApolloError, gql, useQuery } from '@apollo/client'
import { Query, QueryMemberCollectionArgs, Workspace } from '@graphql'
import { useUser } from 'src/providers/user'

const WORKSPACES = gql`
  query workspaces($filter: MemberFilter) {
    memberCollection(filter: $filter) {
      edges {
        node {
          workspace {
            id
            slug
            name
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`

type Returns = {
  error?: ApolloError
  loading: boolean
  workspaces?: Array<Workspace>
}

export const useWorkspaces = (): Returns => {
  const { user } = useUser()

  const { data, error, loading } = useQuery<
    Pick<Query, 'memberCollection'>,
    QueryMemberCollectionArgs
  >(WORKSPACES, {
    skip: user == undefined,
    variables: {
      filter: {
        userId: {
          eq: user?.id
        }
      }
    }
  })

  return {
    error,
    loading,
    workspaces: data?.memberCollection?.edges.map(({ node }) => {
      return node?.workspace ?? []
    }) as Array<Workspace>
  }
}
