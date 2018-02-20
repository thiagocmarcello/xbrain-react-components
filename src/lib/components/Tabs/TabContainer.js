import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
  gutter: {
    padding: theme.spacing.unit * 3,
  },
});

class TabContainer extends PureComponent {
  render() {
    const { children, classes, disableGutters } = this.props;
    return <div className={!disableGutters ? classes.gutter : ''}>{children}</div>;
  }
}

TabContainer.defaultProps = {
  disableGutters: false,
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
};

export default withStyles(styles)(TabContainer);
