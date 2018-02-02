import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

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
      label, value, formControlProps, classes, fullWidth,
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
          <XTypography className={classes.text}>{value}</XTypography>
          {this.renderEndAdornment(this.props)}
        </div>
      </FormControl>
    );
  }
}

DisplayInfo.defaultProps = {
  fullWidth: true,
  formControlProps: null,
  startAdornment: null,
  endAdornment: null,
};

DisplayInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formControlProps: PropTypes.object,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
};

export default withStyles(styles)(DisplayInfo);
