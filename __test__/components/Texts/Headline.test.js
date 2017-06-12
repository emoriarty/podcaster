import React from 'react'
import { Headline } from '../../../src/components'

describe('Headline', () => {
  it('match snapshot', () => {
    const component = shallow(<Headline />)
    expect(component)
      .toMatchSnapshot()
  })
})
