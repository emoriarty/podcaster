import * as types from '../../actionTypes'
import { RSS_CALL } from '../../middleware/rss'
import { podcastFeed } from '../../schemas'
import objectToArray from '../../utils/objectToArray'

const fetchPodcasts = (url, country, params = []) => {
  const filter = objectToArray(params)
    .map(item => item.join('='))
    .join('/')

  return {
    [RSS_CALL]: {
      url: url.replace('<%= country_code %>', country).replace('<%= parameters %>', filter),
      schema: podcastFeed,
      types: {
        request: types.FETCH_PODCASTS,
        success: types.FETCH_PODCASTS_SUCCESS,
        fail: types.FETCH_PODCASTS_FAIL
      }
    }
  }
}

export default fetchPodcasts
