import reducer from '../../../src/reducers/mediaTypes'
import * as types from '../../../src/actionTypes'
import mockResponse from '../../../src/utils/__mocks__/media-types'

describe('entitites mediaTypes reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('should handle FETCH_MEDIA_TYPES_SUCCESS', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_SUCCESS,
      payload: mockResponse.query.results.json.json
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
