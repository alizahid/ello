import { serve } from 'https://deno.land/std@0.131.0/http/server.ts'

serve(async (req) => {
  const { name } = await req.json()

  const data = {
    message: `Hello ${name}!`
  }

  const payload = JSON.stringify(data)

  return new Response(payload, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
})
