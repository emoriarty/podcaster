import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPodcasts } from '../actions'
import { getPodcasts } from '../selectors/podcasts'
import { getMediaTypeUrl } from '../selectors/mediaTypes'
import { getCountry } from '../selectors/settings'
import times from '../utils/times'
import { List } from 'material-ui/List'
import {
  TwoLineListItem,
  TwoLineLoadingListItem
} from '../components/ListItems'

class PodcastList extends Component {
  static propTypes = {
    country: PropTypes.string,
    podcasts: PropTypes.array,
    podcastsUrl: PropTypes.string
  }

  constructor (props) {
    super(props)

    this.renderItems = this.renderItems.bind(this)
    this.renderLoadingItems = this.renderLoadingItems.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // const { country, fetchPodcasts, podcastsUrl } = this.props
    //
    // if (nextProps.podcastsUrl !== podcastsUrl || nextProps.country !== country) {
    //   fetchPodcasts(nextProps.podcastsUrl, country, 'limit=50/explicit=true')
    // }
  }

  renderLoadingItems () {
    let items = []
    times(10)(
      index =>
        items.push(<TwoLineLoadingListItem key={index} />)
    )
    console.log(items)
    return items
  }

  renderItems () {
    const { podcasts } = this.props
    return podcasts.map(
      podcast =>
        <TwoLineListItem
          key={podcast['id.attributes.im:id']}
          primaryText={podcast['im:name.label']}
          secondaryText={podcast['im:artist.label']}
          avatar={podcast['im:image.0.label']}
        />
    )
  }

  render () {
    const { podcasts } = this.props

    return (
      <List>
        {
          podcasts.length > 0
            ? this.renderItems()
            : this.renderLoadingItems()
        }
      </List>
    )
  }
}

const mapStateToProps = state => {
  const country = getCountry(state)
  const podcasts = getPodcasts(state)
  const podcastsUrl = getMediaTypeUrl(state, 'podcasts')

  return {
    country,
    podcasts,
    podcastsUrl
  }
}

const mapDispatchToProps = {
  fetchPodcasts
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastList)
