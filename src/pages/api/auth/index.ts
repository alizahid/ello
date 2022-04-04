import { NextApiHandler } from 'next'

import { supabase } from '../../../lib/supabase'

const handler: NextApiHandler = (req, res): void => {
  supabase.auth.api.setAuthCookie(req, res)
}

export default handler
