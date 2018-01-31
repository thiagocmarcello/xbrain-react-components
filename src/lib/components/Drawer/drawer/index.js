import { lighten } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';

import { Drawer, Hidden, Typography } from 'material-ui';
import { ListItem } from 'material-ui/List';

import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import Menu from './menu';

const drawerClose = 56;

const styles = theme => ({
  drawerPaper: {
    background: theme.palette.grey[900],
    border: 0,
    overflowX: 'hidden',
    width: theme.drawer.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerInner: {
    height: `calc(100% - ${56 + 48}px)`,
    overflowY: 'auto',
    position: 'fixed',
    top: 56,
    width: theme.drawer.width,
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - ${64 + 48}px)`,
      top: 64,
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '&::-webkit-scrollbar': {
        width: theme.spacing.unit,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: lighten(theme.palette.grey[900], 0.2),
        borderRadius: 0,
        boxShadow: 'none',
      },
    },
  },
  drawerPaperClose: {
    width: drawerClose,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    alignItems: 'center',
    backgroundColor: lighten(theme.palette.grey[900], 0.06),
    borderBottom: `1px solid ${theme.palette.common.faintWhite}`,
    color: theme.palette.common.white,
    display: 'flex',
  },
  drawerHeaderLogoHolder: {
    height: 32,
    margin: '0 12px',
    width: 32,
  },
  drawerHeaderInner: {
    ...theme.mixins.toolbar,
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  drawerHeaderLogoText: {
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(20),
  },
  drawerFooter: {
    background: theme.palette.grey[900],
    borderTop: `1px solid ${theme.palette.common.faintWhite}`,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  drawerFooterButton: {
    justifyContent: 'flex-end',
  },
  drawerFooterIcon: {
    color: theme.palette.common.minFaintWhite,
  },
});

class DashboardDrawer extends PureComponent {
  handleDrawerSmToggle = () => this.props.toggleDrawerSm();

  handleDrawerMdToggle = () => {
    const { toggleDrawerMd, openMd } = this.props;
    const { body } = document;
    if (openMd) {
      body.classList.add('drawer-md-closed');
      body.classList.remove('drawer-md-open');
    } else {
      body.classList.add('drawer-md-open');
      body.classList.remove('drawer-md-closed');
    }

    toggleDrawerMd();
  };

  renderHeader = () => {
    const {
      classes, title, logo, onClickLogo,
    } = this.props;
    return (
      <header className={classes.drawerHeader}>
        <button onClick={onClickLogo} title="Início" className={classes.drawerHeaderInner}>
          <div className={classes.drawerHeaderLogoHolder}>
            <img alt="" src={logo} width="32" height="32" />
          </div>
          <Typography type="body1" className={classes.drawerHeaderLogoText}>
            {title}
          </Typography>
        </button>
      </header>
    );
  };

  render() {
    const {
      classes,
      openMd,
      openSm,
      menuData,
      chevronLeftIcon: ChevronLeftIcon,
      chevronRightIcon: ChevronRightIcon,
      expandLessIcon: ExpandLessIcon,
      expandMoreIcon: ExpandMoreIcon,
    } = this.props;

    return (
      <Fragment>
        <Hidden smDown implementation="css">
          <div className={openMd ? classes.drawerPaper : classes.drawerPaperClose} />
          <Drawer
            classes={{
              paper: [classes.drawerPaper, !openMd && classes.drawerPaperClose].join(' '),
            }}
            type="permanent"
            open={openMd}
          >
            {this.renderHeader()}
            <div className={classes.drawerInner}>
              <Menu
                expandLessIcon={ExpandLessIcon}
                expandMoreIcon={ExpandMoreIcon}
                data={menuData}
                openMd={openMd}
                toggleDrawerMd={this.handleDrawerMdToggle}
              />
            </div>
            <footer className={classes.drawerFooter}>
              <ListItem
                component="span"
                className={classes.drawerFooterButton}
                button
                onClick={this.handleDrawerMdToggle}
              >
                {openMd ? (
                  <ChevronLeftIcon className={classes.drawerFooterIcon} />
                ) : (
                  <ChevronRightIcon className={classes.drawerFooterIcon} />
                )}
              </ListItem>
            </footer>
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={openSm}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerSmToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {this.renderHeader()}
            <div className={classes.drawerInner}>
              <Menu
                expandLessIcon={ExpandLessIcon}
                expandMoreIcon={ExpandMoreIcon}
                data={menuData}
              />
            </div>
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

DashboardDrawer.propTypes = {
  openMd: PropTypes.bool.isRequired,
  openSm: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  toggleDrawerMd: PropTypes.func.isRequired,
  toggleDrawerSm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  menuData: PropTypes.array.isRequired,
  onClickLogo: PropTypes.func.isRequired,
  chevronLeftIcon: PropTypes.func.isRequired,
  chevronRightIcon: PropTypes.func.isRequired,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
};

export default withStyles(styles)(DashboardDrawer);
