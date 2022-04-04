import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from '../../components/common/button'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignUp } from '../../hooks/auth/sign-up'
import { PageLayout } from '../../layouts/page'
import { NextPageWithLayout } from '../../types/next'
import { withUserCheck } from '../../utils/withUserCheck'

const SignUp: NextPageWithLayout = () => {
  const t = useTranslations()

  const { error, loading, signUp, success } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">Sign up</h1>

      {success ? (
        <Message className="mt-6" type={MessageType.Success}>
          {t('sign_up_success')}
        </Message>
      ) : (
        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault()

            if (loading) {
              return
            }

            signUp({ email, password })
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

          <Button className="mt-6" label="Sign up" type="submit" />
        </form>
      )}
    </>
  )
}

export const getServerSideProps = withUserCheck({
  authenticated: false,
  redirectTo: '/app'
})

SignUp.getLayout = (page) => <PageLayout title="sign_up">{page}</PageLayout>

export default SignUp
