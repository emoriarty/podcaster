import { createSelector } from 'reselect'
import { nthArg, pathOr } from 'ramda'

const getIds = pathOr([], ['countries', 'ids'])
const getEntities = pathOr({}, ['entities', 'countries'])

export const getFlag = createSelector(
  [getEntities, nthArg(1)],
  (entities, country) =>
    country in entities
      ? entities[country].flag_icon
      : null
)

export const isFetching = state => state.countries.isFetching
