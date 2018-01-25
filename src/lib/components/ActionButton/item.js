import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui';

class Item extends PureComponent {
  handleClick = () => {
    const { onClick, data, onClose } = this.props;

    if (onClick) {
      if (onClose) {
        onClose();
      }
      onClick(data);
    }
  };

  render() {
    return <MenuItem onClick={this.handleClick}>{this.props.children}</MenuItem>;
  }
}

Item.defaultProps = {
  onClick: null,
  data: null,
  onClose: null,
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.any,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default Item;
