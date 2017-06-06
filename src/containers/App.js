import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config/app'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import {
  fetchCommonTranslations,
  fetchCountries,
  fetchMediaTypes,
  fetchMediaTypesTranslations,
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

export class App extends Component {
  componentDidMount () {
    const {
      fetchCommonTranslations,
      fetchCountries,
      fetchMediaTypes,
      fetchMediaTypesTranslations,
      language
    } = this.props

    this.loadingScreen = pleaseWait({
      logo,
      backgroundColor: '#1976D2',
      loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    })

    fetchCommonTranslations(language)
    fetchCountries()
    fetchMediaTypes()
    fetchMediaTypesTranslations(language)
  }

  componentWillReceiveProps (nextProps) {
    const { country, fetchPodcasts, podcastUrl } = this.props
    if (!nextProps.isLoading) {
      this.loadingScreen.finish()
    }

    if (nextProps.podcastUrl !== podcastUrl || nextProps.country !== country) {
      fetchPodcasts(nextProps.podcastUrl, country, 'limit=10/genre=1303/explicit=true')
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
    const { isLoading } = this.props
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
              <h2>Top</h2>
              <ul>
                <li>podcast 1</li>
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
  fetchCommonTranslations: PropTypes.func,
  fetchCountries: PropTypes.func,
  fetchMediaTypes: PropTypes.func,
  fetchMediaTypesTranslations: PropTypes.func,
  fetchPodcasts: PropTypes.func,
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  podcastUrl: PropTypes.string
}

const mapStateToProps = (state) => {
  const country = getCountry(state)
  const language = getLanguage(state)
  const flag = getFlag(state, country)
  const podcasts = getPodcasts(state)

  return {
    country,
    flag,
    isLoading: state.countries.isFetching ||
      state.mediaTypes.isFetching ||
      state.translations.common.isFetching ||
      state.translations.mediaTypes.isFetching,
    language,
    podcasts,
    podcastUrl: 'podcasts' in state.entities.mediaTypes ? state.entities.mediaTypes.podcasts.feed_types.urlPrefix : ''
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchCommonTranslations,
    fetchCountries,
    fetchMediaTypes,
    fetchMediaTypesTranslations,
    fetchPodcasts
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
