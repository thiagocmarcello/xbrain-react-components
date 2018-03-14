import { AppBar, IconButton, Toolbar, Hidden } from 'material-ui';
import { lighten } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const drawerClose = 56;

const styles = theme => ({
  appBar: {
    backgroundColor: lighten('#262f3d', 0.06),
    boxShadow: `-2px 0px 0px 0px ${lighten('#262f3d', 0.06)}`,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerClose}px)`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
  },
  appBarShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.drawer.width,
      width: `calc(100% - ${theme.drawer.width}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit,
    },
  },
  menuIcon: {
    color: theme.palette.common.white,
    margin: '0 4px 0 0',
    [theme.breakpoints.up('sm')]: {
      margin: '0 4px',
    },
  },
});

class AppBarTemplate extends PureComponent {
  handleDrawerSmToggle = () => this.props.toggleDrawerSm();

  render() {
    const {
      classes, openMd, content, menuIcon: MenuIcon,
    } = this.props;
    return (
      <AppBar
        id="xdrawer-app-bar"
        position="fixed"
        className={classNames(classes.appBar, openMd && classes.appBarShift)}
      >
        <Hidden mdUp implementation="css">
          <Toolbar className={classes.toolbar} disableGutters>
            <IconButton
              aria-label="open drawer"
              className={classes.menuIcon}
              onClick={this.handleDrawerSmToggle}
            >
              <MenuIcon />
            </IconButton>
            {content}
          </Toolbar>
        </Hidden>
        <Hidden smDown implementation="css">
          <Toolbar disableGutters>{content}</Toolbar>
        </Hidden>
      </AppBar>
    );
  }
}

AppBarTemplate.propTypes = {
  toggleDrawerSm: PropTypes.func.isRequired,
  openMd: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
  menuIcon: PropTypes.func.isRequired,
};

export default withStyles(styles, { name: 'XDrawerAppBar' })(AppBarTemplate);
