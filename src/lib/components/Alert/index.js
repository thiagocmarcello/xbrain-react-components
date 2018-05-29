import { withStyles } from 'material-ui/styles';
import { yellow, blue, red, green } from 'material-ui/colors';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { lighten, emphasize } from 'material-ui/styles/colorManipulator';

const VARIANTS = {
  DANGER: 'danger',
  DEFAULT: 'default',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
};

const styles = theme => ({
  root: {
    border: 1,
    borderColor: 'transparent',
    borderRadius: theme.spacing.unit / 2,
    borderStyle: 'solid',
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
  },
  square: {
    borderRadius: '0 !important',
  },
  danger: {
    background: lighten(red[100], 0.5),
    borderColor: emphasize(red[100], 0.05),
    color: emphasize(red[700]),
  },
  default: {
    background: theme.palette.grey[100],
    borderColor: emphasize(theme.palette.grey[100], 0.05),
    color: emphasize(theme.palette.grey[700]),
  },
  info: {
    background: lighten(blue[100], 0.5),
    borderColor: emphasize(blue[100], 0.05),
    color: emphasize(blue[700]),
  },
  success: {
    background: lighten(green[100], 0.5),
    borderColor: emphasize(green[100], 0.05),
    color: emphasize(green[700]),
  },
  warning: {
    background: lighten(yellow[100], 0.5),
    borderColor: emphasize(yellow[100], 0.05),
    color: emphasize(yellow[700]),
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class XAlert extends PureComponent {
  getColorStyle = () => {
    const { classes, variant } = this.props;

    switch (variant) {
      case VARIANTS.DANGER:
        return classes.danger;
      case VARIANTS.DEFAULT:
        return classes.default;
      case VARIANTS.INFO:
        return classes.info;
      case VARIANTS.SUCCESS:
        return classes.success;
      case VARIANTS.WARNING:
        return classes.warning;
      default:
        return classes.default;
    }
  };

  render() {
    const {
      classes, square, gutterBottom, className, ...rest
    } = this.props;

    const { root } = classes;
    const colorStyle = this.getColorStyle();
    const squareStyle = square ? classes.square : '';
    const gutterStyle = gutterBottom ? classes.gutterBottom : '';

    return (
      <div
        className={classNames(root, colorStyle, squareStyle, gutterStyle, className)}
        {...rest}
      />
    );
  }
}

XAlert.defaultProps = {
  variant: PropTypes.default,
  square: false,
  gutterBottom: true,
  className: '',
};

XAlert.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  gutterBottom: PropTypes.bool,
  square: PropTypes.bool,
  variant: PropTypes.oneOf([
    VARIANTS.DANGER,
    VARIANTS.DEFAULT,
    VARIANTS.INFO,
    VARIANTS.SUCCESS,
    VARIANTS.WARNING,
  ]),
};

export default withStyles(styles, { name: 'XAlert' })(XAlert);
