import { lighten, fade } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  header: {
    background: theme.palette.common.white,
    borderBottomColor: lighten(fade(theme.palette.divider, 1), 0.88),
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing.unit * 3,
    },
  },
  text: {
    color: theme.typography.body1.color,
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: theme.typography.fontWeightRegular,
    height: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      height: theme.spacing.unit * 6,
    },
  },
  subheading: {
    alignItems: 'center',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    display: 'inline-flex',
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightMedium,
    height: 48,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
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
        classes={{ subheading: classes.subheading }}
        color="primary"
        noWrap
      >
        {subheading.toUpperCase()}
      </Typography>
    ) : null);

  render() {
    const { classes } = this.props;
    const { title, subheading, gutterBottom } = this.props;

    return (
      <header className={classNames(classes.header, gutterBottom ? classes.gutterBottom : '')}>
        <div className={classes.headerInner}>
          {this.renderTitle(title, classes)}
          {this.renderSubheading(subheading, classes)}
        </div>
      </header>
    );
  }
}

PageHeader.defaultProps = {
  gutterBottom: true,
  subheading: null,
  title: null,
};

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  gutterBottom: PropTypes.bool,
  subheading: PropTypes.string,
  title: PropTypes.string,
};

export default withStyles(styles, { name: 'XPageHeader' })(PageHeader);
