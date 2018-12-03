import decode from 'jwt-decode'

const ID_TOKEN_KEY = 'id_token'
const PROFILE_KEY = 'profile'

export function logout(history) {
  clearIdToken()
  clearProfile()
  history.push('/')
}

// export function requireAuth() {
//   // (nextState, replace) {
//   if (!isLoggedIn()) {
//     // replace({ pathname: '/' })
//     login()
//   }
// }

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY)
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY)
}

function clearProfile() {
  localStorage.removeItem(PROFILE_KEY)
  localStorage.removeItem(ID_TOKEN_KEY)
}

export function getEmail() {
  return getProfile().email
}

export function getName() {
  return getProfile().name
}

export function getPicture() {
  return getProfile().picture
}

export function getSub() {
  return getProfile().sub
}

export function getNickname() {
  return getProfile().nickname
}

// Get and store id_token in local storage
export function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken)
}

export function isLoggedIn() {
  const idToken = getIdToken()
  return !!idToken && !isTokenExpired(idToken)
}

export function getProfile() {
  const profile = decode(getIdToken())
  return profile
}

export function getUserMetadata() {
  const token = getIdToken() || undefined
  if (!token) return {}
  const profile = decode(token)
  return profile.user_metadata || {}
}

export function getConsoleMetadata() {
  return getUserMetadata().console || { userId: '' }
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
