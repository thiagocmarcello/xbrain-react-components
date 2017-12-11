import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class XExternalRedirect extends PureComponent {
  render() {
    return <div>{window.location.replace(this.props.uri)}</div>;
  }
}

XExternalRedirect.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default XExternalRedirect;
