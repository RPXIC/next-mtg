import Link from 'next/link'
import Image from 'next/image'
import useLogin from 'hooks/useLogin'
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import { Visibility, VisibilityOff, Login } from '@mui/icons-material'
import GitHubLogo from 'assets/GitHubLogo.png'
import GoogleLogo from 'assets/GoogleLogo.svg'

export default function LoginPage() {
  const { router, status, values, handleChange, handleClickShowPassword, handleMouseDownPassword, signIn } = useLogin()

  if (status === 'authenticated') router.push('/')

  if (status === 'loading' || status === 'authenticated') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={100} />
      </Box>
    )
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          height: '100vh',
        }}>
        <h1>Login</h1>
        <Box sx={{ width: '30ch' }}>
          <TextField label='Email' onChange={handleChange('email')} margin='dense' fullWidth />
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              margin='dense'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: 1 }}>
            <Button variant='outlined'>
              <Link href='/register'>
                <a style={{ color: '#1876d2' }}>Create Account</a>
              </Link>
            </Button>
            <Button variant='outlined' endIcon={<Login />}>
              Sign In
            </Button>
          </Box>

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
