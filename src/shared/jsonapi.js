import JSONAPISerializer from 'json-api-serializer'

const Serializer = new JSONAPISerializer({
  convertCase: 'snake_case',
  unconvertCase: 'snake_case'
})

Serializer.register('error', {})

Serializer.register('user', {})

const DeserializeError = error => error
  // error.errors ? Serializer.deserialize('error', error) : error
const DeserializeUser = user => Serializer.deserialize('user', user)

export { Serializer, DeserializeError, DeserializeUser }
