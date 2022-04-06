import { ApolloError, gql, useQuery } from '@apollo/client'
import { Comment, Query, QueryCommentCollectionArgs } from '@graphql'

const COMMENTS = gql`
  query comments($filter: CommentFilter) {
    commentCollection(filter: $filter) {
      edges {
        node {
          id
          user {
            id
            name
            email
          }
          body
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
  comments?: Array<Comment>
}

export const useComments = (id: number): Returns => {
  const { data, error, loading } = useQuery<
    Pick<Query, 'commentCollection'>,
    QueryCommentCollectionArgs
  >(COMMENTS, {
    variables: {
      filter: {
        id: {
          eq: id
        }
      }
    }
  })

  return {
    comments: data?.commentCollection?.edges.map(
      ({ node }) => node
    ) as Array<Comment>,
    error,
    loading
  }
}
