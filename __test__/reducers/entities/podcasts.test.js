import reducer from '../../../src/reducers/entities/podcasts'
import * as types from '../../../src/actionTypes'

const mockResponse = readJson('podcasts')

describe('entitites podcasts reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('should handle FETCH_PODCASTS_SUCCESS', () => {
    const action = {
      type: types.FETCH_PODCASTS_SUCCESS,
      payload: { entities: mockResponse.feed.entry }
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
