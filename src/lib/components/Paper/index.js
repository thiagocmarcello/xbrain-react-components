import { Paper, withStyles } from 'material-ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
  },
  default: {
    backgroundColor: theme.palette.common.white,
  },
  grey: {
    backgroundColor: theme.palette.grey[50],
  },
  fullWidth: {
    width: '100%',
  },
});

const VARIANTS = {
  DEFAULT: 'default',
  GREY: 'grey',
};

class XPaper extends PureComponent {
  render() {
    const {
      classes, children, variant, fullWidth, className, ...rest
    } = this.props;

    const rootClassName = variant === VARIANTS.DEFAULT ? classes.default : classes.grey;

    return (
      <Paper
        elevation={VARIANTS.GREY ? 3 : 2}
        classes={{ root: rootClassName }}
        className={classNames(classes.paper, fullWidth ? classes.fullWidth : '', className)}
        {...rest}
      >
        {children}
      </Paper>
    );
  }
}

XPaper.defaultProps = {
  children: null,
  className: null,
  fullWidth: false,
  variant: VARIANTS.DEFAULT,
};

XPaper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf([VARIANTS.DEFAULT, VARIANTS.GREY]),
};

export default withStyles(styles, { name: 'XPaper' })(XPaper);
