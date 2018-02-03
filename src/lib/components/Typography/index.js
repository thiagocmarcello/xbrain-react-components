import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Divider, Typography } from 'material-ui';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    '&, &:hover': {
      color: theme.palette.text.primary,
    },
  },
  divider: {
    display: 'block',
    marginTop: 8,
  },
});
class XTypography extends PureComponent {
  render() {
    const {
      children, divider, classes, className, ...rest
    } = this.props;

    return (
      <Typography className={[classes.root, className].join(' ')} {...rest}>
        {children}
        {divider && <Divider className={classes.divider} component="span" />}
      </Typography>
    );
  }
}

XTypography.defaultProps = {
  className: '',
  divider: false,
};

XTypography.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
};

export default withStyles(styles)(XTypography);
