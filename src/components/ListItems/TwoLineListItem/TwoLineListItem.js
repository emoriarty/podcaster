import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'

const TwoLineListItem = ({ primaryText, secondaryText, avatar }) =>
  <ListItem
    primaryText={primaryText}
    secondaryText={secondaryText}
    leftAvatar={<Avatar src={avatar} />}
  />

TwoLineListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  avatar: PropTypes.string
}

export default TwoLineListItem
