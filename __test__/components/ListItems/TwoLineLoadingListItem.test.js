import React from 'react'
import { TwoLineLoadingListItem } from '../../../src/components'

describe('TwoLineLoadingListItem', () => {
  it('match snapshot', () => {
    const component = shallow( <TwoLineLoadingListItem />)
    expect(component)
      .toMatchSnapshot()
  })
})
