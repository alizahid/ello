type Config = Pick<RequestInit, 'method' | 'headers'> & {
  data?: object
}

export const request = async (
  url: string,
  config?: Config
): Promise<Response> => {
  const headers = config?.headers ?? {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const body = config?.data ? JSON.stringify(config.data) : null

  const method = config?.method ?? 'get'

  const response = await fetch(`/api${url}`, {
    body,
    headers: new Headers(headers),
    method
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response
}
