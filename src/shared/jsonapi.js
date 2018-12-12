import JSONAPISerializer from 'json-api-serializer'

const Serializer = new JSONAPISerializer({
  convertCase: 'snake_case',
  unconvertCase: 'snake_case'
})

Serializer.register('error', {})

Serializer.register('user', {})

Serializer.register('asset', {})

Serializer.register('device', {})

Serializer.register('driver', {})

Serializer.register('poi', {})

Serializer.register('geofence', {})

Serializer.register('roadmap', {})

Serializer.register('roadmap_point', {})

Serializer.register('client', {})

Serializer.register('venue', {})

Serializer.register('mark', {})

Serializer.register('item', {})

const DeserializeError = error => error
// error.errors ? Serializer.deserialize('error', error) : error
const DeserializeUser = user => Serializer.deserialize('user', user)

const DeserializeVenue = venue => Serializer.deserialize('venue', venue)

export { Serializer, DeserializeError, DeserializeUser, DeserializeVenue }
