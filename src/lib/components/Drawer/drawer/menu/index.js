import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import CollpseItem from './collapse/collapseItem';
import MenuItem from './menuItem';
import styles from './styles';

class Menu extends PureComponent {
  renderSingleMenu = ({ icon, name, onClick }) => (
    <MenuItem key={name} onClick={onClick} leftIcon={icon} name={name} />
  );

  renderCollapseMenu = (menu) => {
    const {
      openMd, toggleDrawerMd, expandLessIcon, expandMoreIcon,
    } = this.props;
    return (
      <CollpseItem
        expandLessIcon={expandLessIcon}
        expandMoreIcon={expandMoreIcon}
        openMd={openMd}
        toggleDrawerMd={toggleDrawerMd}
        key={menu.name}
        data={menu}
      />
    );
  };

  renderMenuListItems = () =>
    this.props.data.map(({ item }) => {
      const { children } = item;
      return children ? this.renderCollapseMenu(item) : this.renderSingleMenu(item);
    });

  render() {
    const { classes } = this.props;
    return <List className={classes.list}>{this.renderMenuListItems()}</List>;
  }
}

Menu.defaultProps = {
  openMd: null,
  toggleDrawerMd: null,
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  openMd: PropTypes.bool,
  toggleDrawerMd: PropTypes.func,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
};

export default withStyles(styles)(Menu);
