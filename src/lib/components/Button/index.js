import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress, Button } from 'material-ui';

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
    marginTop: -Math.abs(theme.spacing.unit * 3) / 2,
    marginLeft: -Math.abs(theme.spacing.unit * 3) / 2,
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
  ghost: {
    borderWidth: 1,
    borderStyle: 'solid',
    height: 36,
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

  getGhostStyle = () => {
    const { classes, ghost } = this.props;

    if (!ghost) return '';

    return classes.ghost;
  };

  renderLabel = () => {
    const { loading, loadingText, children } = this.props;
    return loading ? loadingText : children;
  };

  render() {
    const {
      classes, loading, loadingText, gutter, ghost, theme, ...props
    } = this.props;

    const gutters = this.getGutter();

    return (
      <div className={`${classes.root} ${gutters}`}>
        <div className={classes.wrapper}>
          <Button
            raised={!ghost}
            disabled={loading}
            color="primary"
            classes={{ root: this.getGhostStyle() }}
            {...props}
          >
            {this.renderLabel()}
          </Button>
          {loading && (
            <CircularProgress size={theme.spacing.unit * 3} className={classes.buttonProgress} />
          )}
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
  ghost: PropTypes.bool,
};

XButton.defaultProps = {
  loading: false,
  loadingText: 'aguarde',
  gutter: null,
  ghost: false,
};

export default withStyles(styles, { withTheme: true })(XButton);
