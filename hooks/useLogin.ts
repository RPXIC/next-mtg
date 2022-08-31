import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function useLogin() {
  const router = useRouter()
  const { status } = useSession()

  return {
    router,
    signIn,
    status
  }
}
