import decode from 'jwt-decode'

const TOKEN_KEY = 'token'

// Get JWT token from storage
export function jwtGetToken() {
  return localStorage.getItem(TOKEN_KEY)
}

// Wipe JWT token from storage
export function jwtClearToken(history) {
  localStorage.removeItem(TOKEN_KEY)
  history && history.push('/')
}

// Store JWT token from storage
export function jwtSetToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

// Check if the JWT exists and has not expired
export function jwtIsLoggedIn() {
  return !!jwtGetToken() && !jwtIsTokenExpired()
}

// Gets the JWT token expiration date
export function jwtGetTokenExpirationDate() {
  const token = decode(jwtGetToken())
  if (!token.exp) return null

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

// Checks if the JWT token ahs not expired
export function jwtIsTokenExpired() {
  const expirationDate = jwtGetTokenExpirationDate()
  return expirationDate < new Date()
}

// Gets the JWT token data
export function jwtGetData() {
  const token = decode(jwtGetToken())
  return token.data
}
