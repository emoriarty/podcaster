import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  fetchCommonTranslations,
  fetchCountries,
  fetchMediaTypes,
  fetchMediaTypesTranslations
} from '../actions'
import { pleaseWait } from 'please-wait'
import logo from '../../assets/images/logo-256.png'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount () {
    const { dispatch, language } = this.props

    this.loadingScreen = pleaseWait({
      logo,
      backgroundColor: '#1976D2',
      loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    })

    dispatch(fetchCommonTranslations(language))
    dispatch(fetchCountries())
    dispatch(fetchMediaTypes())
    dispatch(fetchMediaTypesTranslations(language))
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.isLoading)
    if (!nextProps.isLoading) {
      console.log('finish', this.loadingScreen)
      this.loadingScreen.finish()
    }
  }

  render () {
    return (
      <div>
        {
          this.state.isLoaded &&
            <MuiThemeProvider>
              <div>
                <h2>Top</h2>
                <ul>
                  <li>podcast 1</li>
                </ul>
              </div>
            </MuiThemeProvider>
        }
      </div>
    )
  }
}

App.defaultProps = {
  isLoading: true
}

App.propTypes = {
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isLoading: state.countries.isFetching ||
    state.mediaTypes.isFetching ||
    state.translations.common.isFetching ||
    state.translations.mediaTypes.isFetching,
  language: state.settings.language
})

export default connect(mapStateToProps)(App)
