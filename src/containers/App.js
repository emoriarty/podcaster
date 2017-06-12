import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import { AppContainer } from '../components'
import {
  fetchTranslations
} from '../actions'
import {
  getLanguage
} from '../selectors/settings'
import {
  getTranslations
} from '../selectors/translations'
import PodcastList from './PodcastList'
import { Headline } from '../components/Texts'

export class App extends Component {
  static propTypes = {
    fetchCountries: PropTypes.func,
    fetchMediaTypes: PropTypes.func,
    fetchPodcasts: PropTypes.func,
    fetchTranslations: PropTypes.func,
    language: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    podcastsUrl: PropTypes.string,
    translations: PropTypes.object
  }

  static defaultProps = {
    isLoading: true
  }

  componentDidMount () {
    const {
      fetchTranslations,
      language
    } = this.props

    fetchTranslations(language)
  }

  render () {
    const {
      translations
    } = this.props

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title='Podcaster'
        />
        <AppContainer>
          <Headline>
            {translations['toppodcasts']}
          </Headline>
          <PodcastList />
        </AppContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const language = getLanguage(state)
  const translations = getTranslations(state)

  return {
    language,
    translations
  }
}

const mapDispatchToProps = {
  fetchTranslations
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
