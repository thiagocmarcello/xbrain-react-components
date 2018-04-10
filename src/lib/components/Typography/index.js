import { Divider, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
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

    onClick: { cursor: 'pointer' },
  };
};

class XTypography extends PureComponent {
  getGutterStyle = () => {
    const { gutterBottom, gutterTop, classes } = this.props;
    const gutterTopSize = typeof gutterTop === 'boolean' ? '1x' : gutterTop;
    const gutterBottomSize = typeof gutterBottom === 'boolean' ? '1x' : gutterBottom;
    const classNamesList = [];

    if (gutterTop) {
      classNamesList.push(classes[`gutterTop${gutterTopSize}`]);
    }

    if (gutterBottom) {
      classNamesList.push(classes[`gutterBottom${gutterBottomSize}`]);
    }

    return classNames(classNamesList);
  };

  render() {
    const {
      children, divider, classes, gutterBottom, gutterTop, className, ...rest
    } = this.props;

    const onClickStyle = this.props.onClick ? classes.onClick : '';

    return (
      <Typography className={classNames(this.getGutterStyle(), onClickStyle, className)} {...rest}>
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
  onClick: null,
};

XTypography.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
  gutterBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['1x', '2x', '3x'])]),
  gutterTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['1x', '2x', '3x'])]),
  onClick: PropTypes.func,
};

export default withStyles(styles, { name: 'XTypography' })(XTypography);
