import { ApolloError, gql, useMutation } from '@apollo/client'
import { Mutation, Workspace } from '@graphql'
import { useCallback } from 'react'

export const CREATE_WORKSPACE = gql`
  mutation createWorkspace($workspace: WorkspaceInsertInput!) {
    insertIntoWorkspaceCollection(objects: [$workspace]) {
      records {
        id
        name
        slug
        createdAt
        updatedAt
      }
    }
  }
`

interface Returns {
  createWorkspace: (workspace: Partial<Workspace>) => Promise<Workspace | null>
  error?: ApolloError
  loading: boolean
  workspace?: Workspace
}

export const useCreateWorkspace = (): Returns => {
  const [mutateFunction, { data, loading, error }] =
    useMutation<Pick<Mutation, 'insertIntoWorkspaceCollection'>>(
      CREATE_WORKSPACE
    )

  const createWorkspace = useCallback(
    async (workspace: Partial<Workspace>) => {
      const { data } = await mutateFunction({
        variables: {
          workspace
        }
      })

      return data?.insertIntoWorkspaceCollection?.records.at(0) ?? null
    },
    [mutateFunction]
  )

  return {
    createWorkspace,
    error,
    loading,
    workspace: data?.insertIntoWorkspaceCollection?.records.at(0)
  }
}
