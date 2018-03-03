import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const MansoryHoc = ({ columns, ...rest }) => {
  const styles = theme => ({
    root: {
      columnGap: theme.spacing.unit * 2,
      [theme.breakpoints.only('xs')]: {
        columnCount: columns.xs,
      },
      [theme.breakpoints.only('sm')]: {
        columnCount: columns.sm,
      },
      [theme.breakpoints.only('md')]: {
        columnCount: columns.md,
      },
      [theme.breakpoints.only('lg')]: {
        columnCount: columns.lg,
      },
      [theme.breakpoints.only('xl')]: {
        columnCount: columns.xl,
      },
    },
  });

  class Masonry extends PureComponent {
    render() {
      const { classes } = this.props;

      return <div className={classes.root} {...rest} />;
    }
  }

  Masonry.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const MasonryContainer = withStyles(styles, { name: 'XMasonry' })(Masonry);
  return <MasonryContainer />;
};

MansoryHoc.defaultProps = {
  columns: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
};

MansoryHoc.propTypes = {
  columns: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default MansoryHoc;
