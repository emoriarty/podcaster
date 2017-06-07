import {
  fetchCommonTranslations,
  fetchMediaTypesTranslations
} from '..'

const fetchTranslations = language => dispatch => {
  return Promise.all([
    dispatch(fetchCommonTranslations(language)),
    dispatch(fetchMediaTypesTranslations(language))
  ])
}

export default fetchTranslations
