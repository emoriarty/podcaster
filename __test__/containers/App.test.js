import React from 'react'
import App from '../../src/containers/App'
import renderer from 'react-test-renderer'

describe('App container', () => {
  it('shows default home page', () => {
    const component = renderer.create(
      <App />
    )
    const tree = component.toJSON()
    expect(tree)
      .toMatchSnapshot()
  })
})
