import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config/app'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import {
  fetchCountries,
  fetchMediaTypes,
  fetchTranslations,
  fetchPodcasts
} from '../actions'
import { pleaseWait } from 'please-wait'
import logo from '../../assets/images/logo-256.png'
import 'please-wait/src/please-wait.scss'
import { getPodcasts } from '../selectors/podcasts'
import {
  getCountry,
  getLanguage
} from '../selectors/settings'
import { getFlag } from '../selectors/countries'
import { getMediaTypeUrl } from '../selectors/mediaTypes'
import { isFetching as isFetchingCountries } from '../selectors/countries'
import { isFetching as isFetchingMediaTypes } from '../selectors/mediaTypes'
import {
  isFetchingMediaType as isFetchingMediaTypeTranslation,
  isFetchingCommon as isFetchingCommonTranslation,
  getTranslations
} from '../selectors/translations'

export class App extends Component {
  componentDidMount () {
    const {
      fetchCountries,
      fetchMediaTypes,
      fetchTranslations,
      language
    } = this.props

    this.loadingScreen = pleaseWait({
      logo,
      backgroundColor: '#1976D2',
      loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    })

    fetchCountries()
    fetchMediaTypes()
    fetchTranslations(language)
  }

  componentWillReceiveProps (nextProps) {
    const { country, fetchPodcasts, podcastsUrl } = this.props
    if (!nextProps.isLoading) {
      this.loadingScreen.finish()
    }

    if (nextProps.podcastsUrl !== podcastsUrl || nextProps.country !== country) {
      fetchPodcasts(nextProps.podcastsUrl, country, 'limit=25/explicit=true')
    }
  }

  renderFlagButton () {
    const { flag } = this.props

    return (
      <FlatButton>
        <Avatar
          style={{
            backgroundColor: 'transparent',
            marginTop: 3
          }}
          size={30}
          src={flag && `${config.itunes.provider.rss}${flag}`}
        />
      </FlatButton>
    )
  }

  render () {
    const {
      isLoading,
      podcasts,
      translations
    } = this.props

    return (
      <div>
        {
          !isLoading &&
            <div>
              <AppBar
                showMenuIconButton={false}
                title='Podcaster'
                iconElementRight={this.renderFlagButton()}
              />
              <h2>{translations['toppodcasts']}</h2>
              <ul>
                { 
                  podcasts.map(podcast =>
                    <li key={podcast.id.attributes['im:id']}>{podcast.title.label}</li>
                  )
                }
              </ul>
            </div>
        }
      </div>
    )
  }
}

App.defaultProps = {
  isLoading: true
}

App.propTypes = {
  country: PropTypes.string,
  flag: PropTypes.string,
  fetchCountries: PropTypes.func,
  fetchMediaTypes: PropTypes.func,
  fetchPodcasts: PropTypes.func,
  fetchTranslations: PropTypes.func,
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  podcastsUrl: PropTypes.string,
  translations: PropTypes.object
}

const mapStateToProps = (state) => {
  const country = getCountry(state)
  const language = getLanguage(state)
  const flag = getFlag(state, country)
  const podcasts = getPodcasts(state)
  const podcastsUrl = getMediaTypeUrl(state, 'podcasts')
  const translations = getTranslations(state)

  return {
    country,
    flag,
    isLoading: isFetchingCountries(state) ||
      isFetchingMediaTypes(state) ||
      isFetchingCommonTranslation(state) ||
      isFetchingMediaTypeTranslation(state),
    language,
    podcasts,
    podcastsUrl,
    translations
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchCountries,
    fetchMediaTypes,
    fetchTranslations,
    fetchPodcasts
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
