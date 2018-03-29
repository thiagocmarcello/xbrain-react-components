import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import AppBar from './appBar';
import Drawer from './drawer';

class Template extends PureComponent {
  render() {
    const {
      openSm,
      openMd,
      toggleDrawerSm,
      toggleDrawerMd,
      appBarLogo,
      appBarContent,
      menuData,
      menuIcon: MenuIcon,
      expandLessIcon: ExpandLessIcon,
      expandMoreIcon: ExpandMoreIcon,
    } = this.props;
    return (
      <Fragment>
        <AppBar
          openMd={openMd}
          toggleDrawerMd={toggleDrawerMd}
          toggleDrawerSm={toggleDrawerSm}
          content={appBarContent}
          menuIcon={MenuIcon}
        />
        <Drawer
          openSm={openSm}
          openMd={openMd}
          toggleDrawerMd={toggleDrawerMd}
          toggleDrawerSm={toggleDrawerSm}
          logo={appBarLogo}
          menuData={menuData}
          expandLessIcon={ExpandLessIcon}
          expandMoreIcon={ExpandMoreIcon}
        />
      </Fragment>
    );
  }
}

Template.propTypes = {
  appBarContent: PropTypes.node.isRequired,
  appBarLogo: PropTypes.node.isRequired,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
  menuData: PropTypes.array.isRequired,
  menuIcon: PropTypes.func.isRequired,
  openMd: PropTypes.bool.isRequired,
  openSm: PropTypes.bool.isRequired,
  toggleDrawerMd: PropTypes.func.isRequired,
  toggleDrawerSm: PropTypes.func.isRequired,
};

export default Template;
