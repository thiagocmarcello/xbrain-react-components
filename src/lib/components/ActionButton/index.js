import React, { PureComponent } from 'react';
import { Menu, IconButton } from 'material-ui';
import PropTypes from 'prop-types';
import Item from './item';

const ITEM_HEIGHT = 48;

class ActionButton extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { options, icon: Icon } = this.props;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'action-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon />
        </IconButton>
        {anchorEl ? (
          <Menu
            id="long-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {options.map(option => (
              <Item
                key={option.content}
                data={option.data}
                onClick={option.onClick}
                onClose={this.handleClose}
              >
                {option.content}
              </Item>
            ))}
          </Menu>
        ) : null}
      </div>
    );
  }
}

ActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    data: PropTypes.any,
    onClick: PropTypes.func,
  })).isRequired,
};

export default ActionButton;
