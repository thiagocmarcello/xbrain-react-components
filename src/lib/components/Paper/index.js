import { Paper, withStyles } from 'material-ui';
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
});
class XPaper extends PureComponent {
  render() {
    const {
      classes, children, grey, ...rest
    } = this.props;

    const greyClassName = grey ? classes.grey : null;

    return (
      <Paper
        elevation={grey ? 3 : 2}
        classes={{ root: greyClassName }}
        className={classes.paper}
        {...rest}
      >
        {children}
      </Paper>
    );
  }
}

XPaper.defaultProps = {
  children: null,
  grey: false,
};

XPaper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  grey: PropTypes.bool,
};

export default withStyles(styles)(XPaper);
