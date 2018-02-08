import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
});

class TabContainer extends PureComponent {
  render() {
    const { children, classes } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabContainer);
