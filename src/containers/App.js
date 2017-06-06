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
    console.log(nextProps.podcastUrl)
    if (nextProps.podcastUrl !== podcastUrl) {
      fetchPodcasts(nextProps.podcastUrl, country, 'limit=10/genre=1303/explicit=true')
    }
  }

  renderFlagButton () {
    const { countryFlag } = this.props

    return (
      <FlatButton>
        <Avatar
          style={{
            backgroundColor: 'transparent',
            marginTop: 3
          }}
          size={30}
          src={countryFlag}
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
  countryFlag: PropTypes.string,
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
  const countryCode = state.settings.country
  const countryFlag = countryCode in state.entities.countries
    ? state.entities.countries[countryCode].flag_icon
    : ''

  return {
    country: state.settings.country,
    countryFlag: `${config.itunes.provider.rss}${countryFlag}`,
    podcastUrl: '26' in state.entities.mediaTypes ? state.entities.mediaTypes['26'].feed_types.urlPrefix : '',
    isLoading: state.countries.isFetching ||
      state.mediaTypes.isFetching ||
      state.translations.common.isFetching ||
      state.translations.mediaTypes.isFetching,
    language: state.settings.language
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
