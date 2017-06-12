import React from 'react'
import { AppContainer } from '../../../src/components'

describe('AppContainer', () => {
  it('match snapshot', () => {
    const component = shallow(<AppContainer />)
    expect(component)
      .toMatchSnapshot()
  })
})
