import reducer from '../../src/reducers/countries';
import * as types from '../../src/actionTypes';
import mockResponse from '../mocks/countries';

describe('countries reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  );

  it('when FETCH_COUNTRIES the on going property true', () => {
    const action = {
      type: types.FETCH_COUNTRIES
    };
    const next = reducer(undefined, action);
    expect(next.isFetching)
      .toBeTruthy();
  });

  it('should handle FETCH_COUNTRIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_COUNTRIES_SUCCESS,
      payload: mockResponse.query.results.json.json
    };
    expect(reducer([], action))
      .toMatchSnapshot();
  });
});