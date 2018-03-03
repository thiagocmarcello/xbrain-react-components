import { CircularProgress, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

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
  sizeExtraLarge: {
    minHeight: 56,
    padding: theme.spacing.unit * 2,
  },
});

const VARIANTS = {
  FLAT: 'flat',
  RAISED: 'raised',
  FAB: 'fab',
  GHOST: 'ghost',
  FLOATING: 'floating',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'xlarge',
};

class XButton extends PureComponent {
  getGutter = () => {
    const { gutter, classes } = this.props;

    if (!gutter) return '';

    return classNames(gutter.split(' ').map((direction) => {
      switch (direction) {
        case 'all':
          return classNames(
            classes.gutterTop,
            classes.gutterRight,
            classes.gutterBottom,
            classes.gutterLeft,
          );

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
    }));
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

  getSizeStyle = () => {
    const { size, classes } = this.props;

    switch (size) {
      case SIZES.EXTRA_LARGE:
        return classes.sizeExtraLarge;
      default:
        return '';
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
      size,
      ...props
    } = this.props;

    const gutters = this.getGutter();
    const color = variant === VARIANTS.FLOATING ? 'secondary' : 'primary';
    const rootStyle = classNames(this.getStyle(), this.getSizeStyle());
    const computedSize = size === SIZES.EXTRA_LARGE ? SIZES.LARGE : size;

    return (
      <div className={`${fullWidth ? classes.holderFullWidth : classes.holder} ${gutters}`}>
        <Button
          variant={this.getVariant()}
          disabled={loading}
          color={color}
          classes={{ root: rootStyle, fullWidth: classes.fullWidth }}
          fullWidth={fullWidth}
          size={computedSize}
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
  variant: VARIANTS.RAISED,
  size: SIZES.MEDIUM,
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
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE, SIZES.EXTRA_LARGE]),
};

export default withStyles(styles, { withTheme: true, name: 'XButton' })(XButton);
