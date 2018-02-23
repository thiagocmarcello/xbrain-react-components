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
    const gutterStyle = !disableGutters ? classes.gutter : '';

    return <div className={gutterStyle}>{children}</div>;
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
