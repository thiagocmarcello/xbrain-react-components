import { Divider, Typography } from 'material-ui';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import withStyles from 'material-ui/styles/withStyles';

const styles = () => ({
  divider: {
    display: 'block',
    marginTop: 8,
  },
});

class XTypography extends PureComponent {
  render() {
    const {
      children, divider, classes, ...rest
    } = this.props;

    return (
      <Typography {...rest}>
        {children}
        {divider && <Divider className={classes.divider} component="span" />}
      </Typography>
    );
  }
}

XTypography.defaultProps = {
  divider: false,
};

XTypography.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  divider: PropTypes.bool,
};

export default withStyles(styles)(XTypography);
