import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import styles from './styles';

class MenuItem extends PureComponent {
  renderIcon = (icon) => {
    const { classes, active } = this.props;
    return React.createElement(icon, {
      className: classNames(classes.icon, active ? classes.iconActive : ''),
    });
  };

  render() {
    const {
      classes, leftIcon, rightIcon, onClick, name, active,
    } = this.props;

    const content = (
      <Fragment>
        <ListItemIcon className={classNames(classes.icon, active ? classes.iconActive : '')}>
          {this.renderIcon(leftIcon)}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: active
              ? classNames(classes.collapseListItemText, classes.collapseListItemTextActive)
              : classNames(classes.collapseListItemText, classes.collapseListItemTextInactive),
            root: classes.listItemRoot,
          }}
          inset
          primary={name}
        />
        {rightIcon && this.renderIcon(rightIcon)}
      </Fragment>
    );

    return (
      <ListItem
        classes={{ root: classes.menuListItemRoot, gutters: classes.menuListItemGutters }}
        className={active ? classes.menuActive : ''}
        button
        onClick={onClick}
      >
        {content}
      </ListItem>
    );
  }
}

MenuItem.defaultProps = {
  active: false,
  onClick: null,
};

MenuItem.propTypes = {
  active: PropTypes.any,
  classes: PropTypes.any.isRequired,
  leftIcon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rightIcon: PropTypes.func,
};

MenuItem.defaultProps = {
  rightIcon: null,
};

export default withStyles(styles, { name: 'XDrawerMenuItem' })(MenuItem);
