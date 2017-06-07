import { pathOr } from 'ramda'

export const isFetchingCommon = state => state.translations.isFetchingCommon
export const isFetchingMediaType = state => state.translations.isFetchingMediaType
export const getTranslations = pathOr({}, ['translations', 'data'])
