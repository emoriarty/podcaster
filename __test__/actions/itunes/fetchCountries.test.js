import { fetchCountries } from '../../../src/actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { yqlMiddleware } from '../../../src/middleware';

const mockStore = configureStore([ thunk, yqlMiddleware ]);

describe('fetchCountries', () => {
  it('dispatchs actions properly', () => {
    const store = mockStore({ countries: [] });

    return store.dispatch(fetchCountries())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
