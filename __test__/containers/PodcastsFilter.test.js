import React from 'react'
import { PodcastFilter } from '../../src/containers/PodcastFilter'

const genres = [{
  id: '',
  label: 'all'
}, {
  id: '2',
  label: 'politics'
}, {
  id: '4',
  label: 'comedy'
}]

const limits = [10, 25, 50, 100]

describe('PodcastFilter container', () => {
  it('match snapshot', () => {
    const component = shallow(
      <PodcastFilter
        genres={genres}
        country='es'
        translations={{}}
        limits={limits} />)
    expect(component)
      .toMatchSnapshot()
  })
})
