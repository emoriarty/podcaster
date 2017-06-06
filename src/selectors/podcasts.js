import { createSelector } from 'reselect'

const getIds = state => state.podcasts.ids || []
const getEntities = state => state.entities.podcasts || {}

export const getPodcasts = createSelector(
  [getIds, getEntities],
  (ids, entities) => ids.map(id => entities[id])
)
