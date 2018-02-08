import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import toString from '../../utils/toString';
import XTypography from '../Typography';

const styles = theme => ({
  textRoot: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    minHeight: 36,
  },
  text: {
    flex: 1,
  },
  startAdornment: {
    marginRight: theme.spacing.unit / 2,
  },
  endAdornment: {
    marginLeft: theme.spacing.unit / 2,
  },
});

class DisplayInfo extends PureComponent {
  renderStartAdornment = ({ startAdornment, classes }) =>
    startAdornment && (
      <XTypography component="div" className={classes.startAdornment}>
        {startAdornment}
      </XTypography>
    );

  renderEndAdornment = ({ endAdornment, classes }) =>
    endAdornment && (
      <XTypography component="div" className={classes.endAdornment}>
        {endAdornment}
      </XTypography>
    );

  render() {
    const {
      label, value, formControlProps, classes, fullWidth, uppercase,
    } = this.props;

    return (
      <FormControl
        fullWidth={fullWidth}
        margin="dense"
        {...formControlProps}
        className={classes.formControl}
      >
        <InputLabel shrink>{label}</InputLabel>
        <div className={classes.textRoot}>
          {this.renderStartAdornment(this.props)}
          <XTypography className={classes.text}>
            {uppercase ? toString(value).toUpperCase() : value}
          </XTypography>
          {this.renderEndAdornment(this.props)}
        </div>
      </FormControl>
    );
  }
}

DisplayInfo.defaultProps = {
  endAdornment: null,
  formControlProps: null,
  fullWidth: true,
  startAdornment: null,
  uppercase: true,
};

DisplayInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  endAdornment: PropTypes.node,
  formControlProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  startAdornment: PropTypes.node,
  uppercase: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default withStyles(styles)(DisplayInfo);
