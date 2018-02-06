import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    paddingBottom: 56 + 24,
  },
});

class XFloatingContainer extends PureComponent {
  render() {
    const { children, classes } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

XFloatingContainer.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(XFloatingContainer);
