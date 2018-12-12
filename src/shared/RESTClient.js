// REST Client
import { jwtSetToken, jwtGetToken } from 'shared/jwt'
import {
  DeserializeError,
  DeserializeUser,
  DeserializeVenue
} from 'shared/jsonapi'

const API_URL = process.env.REACT_APP_API_BASE_URL
const API_AUTH_PATH = 'auth'
const API_VENUES_PATH = 'venues'
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
    let login = { res: true, error: null }
    const auth = Buffer.from(`${username}:${password}`, 'utf8').toString(
      'base64'
    )
    try {
      const res = await fetch(`${API_URL}/${API_AUTH_PATH}/signin`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`
        }
      })
      if (res.status !== 201)
        login = { res: false, error: `${res.status} - ${res.statusText}` }
      else {
        const jwtData = await res.json()
        jwtSetToken(jwtData.token)
      }
    } catch (error) {
      login = { res: false, error: error }
      console.error('RESTClient.user.login:', login)
    }
    return login
  },
  check: async () => {
    try {
      const res = await fetch(
        `${API_URL}/${API_AUTH_PATH}/me`,
        baseReqOptions()
      )
      if (res.status === 200) {
        return { res: DeserializeUser(await res.json()), error: null }
      }
      const err = await res.json()
      return { res: null, error: err.errors ? DeserializeError(err) : err }
    } catch (error) {
      return { res: null, error: DeserializeError(error) }
    }
  }
}

const venues = {
  list: async ({ filter, sort, pagination }) => {
    try {
      const res = await fetch(
        `${API_URL}/${API_VENUES_PATH}?${pagination}&${filter}&${sort}`,
        baseReqOptions()
      )
      if (res.status === 200) {
        return { res: DeserializeVenue(await res.json()), error: null }
      }
      const err = await res.json()
      return { res: null, error: err.errors ? DeserializeError(err) : err }
    } catch (error) {
      return { res: null, error: DeserializeError(error) }
    }
  }
}

export default { user, venues }
