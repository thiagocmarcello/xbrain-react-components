import { Collapse } from 'material-ui/transitions';

import { List } from 'material-ui';
import { ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

import CollapseMenuItem from './collapseMenuItem';
import MenuItem from '../menuItem';
import styles from '../styles';

class CollapseItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: props.data.open };
  }

  getCollapseIcon = () => {
    const { expandLessIcon: ExpandLessIcon, expandMoreIcon: ExpandMoreIcon } = this.props;
    return this.state.open ? ExpandLessIcon : ExpandMoreIcon;
  };

  handleClick = () => {
    const { openMd, toggleDrawerMd } = this.props;

    if (toggleDrawerMd && !openMd) {
      toggleDrawerMd();
      setTimeout(() => !this.state.open && this.toggleCollapse(), 231);
    } else {
      this.toggleCollapse();
    }
  };

  toggleCollapse = () => this.setState({ open: !this.state.open });

  handleChildrenClick = (callback) => {
    const { toggleDrawerMd, openMd } = this.props;

    if (toggleDrawerMd && !openMd) {
      toggleDrawerMd();
    } else {
      callback();
    }
  };

  renderIcon = (icon) => {
    const { classes } = this.props;
    return React.createElement(icon, { className: classes.icon });
  };

  renderChildren = (children) => {
    const { classes } = this.props;

    return children.map(({ name, onClick }) => (
      <CollapseMenuItem key={name} onClick={() => this.handleChildrenClick(onClick)}>
        <ListItemText classes={{ primary: classes.listItemText }} inset primary={name} />
      </CollapseMenuItem>
    ));
  };

  render() {
    const { classes, data } = this.props;
    const { name, icon, children } = data;
    return (
      <Fragment>
        <MenuItem
          leftIcon={icon}
          rightIcon={this.getCollapseIcon()}
          onClick={this.handleClick}
          name={name}
        />
        <Collapse
          classes={{ wrapperInner: classes.collapseInner }}
          component="li"
          in={this.state.open}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>{this.renderChildren(children)}</List>
        </Collapse>
      </Fragment>
    );
  }
}

CollapseItem.defaultProps = {
  openMd: null,
  toggleDrawerMd: null,
};

CollapseItem.propTypes = {
  classes: PropTypes.object.isRequired,
  openMd: PropTypes.bool,
  toggleDrawerMd: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    children: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
};

export default withStyles(styles, { name: 'XDrawerCallapseItem' })(CollapseItem);
