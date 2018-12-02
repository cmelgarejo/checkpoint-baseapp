import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import languagePickerStyle from 'assets/jss/material-dashboard-pro-react/components/languagePickerStyle.jsx'

const us_flag = require('assets/img/flags/US.png')
const es_flag = require('assets/img/flags/PY.png')

class LanguagePicker extends React.Component {
  state = {
    language:
      (this.props.i18n && this.props.i18n.language.substring(0, 2)) || 'en'
  }

  handleChangeLanguage = ({ target }) => {
    const { i18n } = this.props
    i18n.changeLanguage(target.value)
    this.setState({ language: target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={this.state.language}
        onChange={this.handleChangeLanguage}
        inputProps={{
          name: 'languageSelect',
          id: 'language-select'
        }}
      >
        <MenuItem
          value="en"
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
        >
          <img src={us_flag} alt="English" />
        </MenuItem>
        <MenuItem
          value="es"
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
        >
          <img src={es_flag} alt="Spanish" />
        </MenuItem>
      </Select>
    )
  }
}

LanguagePicker.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withNamespaces()(withStyles(languagePickerStyle)(LanguagePicker))
