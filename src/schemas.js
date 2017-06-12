import { schema } from 'normalizr'
import flatten from 'flat'

export const country = new schema.Entity(
  'countries',
  {},
  { idAttribute: 'country_code' }
)

export const mediaType = new schema.Entity(
  'mediaTypes',
  {},
  {
    idAttribute: 'translation_key',
    processStrategy: value => ({
      ...value,
      subgenres: value.subgenres.map(sg => ({
        ...sg,
        translation_key: sg.translation_key.replace('&', '_')
      }))
    })
  }
)

export const podcast = new schema.Entity(
  'podcasts',
  {},
  {
    idAttribute: value => value.id.attributes['im:id'],
    processStrategy: flatten
  }
)

export const podcastFeed = { feed: { entry: new schema.Array(podcast) } }
