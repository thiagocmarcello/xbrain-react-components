import { FormControl } from 'material-ui/Form';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

import { hexToRgb } from '../../utils/color';

const styles = theme => ({
  inputRoot: {
    color: theme.typography.body1.color,
  },
  labelRoot: {
    color: `rgba(${hexToRgb(theme.typography.body1.color)}, 0.9)`,
    opacity: 0.8,
  },
});

class DisplayInfo extends PureComponent {
  render() {
    const {
      label, value, formControlProps, textFieldProps, classes,
    } = this.props;
    return (
      <FormControl fullWidth margin="dense" {...formControlProps}>
        <TextField
          disabled
          value={value}
          label={label}
          InputProps={{ disableUnderline: true, classes: { input: classes.inputRoot } }}
          InputLabelProps={{ classes: { root: classes.labelRoot } }}
          {...textFieldProps}
        />
      </FormControl>
    );
  }
}

DisplayInfo.defaultProps = {
  formControlProps: null,
  textFieldProps: null,
};

DisplayInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formControlProps: PropTypes.object,
  textFieldProps: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayInfo);
