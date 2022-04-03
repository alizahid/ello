import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { Button } from '../../components/common/button'
import { Form } from '../../components/common/form'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignUp } from '../../hooks/auth/sign-up'
import { withGuestRequired } from '../../utils/withGuestRequired'

const SignUp: NextPage = () => {
  const { error, loading, signUp, success } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>

      <div className="container mx-auto grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
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
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withGuestRequired

export default SignUp
