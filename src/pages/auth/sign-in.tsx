import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Button } from '../../components/common/button'
import { Form } from '../../components/common/form'
import { Input } from '../../components/common/input'
import { Message, MessageType } from '../../components/common/message'
import { useSignIn } from '../../hooks/auth/sign-in'
import { withGuestRequired } from '../../utils/withGuestRequired'

const SignIn: NextPage = () => {
  const router = useRouter()

  const { error, loading, signIn, success } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (success) {
      router.push('/dashboard')
    }
  }, [success, router])

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <div className="container mx-auto grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
          <h1 className="text-4xl font-bold">Sign in</h1>

          <Form
            className="mt-6"
            loading={loading}
            onSubmit={() => {
              signIn({ email, password })
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

            <Button className="mt-6" label="Sign in" type="submit" />
          </Form>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withGuestRequired

export default SignIn
