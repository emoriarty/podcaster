import React from 'react'
import { PodcastList } from '../../src/containers/PodcastList'

const podcasts = [{
  'id.attributes.im:id': 1,
  'im:name.label': 'podcast 1'
}, {
  'id.attributes.im:id': 2,
  'im:name.label': 'podcast 2'
}, {
  'id.attributes.im:id': 3,
  'im:name.label': 'podcast 3'
}]

describe('PodcastList container', () => {
  it('match snapshot', () => {
    const component = shallow(
      <PodcastList
        podcasts={podcasts}
        country='es' />)
    expect(component)
      .toMatchSnapshot()
  })
})
