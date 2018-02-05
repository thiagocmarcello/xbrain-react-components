import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress, Button } from 'material-ui';

const styles = theme => ({
  holder: {
    position: 'relative',
    display: 'inline-block',
  },
  holderFullWidth: {
    position: 'relative',
    display: 'block',
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
  fullWidth: {
    width: '100%',
  },
  ghost: {
    borderWidth: 1,
    borderStyle: 'solid',
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

  getStyle = (ghost) => {
    const { classes } = this.props;

    if (ghost) return classes.ghost;

    return '';
  };

  renderLabel = () => {
    const { loading, loadingText, children } = this.props;
    return loading ? loadingText : children;
  };

  render() {
    const {
      classes,
      loading,
      loadingText,
      gutter,
      theme,
      fullWidth,
      variant,
      ...props
    } = this.props;

    const gutters = this.getGutter();
    const isGhost = variant === 'ghost';

    return (
      <div className={`${fullWidth ? classes.holderFullWidth : classes.holder} ${gutters}`}>
        <Button
          variant={isGhost ? 'flat' : variant}
          disabled={loading}
          color="primary"
          classes={{ root: this.getStyle(isGhost), fullWidth: classes.fullWidth }}
          fullWidth={fullWidth}
          {...props}
        >
          {this.renderLabel()}
        </Button>
        {loading && (
          <CircularProgress size={theme.spacing.unit * 3} className={classes.buttonProgress} />
        )}
      </div>
    );
  }
}

XButton.defaultProps = {
  fullWidth: false,
  gutter: null,
  loading: false,
  loadingText: 'aguarde',
  variant: 'raised',
};

XButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  gutter: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  theme: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['flat', 'raised', 'fab', 'ghost']),
};

export default withStyles(styles, { withTheme: true })(XButton);
