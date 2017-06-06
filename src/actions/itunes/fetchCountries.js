import * as types from '../../actionTypes'
import { YQL_CALL } from '../../middleware/yql'
import { country } from '../../schemas'

const fetchCountries = () => ({
  [YQL_CALL]: {
    resource: 'data/countries',
    schema: [country],
    types: {
      request: types.FETCH_COUNTRIES,
      success: types.FETCH_COUNTRIES_SUCCESS,
      fail: types.FETCH_COUNTRIES_FAIL
    }
  }
})

export default fetchCountries
