import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress, Button } from 'material-ui';
import { ICON } from './../../config/styles';

const styles = theme => ({
  root: {
    display: 'inline-block',
  },
  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -Math.abs(ICON.size / 2),
    marginLeft: -Math.abs(ICON.size / 2),
  },
  gutterTop: {
    marginTop: theme.spacing.unit,
  },
  gutterRight: {
    marginRight: theme.spacing.unit,
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit,
  },
  gutterLeft: {
    marginLeft: theme.spacing.unit,
  },
});

class XButton extends PureComponent {
  getGutter = () => {
    const { gutter, classes } = this.props;

    if (!gutter) return '';

    return gutter
      .split(' ')
      .map((direction) => {
        switch (direction) {
          case 'all':
            return [
              classes.gutterTop,
              classes.gutterRight,
              classes.gutterBottom,
              classes.gutterLeft,
            ].join(' ');

          case 'top':
            return classes.gutterTop;

          case 'right':
            return classes.gutterRight;

          case 'bottom':
            return classes.gutterBottom;

          case 'left':
            return classes.gutterLeft;

          default:
            return '';
        }
      })
      .join(' ');
  };

  renderLabel = () => {
    const { loading, loadingText, children } = this.props;
    return loading ? loadingText : children;
  };

  render() {
    const {
      classes, loading, loadingText, gutter, ...props
    } = this.props;

    const gutters = this.getGutter();

    return (
      <div className={`${classes.root} ${gutters}`}>
        <div className={classes.wrapper}>
          <Button raised color="primary" disabled={loading} {...props}>
            {this.renderLabel()}
          </Button>
          {loading && <CircularProgress size={ICON.size} className={classes.buttonProgress} />}
        </div>
      </div>
    );
  }
}

XButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  gutter: PropTypes.string,
};

XButton.defaultProps = {
  loading: false,
  loadingText: 'aguarde',
  gutter: null,
};

export default withStyles(styles)(XButton);
