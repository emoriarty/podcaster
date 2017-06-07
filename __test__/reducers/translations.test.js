import reducer from '../../src/reducers/translations'
import * as types from '../../src/actionTypes'

const responses = {
  [types.FETCH_COMMON_TRANSLATIONS_SUCCESS]:
    readJson('translations-common'),
  [types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS]: 
    readJson('translations-media-types')
}

const startActions = [
  types.FETCH_COMMON_TRANSLATIONS,
  types.FETCH_MEDIA_TYPES_TRANSLATIONS
]
const successActions = [
  types.FETCH_COMMON_TRANSLATIONS_SUCCESS,
  types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS
]
const failActions = [
  types.FETCH_COMMON_TRANSLATIONS_FAIL,
  types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL
]

function isFetching (store, type) {
  switch (type) {
    case types.FETCH_COMMON_TRANSLATIONS:
    case types.FETCH_COMMON_TRANSLATIONS_SUCCESS:
    case types.FETCH_COMMON_TRANSLATIONS_FAIL:
      return store.isFetchingCommon
    case types.FETCH_MEDIA_TYPES_TRANSLATIONS:
    case types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS:
    case types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL:
      return store.isFetchingMediaType
  }
}

let store = {}

describe('translations reducer', () => {
  it('should return the initial state', () => {
    store = reducer(undefined, {})
    expect(store).toMatchSnapshot()
  })

  startActions.forEach((type) =>
    it(`when action ${type} sets isFecthing property to true`, () => {
      const action = { type }
      store = reducer(store, action)

      expect(isFetching(store, type)).toBeTruthy()
    })
  )

  successActions.forEach((type, index, list) =>
    it(`should handle ${type}`, () => {
      const action = {
        type,
        payload: responses[type]
      }
      store = reducer(store, action)

      expect(store).toMatchSnapshot()
      expect(isFetching(store, type)).toBeFalsy()
    })
  )

  failActions.forEach((type) =>
    it(`should handle ${type}`, () => {
      const action = {
        type,
        error: new Error()
      }

      expect(reducer({}, action)).toMatchSnapshot()
      expect(isFetching(store, type)).toBeFalsy()
    })
  )
})
