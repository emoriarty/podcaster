import { createSelector } from 'reselect'
import { nthArg, pathOr } from 'ramda'

// const getIds = pathOr([], ['mediaTypes', 'ids'])
export const getEntities = pathOr({}, ['entities', 'mediaTypes'])

export const getMediaTypeUrl = createSelector(
  [getEntities, nthArg(1)],
  (entities, id) => pathOr(null, [id, 'feed_types', 'urlPrefix'], entities)
)

export const getGenres = createSelector(
  [getEntities, nthArg(1)],
  (entities, id) => pathOr([], [id, 'subgenres'], entities)
)

export const getItemsLimit = () => [10, 25, 50, 100]

export const isFetching = state => state.mediaTypes.isFetching
