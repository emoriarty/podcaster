import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from './reducers';
import { fetchCountries } from './actions';

const loggerMiddleware = createLogger();

window.addEventListener('load', () => {
  // jsonp(
  //   'https://itunes.apple.com/search?term=carne&media=podcast',
  //   (err, response) => console.log(err, response)
  // );

  let store = createStore(
    appReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  console.log('initialState', store.getState());

  const unsubscribe = store.subscribe(() => console.log(store.getState()));

  store
    .dispatch(fetchCountries())
    .then(data => {
      console.log('success', data);
    })
    .catch(reason => {
      console.error(reason);
    });

  unsubscribe();
});
