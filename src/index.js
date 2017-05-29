import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from './reducers';
import { fetchCountries, fetchMediaTypes } from './actions';

const loggerMiddleware = createLogger();

window.addEventListener('load', () => {
  // jsonp(
  //   'https://itunes.apple.com/search?term=carne&media=podcast',
  //   (err, response) => console.log(err, response)
  // );
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <h1>hola</h1>
    </Provider>,
    document.getElementById('app')
  );

  store
    .dispatch(fetchCountries());

  store
    .dispatch(fetchMediaTypes());
});
