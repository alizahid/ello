import Head from 'next/head'
import { useState } from 'react'

import { Button } from '../../components/common/button'
import { Form } from '../../components/common/form'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignUp } from '../../hooks/auth/sign-up'
import { PageLayout } from '../../layouts/page'
import { NextPageWithLayout } from '../../types/next'
import { withGuestRequired } from '../../utils/withGuestRequired'

const SignUp: NextPageWithLayout = () => {
  const { error, loading, signUp, success } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">Sign up</h1>

      {success ? (
        <Message className="mt-8" type={MessageType.Success}>
          Check your email for a confirmation link
        </Message>
      ) : (
        <Form
          className="mt-6"
          loading={loading}
          onSubmit={() => {
            signUp({ email, password })
          }}>
          <Input
            className="mt-4"
            onChange={setEmail}
            placeholder="Email"
            required
            type="email"
            value={email}
          />

          <Input
            className="mt-4"
            onChange={setPassword}
            placeholder="Password"
            required
            type="password"
            value={password}
          />

          {error && (
            <Message className="mt-8" type={MessageType.Error}>
              {error}
            </Message>
          )}

          <Button className="mt-6" label="Sign up" type="submit" />
        </Form>
      )}
    </>
  )
}

export const getServerSideProps = withGuestRequired

SignUp.getLayout = (page) => <PageLayout title="sign_up">{page}</PageLayout>

export default SignUp
