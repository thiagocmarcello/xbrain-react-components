import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Divider, Typography } from 'material-ui';

class XTypography extends PureComponent {
  render() {
    const { children, divider, ...rest } = this.props;
    return (
      <Typography {...rest}>
        {children}
        {divider && <Divider style={{ display: 'block', marginTop: 8 }} component="span" />}
      </Typography>
    );
  }
}

XTypography.defaultProps = {
  divider: false,
};

XTypography.propTypes = {
  children: PropTypes.node.isRequired,
  divider: PropTypes.bool,
};

export default XTypography;
