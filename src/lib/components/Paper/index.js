import { Paper, withStyles } from 'material-ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  }),
  grey: {
    backgroundColor: theme.palette.grey[50],
  },
  fullWidth: {
    width: '100%',
  },
});
class XPaper extends PureComponent {
  render() {
    const {
      classes, children, grey, fullWidth, ...rest
    } = this.props;

    const rootClassName = grey ? classes.grey : null;

    return (
      <Paper
        elevation={grey ? 3 : 2}
        classes={{ root: rootClassName }}
        className={classNames(classes.paper, fullWidth ? classes.fullWidth : '')}
        {...rest}
      >
        {children}
      </Paper>
    );
  }
}

XPaper.defaultProps = {
  children: null,
  fullWidth: false,
  grey: false,
};

XPaper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  grey: PropTypes.bool,
};

export default withStyles(styles)(XPaper);
