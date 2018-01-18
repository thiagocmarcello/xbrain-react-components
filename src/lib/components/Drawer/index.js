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
      appBarTitle,
      menuData,
      onClickLogo,
      menuIcon: MenuIcon,
      chevronLeftIcon: ChevronLeftIcon,
      chevronRightIcon: ChevronRightIcon,
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
          title={appBarTitle}
          onClickLogo={onClickLogo}
          logo={appBarLogo}
          menuData={menuData}
          chevronLeftIcon={ChevronLeftIcon}
          chevronRightIcon={ChevronRightIcon}
          expandLessIcon={ExpandLessIcon}
          expandMoreIcon={ExpandMoreIcon}
        />
      </Fragment>
    );
  }
}

Template.propTypes = {
  toggleDrawerMd: PropTypes.func.isRequired,
  toggleDrawerSm: PropTypes.func.isRequired,
  openMd: PropTypes.bool.isRequired,
  openSm: PropTypes.bool.isRequired,
  appBarLogo: PropTypes.node.isRequired,
  appBarContent: PropTypes.node.isRequired,
  appBarTitle: PropTypes.string.isRequired,
  menuData: PropTypes.array.isRequired,
  onClickLogo: PropTypes.func.isRequired,
  menuIcon: PropTypes.func.isRequired,
  chevronLeftIcon: PropTypes.func.isRequired,
  chevronRightIcon: PropTypes.func.isRequired,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
};

export default Template;
