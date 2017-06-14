import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import FlatButton from 'material-ui/FlatButton'

class FilterPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      isOpened: !!props.isOpened
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render () {
    const { children, label } = this.props
    const { isOpened } = this.state
    return (
      <div>
        <FlatButton
          label={label}
          fullWidth
          onClick={this.onClick} />
        <Collapse
          isOpened={isOpened}>
          {children}
        </Collapse>
      </div>
    )
  }
}

export default FilterPanel
