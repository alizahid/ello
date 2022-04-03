import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from '../../components/common/button'
import { Form } from '../../components/common/form'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignIn } from '../../hooks/auth/sign-in'
import { PageLayout } from '../../layouts/page'
import { NextPageWithLayout } from '../../types/next'
import { withUserCheck } from '../../utils/withUserCheck'

const SignIn: NextPageWithLayout = () => {
  const t = useTranslations()

  const { error, loading, signIn, success } = useSignIn()

  const [email, setEmail] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">Sign in</h1>

      {success ? (
        <Message className="mt-6" type={MessageType.Success}>
          {t('sign_in_success')}
        </Message>
      ) : (
        <Form
          className="mt-6"
          loading={loading}
          onSubmit={() => {
            signIn(email)
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

          <Button className="mt-6" label="Sign in" type="submit" />
        </Form>
      )}
    </>
  )
}

export const getServerSideProps = withUserCheck()

SignIn.getLayout = (page) => <PageLayout title="sign_in">{page}</PageLayout>

export default SignIn
