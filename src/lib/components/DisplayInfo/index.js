import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import toString from '../../utils/toString';
import XTypography from '../Typography';

const styles = theme => ({
  textRoot: {
    alignItems: 'center',
    display: 'flex',
    minHeight: 36,
  },
  small: {
    marginTop: theme.spacing.unit * 1.5,
  },
  normal: {
    marginTop: theme.spacing.unit * 2,
  },
  large: {
    marginTop: theme.spacing.unit * 3,
  },
  text: {
    flex: 1,
    width: '100%',
    wordBreak: 'break-all',
  },
  startAdornment: {
    display: 'inline-flex',
    marginRight: theme.spacing.unit / 2,
  },
  endAdornment: {
    display: 'inline-flex',
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
      label,
      value,
      formControlProps,
      classes,
      fullWidth,
      uppercase,
      size,
      margin,
    } = this.props;

    return (
      <FormControl
        fullWidth={fullWidth}
        margin={margin}
        {...formControlProps}
        className={classes.formControl}
      >
        <InputLabel shrink>{label}</InputLabel>
        <div className={classNames(classes.textRoot, classes[size])}>
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
  margin: 'dense',
  size: 'normal',
  startAdornment: null,
  uppercase: true,
};

DisplayInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  endAdornment: PropTypes.node,
  formControlProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  startAdornment: PropTypes.node,
  uppercase: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default withStyles(styles, { name: 'XDisplayInfo' })(DisplayInfo);
