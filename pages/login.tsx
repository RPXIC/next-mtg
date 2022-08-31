import Image from 'next/image'
import { Box, Button, CircularProgress } from '@mui/material'
import useLogin from 'hooks/useLogin'
import GitHubLogo from 'assets/GitHubLogo.png'
import GoogleLogo from 'assets/GoogleLogo.svg'

export default function LoginPage() {
  const { router, status, signIn } = useLogin()

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={100} />
      </Box>
    )
  }

  if (status === 'authenticated') router.push('/')

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          height: '100vh'
        }}>
        <h1>Login</h1>
        <Box sx={{ width: '30ch' }}>
          <Box sx={{ display: 'flex' }}>
            <p>SignIn with</p>
            <Button onClick={() => signIn('github')}>
              <Image src={GitHubLogo} alt='ghlogo' width={40} height={40} />
            </Button>
            <Button onClick={() => signIn('google')}>
              <Image src={GoogleLogo} alt='googlelogo' width={40} height={40} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
