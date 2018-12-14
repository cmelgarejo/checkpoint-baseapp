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
    let login = { data: true, error: null }
    const auth = Buffer.from(`${username}:${password}`, 'utf8').toString(
      'base64'
    )
    let status = 500
    try {
      const res = await fetch(`${API_URL}/${API_AUTH_PATH}/signin`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`
        }
      })
      status = res.status
      if (status !== 201)
        login = { data: false, error: `${status} - ${res.statusText}` }
      else {
        const jwtData = await res.json()
        jwtSetToken(jwtData.token)
      }
    } catch (error) {
      login = {
        data: false,
        error: `${status} - ${error.toString().replace(/:/, '-')}`
      }
      console.error('RESTClient.user.login:', login)
    }
    return login
  },
  check: async () => {
    let check = {}
    try {
      const res = await fetch(
        `${API_URL}/${API_AUTH_PATH}/me`,
        baseReqOptions()
      )
      if (res.status === 200) {
        check = { data: DeserializeUser(await res.json()), error: null }
      } else {
        const err = await res.json()
        check = { data: null, error: err.errors ? DeserializeError(err) : err }
      }
    } catch (error) {
      const err = { data: null, error: DeserializeError(error) }
      console.error('RESTClient.user.check:', err)
    }
    return check
  }
}

const venues = {
  list: async ({ filter = '', sort = '', pagination = '' }) => {
    let list = {}
    try {
      const query =
        filter || sort || pagination
          ? [`filter=${filter}`, `sort=${sort}`, `${pagination}`].join('&')
          : ''
      const res = await fetch(
        `${API_URL}/${API_VENUES_PATH}?${query}`,
        baseReqOptions()
      )
      if (res.status === 200) {
        list = { data: DeserializeVenue(await res.json()), error: null }
      } else {
        const err = await res.json()
        list = { data: null, error: err.errors ? DeserializeError(err) : err }
      }
    } catch (error) {
      list = { data: null, error: DeserializeError(error) }
      console.error('RESTClient.venues.list:', list)
    }
    return list
  },
  count: async () => {
    let count = {}
    try {
      const res = await fetch(
        `${API_URL}/${API_VENUES_PATH}/count`,
        baseReqOptions()
      )
      if (res.status === 200) {
        count = { data: await res.json(), error: null }
      } else {
        const err = await res.json()
        count = { data: null, error: err.errors ? DeserializeError(err) : err }
      }
    } catch (error) {
      count = { data: null, error: DeserializeError(error) }
      console.error('RESTClient.venues.count:', count)
    }
    return count
  }
}

export default { user, venues }
