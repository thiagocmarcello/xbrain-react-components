import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class MenuItem extends PureComponent {
  renderIcon = (icon) => {
    const { classes } = this.props;
    return React.createElement(icon, { className: classes.icon });
  };

  render() {
    const {
      classes, leftIcon, rightIcon, onClick, name,
    } = this.props;

    const content = (
      <Fragment>
        <ListItemIcon className={classes.icon}>{this.renderIcon(leftIcon)}</ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.collapseListItemText,
            root: classes.listItemRoot,
          }}
          inset
          primary={name.toUpperCase()}
        />
        {rightIcon && this.renderIcon(rightIcon)}
      </Fragment>
    );

    return (
      <ListItem classes={{ gutters: classes.menuListItemGutters }} button onClick={onClick}>
        {content}
      </ListItem>
    );
  }
}

MenuItem.defaultProps = {
  onClick: null,
};

MenuItem.propTypes = {
  leftIcon: PropTypes.func.isRequired,
  rightIcon: PropTypes.func,
  onClick: PropTypes.func,
  classes: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  rightIcon: null,
};

export default withStyles(styles, { name: 'XDrawerMenuItem' })(MenuItem);
