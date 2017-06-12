import React from 'react'
import { TwoLineListItem } from '../../../src/components'

describe('TwoLineListItem', () => {
  it('match snapshot', () => {
    const component = shallow(
      <TwoLineListItem
        primaryText='Primary text'
        secondaryText='secondaryText'
        avatar='image' />)
    expect(component)
      .toMatchSnapshot()
  })
})
