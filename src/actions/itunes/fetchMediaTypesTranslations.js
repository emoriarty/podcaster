import * as types from '../../actionTypes';
import { YQL_CALL } from '../../middleware/yql';

const fetchMediaTypesTranslations = (locale) => ({
  [YQL_CALL]: {
    resource: `data/lang/${locale}/media-types`,
    types: {
      request: types.FETCH_MEDIA_TYPES_TRANSLATIONS,
      success: types.FETCH_MEDIA_TYPES_TRANSLATIONS_SUCCESS,
      fail: types.FETCH_MEDIA_TYPES_TRANSLATIONS_FAIL
    }
  }
});

export default fetchMediaTypesTranslations;
