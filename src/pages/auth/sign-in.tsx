import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Button } from '../../components/common/button'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignIn } from '../../hooks/auth/sign-in'
import { PageLayout } from '../../layouts/page'
import { useUser } from '../../providers/user'
import { NextPageWithLayout } from '../../types/next'
import { withUserCheck } from '../../utils/withUserCheck'

const SignIn: NextPageWithLayout = () => {
  const t = useTranslations()

  const { error, loading, signIn, success } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">Sign in</h1>

      {success ? (
        <Message className="mt-6" type={MessageType.Success}>
          {t('sign_in_success')}
        </Message>
      ) : (
        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault()

            if (loading) {
              return
            }

            signIn({ email, password })
          }}>
          {error && (
            <Message className="mb-6" type={MessageType.Error}>
              {error}
            </Message>
          )}

          <Input
            className="mt-3"
            onChange={setEmail}
            placeholder="Email"
            required
            type="email"
            value={email}
          />

          <Input
            className="mt-3"
            onChange={setPassword}
            placeholder="Password"
            required
            type="password"
            value={password}
          />

          <Button className="mt-6" label="Sign in" type="submit" />
        </form>
      )}
    </>
  )
}

export const getServerSideProps = withUserCheck({
  authenticated: false,
  redirectTo: '/app'
})

SignIn.getLayout = (page) => <PageLayout title="sign_in">{page}</PageLayout>

export default SignIn
