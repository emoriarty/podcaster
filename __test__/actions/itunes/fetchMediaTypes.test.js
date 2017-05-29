import { fetchMediaTypes } from '../../../src/actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([ thunk ]);

describe('Fetch media types from itunes', () => {
  it('creates FETCH_MEDIA_TYPES_SUCCESS when fetching media types', () => {
    const store = mockStore({ mediaTypes: [] });

    return store.dispatch(fetchMediaTypes())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
