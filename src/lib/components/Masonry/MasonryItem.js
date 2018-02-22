import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    display: 'inline-block',
    width: '100%',
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class MasonryItem extends PureComponent {
  render() {
    const { classes, gutterBottom, ...rest } = this.props;
    const gutterBottomStyle = gutterBottom ? classes.gutterBottom : '';

    return <div className={classNames(classes.root, gutterBottomStyle)} {...rest} />;
  }
}

MasonryItem.defaultProps = {
  gutterBottom: true,
};

MasonryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  gutterBottom: PropTypes.bool,
};

export default withStyles(styles)(MasonryItem);
