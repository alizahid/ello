import { useState } from 'react'

import { Button } from '../../components/common/button'
import { Form } from '../../components/common/form'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignIn } from '../../hooks/auth/sign-in'
import { PageLayout } from '../../layouts/page'
import { NextPageWithLayout } from '../../types/next'
import { withGuestRequired } from '../../utils/withGuestRequired'

const SignIn: NextPageWithLayout = () => {
  const { error, loading, signIn, success } = useSignIn()

  const [email, setEmail] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">Sign in</h1>

      {success ? (
        <Message className="mt-8" type={MessageType.Success}>
          Check your email for a magic link
        </Message>
      ) : (
        <Form
          className="mt-6"
          loading={loading}
          onSubmit={() => {
            signIn(email)
          }}>
          <Input
            className="mt-4"
            onChange={setEmail}
            placeholder="Email"
            required
            type="email"
            value={email}
          />

          {error && (
            <Message className="mt-8" type={MessageType.Error}>
              {error}
            </Message>
          )}

          <Button className="mt-6" label="Sign in" type="submit" />
        </Form>
      )}
    </>
  )
}

export const getServerSideProps = withGuestRequired

SignIn.getLayout = (page) => <PageLayout title="sign_in">{page}</PageLayout>

export default SignIn
