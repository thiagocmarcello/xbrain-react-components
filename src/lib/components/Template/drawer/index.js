import { Drawer, Hidden } from 'material-ui';
import { lighten, darken } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import Menu from './menu';

const drawerClose = 0;

const styles = theme => ({
  drawerPaper: {
    background: darken(theme.palette.grey[500], 0.5),
    border: 0,
    overflowX: 'hidden',
    width: theme.drawer.width,
  },
  drawerInner: {
    height: 'calc(100% - 56px)',
    overflowY: 'auto',
    position: 'fixed',
    top: 56,
    width: theme.drawer.width,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
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
  },
  drawerHeader: {
    background: darken(theme.palette.grey[500], 0.5),
    ...theme.mixins.toolbar,
    alignItems: 'center',
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
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    width: '100%',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  drawerHeaderLogoText: {
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(20),
  },
});

class DashboardDrawer extends PureComponent {
  componentDidMount() {
    this.handleBodyClass(!this.props.openMd);
  }

  handleDrawerSmToggle = () => this.props.toggleDrawerSm();

  handleDrawerMdToggle = () => {
    const { toggleDrawerMd, openMd } = this.props;
    this.handleBodyClass(openMd);
    toggleDrawerMd();
  };

  handleBodyClass = (openMd) => {
    const { body } = document;

    if (openMd) {
      body.classList.add('drawer-md-closed');
      body.classList.remove('drawer-md-open');
    } else {
      body.classList.add('drawer-md-open');
      body.classList.remove('drawer-md-closed');
    }
  };

  renderHeader = () => {
    const { classes, logo } = this.props;
    return <header className={classes.drawerHeader}>{logo}</header>;
  };

  render() {
    const {
      classes,
      openMd,
      openSm,
      menuData,
      expandLessIcon: ExpandLessIcon,
      expandMoreIcon: ExpandMoreIcon,
    } = this.props;

    return (
      <Fragment>
        <Hidden smDown implementation="css">
          <div className={openMd ? classes.drawerPaper : classes.drawerPaperClose} />
          <Drawer
            classes={{
              paper: classNames(classes.drawerPaper, !openMd && classes.drawerPaperClose),
            }}
            variant="permanent"
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
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
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
  logo: PropTypes.node.isRequired,
  menuData: PropTypes.array.isRequired,
  expandLessIcon: PropTypes.func.isRequired,
  expandMoreIcon: PropTypes.func.isRequired,
};

export default withStyles(styles, { name: 'XDrawer' })(DashboardDrawer);
