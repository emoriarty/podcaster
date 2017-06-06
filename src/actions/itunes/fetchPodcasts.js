import * as types from '../../actionTypes'
import { RSS_CALL } from '../../middleware/rss'
import { podcastFeed } from '../../schemas'

const fetchPodcasts = (url, country, params) => ({
  [RSS_CALL]: {
    url: url.replace('<%= country_code %>', country).replace('<%= parameters %>', params),
    schema: podcastFeed,
    types: {
      request: types.FETCH_PODCASTS,
      success: types.FETCH_PODCASTS_SUCCESS,
      fail: types.FETCH_PODCASTS_FAIL
    }
  }
})

export default fetchPodcasts
