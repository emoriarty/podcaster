import { createSelector } from 'reselect'

const getIds = state => state.countries.ids || []
const getEntities = state => state.entities.countries || {}

export const getFlag = createSelector(
  [getEntities, (state, country) => country],
  (entities, country) =>
    country in entities
      ? entities[country].flag_icon
      : null
)
