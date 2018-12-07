import { createGlobalState } from 'react-context-global-state'
import RESTClient from 'shared/RESTClient'

const initialState = {
  auth: {
    error: null,
    userInfo: null,
    loading: false
  }
}

const {
  getGlobalState,
  setGlobalState,
  StateProvider,
  StateConsumer
} = createGlobalState(initialState)

const setAuthState = (key, value) => {
  const auth = getGlobalState('auth')
  setGlobalState('auth', { ...auth, [key]: value })
}

export const getAuthState = () => {
  return getGlobalState('auth')
}

export const resetAuthState = () =>
  setGlobalState('auth', { auth: initialState.auth })

export const setAuthError = value => setAuthState('error', value)

export const setAuthLoading = value => setAuthState('loading', value)

export const setAuthUserInfo = value => setAuthState('userInfo', value)

export const authLogin = async (user, pass) => {
  setAuthLoading(true)
  setAuthError(null)
  const { res, error } = await RESTClient.user.login(user, pass)
  if (error) setAuthError(error)

  if (res && !error) await authCheckMe()
  setAuthLoading(false)
  return { res, error }
}

export const authCheckMe = async () => {
  setAuthLoading(true)
  setAuthError(null)
  const { res, error } = await RESTClient.user.check()
  if (error) setAuthError(error)

  if (res && !error) {
    setAuthUserInfo(res)
  }
  setAuthLoading(false)
  return { res, error }
}

export { StateProvider, StateConsumer }
