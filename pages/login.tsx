import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { status } = useSession()

  if (status === 'authenticated') router.push('/')

  return (
    <>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </>
  )
}
