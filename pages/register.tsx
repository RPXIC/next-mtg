import Link from 'next/link'
import useLogin from 'hooks/useLogin'
import useRegister from 'hooks/useRegister'
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
} from '@mui/material'
import { Visibility, VisibilityOff, Send, Login } from '@mui/icons-material'

export default function RegisterPage() {
  const { router, status, values, handleChange, handleClickShowPassword, handleMouseDownPassword } = useLogin()
  const { register } = useRegister()

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
          height: '100vh',
        }}>
        <h1>Register</h1>
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
            <Button variant='outlined' endIcon={<Login />}>
              <Link href='/login'>
                <a style={{ color: '#1876d2' }}>Login</a>
              </Link>
            </Button>
            <Button variant='outlined' endIcon={<Send />} onClick={() => register(values)}>
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
