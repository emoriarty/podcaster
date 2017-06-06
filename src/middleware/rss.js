import { normalize } from 'normalizr'

export const RSS_CALL= '@@rss/CALL'

const rss = store => next => async action => {
  const rssAction = action[RSS_CALL]
  if (typeof rssAction === 'undefined') {
    return next(action)
  }

  const {
    url,
    country,
    params,
    schema,
    types
  } = rssAction

  next({
    type: types.request,
    payload: {
      url,
      params
    }
  })

  let data
  try {
    data = await fetch(`${url}/json`)
      .then(response => response.json())
      .catch(err => { throw err })
  } catch (error) {
    next({
      type: types.fail,
      error
    })
    throw error
  }

  const result = next({
    type: types.success,
    payload: schema ? normalize(data, schema) : response
  })
  return result
}

export default rss
