import { createSelector } from 'reselect'
import { getGenres } from './mediaTypes'
import { getTranslations } from './translations'
import { curry, flip } from 'ramda'
import capitalize from '../utils/capitalize'

const getGenresCurriedFlipped = flip(curry(getGenres))

export const getPodcastsGenres = createSelector(
  [getGenresCurriedFlipped('podcasts'), getTranslations],
  (genres, translations) =>
    genres.map(genre => ({
      id: genre.id,
      label: translations[genre.translation_key] ||
        capitalize(genre.translation_key)
    }))
)
