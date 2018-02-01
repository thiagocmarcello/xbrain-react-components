import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import toString from '../../utils/toString';
import XTextField from '../TextField';

const styles = theme => ({
  inputRoot: {
    '& textarea:disabled': {
      background: 'transparent',
      borderColor: 'transparent',
      paddingLeft: 0,
      paddingRight: 0,
      color: theme.palette.text.primary,
    },
  },
});

class DisplayInfo extends PureComponent {
  render() {
    const {
      label,
      value,
      formControlProps,
      textFieldProps,
      classes,
      InputProps,
      InputLabelProps,
      fullWidth,
    } = this.props;
    return (
      <FormControl fullWidth={fullWidth} margin="dense" {...formControlProps}>
        <XTextField
          disabled
          value={toString(value).toUpperCase()}
          label={label}
          className={classes.inputRoot}
          multiline
          InputProps={{
            ...InputProps,
            disableUnderline: true,
          }}
          InputLabelProps={{
            ...InputLabelProps,
            shrink: true,
          }}
          {...textFieldProps}
        />
      </FormControl>
    );
  }
}

DisplayInfo.defaultProps = {
  formControlProps: null,
  fullWidth: true,
  InputLabelProps: null,
  InputProps: null,
  textFieldProps: null,
};

DisplayInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  formControlProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  textFieldProps: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default withStyles(styles)(DisplayInfo);
