import * as types from '../../actionTypes'
import { YQL_CALL } from '../../middleware/yql'

const fetchCommonTranslations = (locale) => ({
  [YQL_CALL]: {
    resource: `data/lang/${locale}/common`,
    types: {
      request: types.FETCH_COMMON_TRANSLATIONS,
      success: types.FETCH_COMMON_TRANSLATIONS_SUCCESS,
      fail: types.FETCH_COMMON_TRANSLATIONS_FAIL
    }
  }
})

export default fetchCommonTranslations
