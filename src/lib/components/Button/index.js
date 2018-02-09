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
  floating: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
});

const VARIANTS = {
  FLAT: 'flat',
  RAISED: 'raised',
  FAB: 'fab',
  GHOST: 'ghost',
  FLOATING: 'floating',
};

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

  getStyle = () => {
    const { variant, classes } = this.props;

    switch (variant) {
      case VARIANTS.GHOST:
        return classes.ghost;

      case VARIANTS.FLOATING:
        return classes.floating;

      default:
        return '';
    }
  };

  getVariant = () => {
    const { variant } = this.props;

    switch (variant) {
      case VARIANTS.GHOST:
        return VARIANTS.FLAT;

      case VARIANTS.FLOATING:
        return VARIANTS.FAB;

      default:
        return variant;
    }
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
    const color = variant === VARIANTS.FLOATING ? 'secondary' : 'primary';

    return (
      <div className={`${fullWidth ? classes.holderFullWidth : classes.holder} ${gutters}`}>
        <Button
          variant={this.getVariant()}
          disabled={loading}
          color={color}
          classes={{ root: this.getStyle(), fullWidth: classes.fullWidth }}
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
  variant: PropTypes.oneOf([
    VARIANTS.FLAT,
    VARIANTS.RAISED,
    VARIANTS.FAB,
    VARIANTS.GHOST,
    VARIANTS.FLOATING,
  ]),
};

export default withStyles(styles, { withTheme: true })(XButton);
