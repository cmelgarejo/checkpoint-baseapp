// REST Client
import { jwtSetToken, jwtGetToken } from 'shared/jwt'
import { DeserializeError, DeserializeUser } from 'shared/jsonapi'

const API_URL = process.env.REACT_APP_API_BASE_URL

const baseReqOptions = (options = {}) => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtGetToken()}`
  },
  ...options
})

const user = {
  login: async (username, password) => {
    const auth = Buffer.from(`${username}:${password}`, 'utf8').toString(
      'base64'
    )
    try {
      const res = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`
        }
      })
      if (res.status === 201) {
        const jwtData = await res.json()
        jwtSetToken(jwtData.token)
        return { res: true, error: null }
      }
      return { res: false, error: res.status } //`${res.status}: ${res.statusText}` }
    } catch (error) {
      console.log('error:', error)
      return { res: false, error: error }
    }
  },
  check: async () => {
    try {
      const res = await fetch(`${API_URL}/auth/me`, baseReqOptions())
      if (res.status === 200) {
        return { res: DeserializeUser(await res.json()), error: null }
      }
      return { res: null, error: await res.json() }
    } catch (error) {
      return { res: null, error: DeserializeError(error) }
    }
  }
}

export default { user }
