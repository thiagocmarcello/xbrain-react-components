import { FormControl } from 'material-ui/Form';
import { TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { hexToRgb } from '../../utils/color';
import toString from '../../utils/toString';

const styles = theme => ({
  inputRoot: {
    color: theme.typography.body1.color,
    fontSize: theme.typography.pxToRem(13),
  },
  labelRoot: {
    color: `rgba(${hexToRgb(theme.typography.body1.color)}, 0.87)`,
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
          value={toString(value).toUpperCase()}
          label={label}
          InputProps={{ disableUnderline: true, classes: { input: classes.inputRoot } }}
          InputLabelProps={{ classes: { root: classes.labelRoot } }}
          {...textFieldProps}
          multiline
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formControlProps: PropTypes.object,
  textFieldProps: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayInfo);
