import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPodcasts } from '../../../actions'
import { getCountry } from '../../../selectors/settings'
import { getMediaTypeUrl, getItemsLimit } from '../../../selectors/mediaTypes'
import { getPodcastsGenres } from '../../../selectors/genres'
import { getTranslations } from '../../../selectors/translations'
import { FilterPanel } from '..'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import styles from './PodcastFilter.css'
import { equals } from 'ramda'

export class PodcastFilter extends Component {
  static propTypes = {
    genres: PropTypes.array,
    podcastsUrl: PropTypes.string,
    onChange: PropTypes.func,
    limits: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      genre: '',
      explicit: false,
      limit: 10
    }
    this.onChangeGenre = this.onChangeGenre.bind(this)
    this.onChangeExplicit = this.onChangeExplicit.bind(this)
    this.onChangeLimit = this.onChangeLimit.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    const { country, fetchPodcasts, onChange, podcastsUrl } = this.props

    if (!equals(prevState, this.state)) {
      fetchPodcasts(podcastsUrl, country, this.state)
        .then(() =>
          onChange &&
            typeof onChange === 'function' &&
            onChange()
        )
    }
  }

  onChangeGenre (ev, index, value) {
    this.setState({ genre: value })
  }

  onChangeExplicit (ev, checked) {
    this.setState({ explicit: checked })
  }

  onChangeLimit (ev, index, value) {
    this.setState({ limit: value })
  }

  render () {
    const { genres, limits, translations } = this.props

    return (
      <FilterPanel label='Filter'>
        <form className={styles.podcastFilter}>
          <SelectField
            className={styles.selectField}
            floatingLabelFixed
            floatingLabelText={translations['Genre']}
            onChange={this.onChangeGenre}
            value={this.state.genre}>
            {
              genres.map((genre, index) =>
                <MenuItem
                  key={genre.id}
                  primaryText={genre.label}
                  value={genre.id} />
              )
            }
          </SelectField>
          <SelectField
            className={styles.selectField}
            floatingLabelFixed
            floatingLabelText={translations['Size']}
            onChange={this.onChangeLimit}
            value={this.state.limit}>
            {
              limits.map((limit, index) =>
                <MenuItem
                  key={index}
                  primaryText={limit}
                  value={limit} />
              )
            }
          </SelectField>
          <Toggle
            className={styles.toggle}
            label={translations['Explicit_Content']}
            onToggle={this.onChangeExplicit} />
        </form>
      </FilterPanel>
    )
  }
}

const mapStateToProps = state => {
  const country = getCountry(state)
  const genres = getPodcastsGenres(state)
  const translations = getTranslations(state)
  const podcastsUrl = getMediaTypeUrl(state, 'podcasts')
  const limits = getItemsLimit()

  return {
    country,
    genres,
    podcastsUrl,
    limits,
    translations
  }
}

const mapDispatchToProps = {
  fetchPodcasts
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastFilter)
