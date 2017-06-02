import * as types from '../../actionTypes'
import { YQL_CALL } from '../../middleware/yql'
import { mediaType } from '../../schemas'

const fetchMediaTypes = () => ({
  [YQL_CALL]: {
    resource: 'media-types',
    schema: [mediaType],
    types: {
      request: types.FETCH_MEDIA_TYPES,
      success: types.FETCH_MEDIA_TYPES_SUCCESS,
      fail: types.FETCH_MEDIA_TYPES_FAIL
    }
  }
})

export default fetchMediaTypes
