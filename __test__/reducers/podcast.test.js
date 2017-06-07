import reducer from '../../src/reducers/podcasts'
import * as types from '../../src/actionTypes'
import jsonfile from 'jsonfile'
import path from 'path'

const mockResponse = jsonfile.readFileSync(path.resolve(__dirname, '../../__mocks__/podcasts.json'))

describe('podcasts reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  )

  it('when action FETCH_PODCASTS sets isFecthing property to true', () => {
    const action = {
      type: types.FETCH_PODCASTS
    }
    const next = reducer(undefined, action)
    expect(next.isFetching)
      .toBeTruthy()
  })

  it('should handle FETCH_PODCASTS_SUCCESS', () => {
    const action = {
      type: types.FETCH_PODCASTS_SUCCESS,
      payload: { result: mockResponse }
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })

  it('should handle FETCH_PODCASTS_FAIL', () => {
    const action = {
      type: types.FETCH_PODCASTS_FAIL,
      error: new Error()
    }
    expect(reducer([], action))
      .toMatchSnapshot()
  })
})
