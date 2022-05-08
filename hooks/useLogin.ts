import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { LoginState } from 'types'

export default function useLogin() {
  const router = useRouter()
  const { status } = useSession()
  const [values, setValues] = useState<LoginState>({
    user: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return {
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    router,
    setValues,
    signIn,
    status,
    values,
  }
}
