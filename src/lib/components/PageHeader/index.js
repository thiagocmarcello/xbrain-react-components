import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const PageHeaderHOC = ({ image, ...rest }) => {
  const styles = theme => ({
    header: {
      backgroundColor: theme.palette.primary.main,
      marginBottom: 24,
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${
          theme.palette.primary.all[700]
        } 50%)`,
      },
    },
    headerInner: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 2,
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      },
    },
    text: {
      color: '#fff',
    },
    title: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      marginBottom: theme.spacing.unit,
      [theme.breakpoints.up('md')]: {
        height: 48,
      },
    },
    subheading: {
      alignItems: 'center',
      display: 'flex',
      fontSize: theme.typography.pxToRem(12),
      height: 44,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(13),
      },
    },
  });

  class PageHeader extends PureComponent {
    renderTitle = (title, classes) =>
      (typeof title === 'string' ? (
        <Typography
          variant="title"
          classes={{ colorPrimary: classes.text }}
          className={classes.title}
          color="primary"
          noWrap
        >
          {title}
        </Typography>
      ) : null);

    renderSubheading = (subheading, classes) =>
      (typeof subheading === 'string' ? (
        <Typography
          variant="subheading"
          classes={{ subheading: classes.subheading, colorPrimary: classes.text }}
          color="primary"
          noWrap
        >
          {subheading.toUpperCase()}
        </Typography>
      ) : null);

    render() {
      const { classes } = this.props;
      const { title, subheading } = rest;
      return (
        <header className={classes.header}>
          <div className={classes.headerInner}>
            {this.renderTitle(title, classes)}
            {this.renderSubheading(subheading, classes)}
          </div>
        </header>
      );
    }
  }

  PageHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const PageHeaderContainer = withStyles(styles)(PageHeader);
  return <PageHeaderContainer />;
};

PageHeaderHOC.defaultProps = {
  title: null,
  subheading: null,
  image: null,
};

PageHeaderHOC.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.node,
};

export default PageHeaderHOC;
