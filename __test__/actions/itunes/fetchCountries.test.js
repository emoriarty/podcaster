import { fetchCountries } from '../../../src/actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([ thunk ]);

describe('Fetch media types from itunes', () => {
  it('creates FETCH_COUNTRIES_SUCCESS when fetching media types', () => {
    const store = mockStore({ countries: [] });

    return store.dispatch(fetchCountries())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
