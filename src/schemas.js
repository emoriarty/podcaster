import { schema } from 'normalizr'

export const country = new schema.Entity(
  'countries',
  {},
  { idAttribute: 'country_code' }
)

export const mediaType = new schema.Entity('mediaTypes')

export const podcast = new schema.Entity(
  'podcasts',
  {},
  {
    idAttribute: (value, parent, key) => {
      return value.id.attributes['im:id']
    }
  })

export const podcastFeed = { feed: { entry: new schema.Array(podcast) } }
