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

    dispatch(fetchCommonTranslations(language))
    dispatch(fetchCountries())
    dispatch(fetchMediaTypes())
    dispatch(fetchMediaTypesTranslations(language))

    this.loadingScreen = pleaseWait({
      logo,
      backgroundColor: '#1976D2',
      loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    })
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

App.propTypes = {
  language: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  country: state.settings.country,
  language: state.settings.language
})

export default connect(mapStateToProps)(App)
