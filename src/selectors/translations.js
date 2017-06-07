import { pathOr } from 'ramda'

export const isFetching = state => state.translations.isFetchingCommon ||
  state.translations.isFetchingMediaType
export const getTranslations = pathOr({}, ['translations', 'data'])
