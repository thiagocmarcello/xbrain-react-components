import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography/Typography';

export default class TabContainer extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
