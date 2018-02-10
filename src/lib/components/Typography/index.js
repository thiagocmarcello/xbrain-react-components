import { Divider, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = (theme) => {
  const GUTTER_SIZE = theme.spacing.unit;
  return {
    divider: {
      display: 'block',
      marginTop: GUTTER_SIZE,
    },
    gutterTop1x: { marginTop: GUTTER_SIZE * 1 },
    gutterTop2x: { marginTop: GUTTER_SIZE * 2 },
    gutterTop3x: { marginTop: GUTTER_SIZE * 3 },
    gutterBottom1x: { marginBottom: GUTTER_SIZE * 1 },
    gutterBottom2x: { marginBottom: GUTTER_SIZE * 2 },
    gutterBottom3x: { marginBottom: GUTTER_SIZE * 3 },
  };
};

class XTypography extends PureComponent {
  getGutterStyle = () => {
    const { gutterBottom, gutterTop, classes } = this.props;

    const gutterTopSize = typeof gutterTop === 'boolean' && gutterTop ? '1x' : gutterTop;

    const gutterBottomSize =
      typeof gutterBottom === 'boolean' && gutterBottom ? '1x' : gutterBottom;

    const classNames = [];
    if (gutterTop) {
      classNames.push(classes[`gutterTop${gutterTopSize}`]);
    }

    if (gutterBottom) {
      classNames.push(classes[`gutterBottom${gutterBottomSize}`]);
    }

    return classNames.join(' ');
  };

  render() {
    const {
      children, divider, classes, gutterBottom, gutterTop, className, ...rest
    } = this.props;

    return (
      <Typography className={`${this.getGutterStyle()} ${className}`} {...rest}>
        {children}
        {divider && <Divider className={classes.divider} component="span" />}
      </Typography>
    );
  }
}

XTypography.defaultProps = {
  className: '',
  divider: false,
  gutterBottom: false,
  gutterTop: false,
};

XTypography.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
  gutterBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['1x', '2x', '3x'])]),
  gutterTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['1x', '2x', '3x'])]),
};

export default withStyles(styles)(XTypography);
