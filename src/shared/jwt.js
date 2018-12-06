import decode from 'jwt-decode'

const TOKEN_KEY = 'token'

// Get JWT token from storage
export function jwtGetToken() {
  // console.log('token:', localStorage.getItem(TOKEN_KEY))
  return localStorage.getItem(TOKEN_KEY)
}

// Wipe JWT token from storage
export function jwtClearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

// Store JWT token from storage
export function jwtSetToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function jwtIsLoggedIn() {
  return !!jwtGetToken() && !jwtIsTokenExpired()
}

export function jwtGetTokenExpirationDate() {
  const token = decode(jwtGetToken())
  if (!token.exp) return null

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

export function jwtIsTokenExpired() {
  const expirationDate = jwtGetTokenExpirationDate()
  return expirationDate < new Date()
}

export function jwtGetData() {
  const token = decode(jwtGetToken())
  return token.data
}
