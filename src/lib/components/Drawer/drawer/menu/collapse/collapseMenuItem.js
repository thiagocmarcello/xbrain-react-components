import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

import styles from '../styles';

class CollapseMenuItem extends PureComponent {
  render() {
    const { classes, children, onClick } = this.props;
    return (
      <ListItem button className={classes.nested} onClick={onClick}>
        {children}
      </ListItem>
    );
  }
}

CollapseMenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles, { name: 'XDrawerCollapseMenuItem' })(CollapseMenuItem);
