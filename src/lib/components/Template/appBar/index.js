import { AppBar, IconButton, Toolbar, Hidden } from 'material-ui';
import { lighten, fade } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const drawerClose = 0;

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: lighten(fade(theme.palette.divider, 1), 0.88),
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerClose}px)`,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  appBarShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.drawer.width,
      width: `calc(100% - ${theme.drawer.width}px)`,
    },
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit,
    },
  },
  menuIcon: {
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
        elevation={0}
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
