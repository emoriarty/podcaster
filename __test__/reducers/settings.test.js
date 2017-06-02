import reducer from '../../src/reducers/settings'

describe('settings reducer', () => {
  it('should have a default country set to \'es\'', () => {
    const next = reducer(undefined, {})
    expect(next.country)
      .toBe('es')
  })
})
