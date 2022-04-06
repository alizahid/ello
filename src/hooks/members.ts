import { ApolloError, gql, useQuery } from '@apollo/client'
import { Member, Query, QueryMemberCollectionArgs } from '@graphql'

const MEMBERS = gql`
  query members($filter: MemberFilter) {
    memberCollection(filter: $filter) {
      edges {
        node {
          role
          user {
            id
            name
            email
          }
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
  members?: Array<Member>
}

export const useMembers = (id: number): Returns => {
  const { data, error, loading } = useQuery<
    Pick<Query, 'memberCollection'>,
    QueryMemberCollectionArgs
  >(MEMBERS, {
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
    loading,
    members: data?.memberCollection?.edges.map(
      ({ node }) => node
    ) as Array<Member>
  }
}
