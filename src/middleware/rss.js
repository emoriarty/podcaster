import { normalize } from 'normalizr'

export const RSS_CALL = '@@rss/CALL'

const rss = store => next => async action => {
  const rssAction = action[RSS_CALL]
  if (typeof rssAction === 'undefined') {
    return next(action)
  }

  const {
    url,
    schema,
    types
  } = rssAction

  next({
    type: types.request,
    payload: {
      url
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
    payload: schema ? normalize(data, schema) : data
  })
  return result
}

export default rss
