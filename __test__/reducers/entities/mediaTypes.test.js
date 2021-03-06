import reducer from '../../../src/reducers/entities/mediaTypes'
import * as types from '../../../src/actionTypes'

const mockResponse = readJson('media-types')

describe('entitites mediaTypes reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('should handle FETCH_MEDIA_TYPES_SUCCESS', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_SUCCESS,
      payload: { entities: mockResponse.query.results.json.json }
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
