export default function useRegister() {
  const register = async (e: any) => {
    const { email, password } = e
    const registerStatus = await fetch(`http://localhost:3000/api/hello`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return registerStatus
  }

  return {
    register
  }
}
