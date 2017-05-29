import reducer from '../../src/reducers/mediaTypes';
import * as types from '../../src/actionTypes';
import mockResponse from '../mocks/media-types';

describe('mediaTypes reducer', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {}))
      .toMatchSnapshot()
  );

  it('when FETCH_MEDIA_TYPES the on going property true', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES
    };
    const next = reducer(undefined, action);
    expect(next.isFetching)
      .toBeTruthy();
  });

  it('should handle FETCH_MEDIA_TYPES_SUCCESS', () => {
    const action = {
      type: types.FETCH_MEDIA_TYPES_SUCCESS,
      payload: mockResponse.query.results.json.json
    };
    expect(reducer([], action))
      .toMatchSnapshot();
  });
});
