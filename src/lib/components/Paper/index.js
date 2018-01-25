import { Paper, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }),
});

class XPaper extends PureComponent {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <Paper className={classes.paper} {...rest}>
        {this.props.children}
      </Paper>
    );
  }
}

XPaper.defaultProps = {
  children: null,
};

XPaper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles)(XPaper);
