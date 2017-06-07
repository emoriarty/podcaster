import { createSelector } from 'reselect'
import { nthArg, pathOr } from 'ramda'

const getIds = pathOr([], ['mediaTypes', 'ids'])
const getEntities = pathOr({}, ['entities', 'mediaTypes'])

export const getMediaTypeUrl = createSelector(
  [getEntities, nthArg(1)],
  (entities, id) => pathOr(null, [id, 'feed_types', 'urlPrefix'], entities)
)

export const isFetching = state => state.mediaTypes.isFetching
