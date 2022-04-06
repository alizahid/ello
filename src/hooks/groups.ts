import { ApolloError, gql, useQuery } from '@apollo/client'
import { Group, Query, QueryGroupCollectionArgs } from '@graphql'

const GROUPS = gql`
  query groups($filter: GroupFilter) {
    groupCollection(filter: $filter) {
      edges {
        node {
          id
          name
          type
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
  groups?: Array<Group>
}

export const useGroups = (id: number): Returns => {
  const { data, error, loading } = useQuery<
    Pick<Query, 'groupCollection'>,
    QueryGroupCollectionArgs
  >(GROUPS, {
    variables: {
      filter: {
        workspaceId: {
          eq: id
        }
      }
    }
  })

  return {
    error,
    groups: data?.groupCollection?.edges.map(
      ({ node }) => node
    ) as Array<Group>,
    loading
  }
}
