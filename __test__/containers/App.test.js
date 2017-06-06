import React from 'react'
import { App } from '../../src/containers/App'

describe('App container', () => {
  it('shows default home page', () => {
    const component = shallow(<App language='es-ES' />)
    expect(component)
      .toMatchSnapshot()
  })
})
