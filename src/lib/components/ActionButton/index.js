import { Menu, IconButton } from 'material-ui';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

import Item from './item';

const ITEM_HEIGHT = 48;

const styles = () => ({
  rootIconButtonGutterLess: {
    width: 'auto',
  },
  disableButtonHover: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
});

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
    const {
      options, icon: Icon, classes, gutter,
    } = this.props;

    const gutterStyle = !gutter ? classes.rootIconButtonGutterLess : null;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'action-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.disableButtonHover}
          classes={{ root: gutterStyle }}
          disableRipple
        >
          <Icon />
        </IconButton>
        {anchorEl ? (
          <Menu
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

ActionButton.defaultProps = {
  gutter: true,
};

ActionButton.propTypes = {
  icon: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    data: PropTypes.any,
    onClick: PropTypes.func,
  })).isRequired,
  classes: PropTypes.object.isRequired,
  gutter: PropTypes.bool,
};

export default withStyles(styles, { name: 'XActionButton' })(ActionButton);
