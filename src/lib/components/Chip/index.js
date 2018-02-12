import { Chip } from 'material-ui';
import { emphasize, fade } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SIZES_HEIGHT = {
  SMALL: 28,
  MEDIUM: 32,
  LARGE: 36,
};

const styles = theme => ({
  root: {
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
  small: {
    height: SIZES_HEIGHT.SMALL,
    borderRadius: SIZES_HEIGHT.SMALL / 2,
  },
  medium: {
    height: SIZES_HEIGHT.MEDIUM,
    borderRadius: SIZES_HEIGHT.MEDIUM / 2,
  },
  large: {
    height: SIZES_HEIGHT.LARGE,
    borderRadius: SIZES_HEIGHT.LARGE / 2,
  },
  avatarSmall: {
    width: SIZES_HEIGHT.SMALL,
    height: SIZES_HEIGHT.SMALL,
  },
  avatarMedium: {
    width: SIZES_HEIGHT.MEDIUM,
    height: SIZES_HEIGHT.MEDIUM,
  },
  avatarLarge: {
    width: SIZES_HEIGHT.LARGE,
    height: SIZES_HEIGHT.LARGE,
  },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'inline-block',
  },
  deleteIconSmall: {
    margin: '0 2px 0 -8px',
  },
  deleteIconMedium: {
    margin: '0 4px 0 -8px',
  },
  deleteIconLarge: {
    margin: '0 4px 0 -8px',
  },
  default: {
    color: theme.palette.getContrastText(theme.palette.grey[100]),
    backgroundColor: theme.palette.grey[100],
  },
  defaultAvatar: {
    backgroundColor: fade(theme.palette.grey[700], 0.26),
  },
  defaultDeleteIcon: {
    color: fade(theme.palette.grey[700], 0.26),
    '&:hover': {
      color: fade(theme.palette.grey[700], 0.4),
    },
  },
  defaultDeletable: {
    '&:focus': {
      backgroundColor: emphasize(theme.palette.grey[100], 0.08),
    },
  },
});

class XChip extends PureComponent {
  getSizeStyles = () => {
    const { classes, size } = this.props;
    return classes[size];
  };

  getAvatarStyles = () => {
    const { classes, size } = this.props;

    switch (size) {
      case SIZES.SMALL:
        return classes.avatarSmall;

      case SIZES.LARGE:
        return classes.avatarLarge;

      default:
        return classes.avatarMedium;
    }
  };

  getDeleteIconSizeStyles = () => {
    const { classes, size } = this.props;

    switch (size) {
      case SIZES.SMALL:
        return classes.deleteIconSmall;

      case SIZES.LARGE:
        return classes.deleteIconLarge;

      default:
        return classes.deleteIconMedium;
    }
  };

  render() {
    const { classes, size, ...rest } = this.props;
    const sizeStyle = this.getSizeStyles();
    const avatarStyle = this.getAvatarStyles();
    const deleteIconSizeStyle = this.getDeleteIconSizeStyles();

    return (
      <Chip
        classes={{
          avatar: [avatarStyle, classes.defaultAvatar].join(' '),
          root: classes.root,
          label: classes.label,
          deleteIcon: [deleteIconSizeStyle, classes.defaultDeleteIcon].join(' '),
          deletable: classes.defaultDeletable,
        }}
        className={[sizeStyle, classes.default].join(' ')}
        {...rest}
      />
    );
  }
}

XChip.defaultProps = {
  size: SIZES.MEDIUM,
};

XChip.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
};

export default withStyles(styles)(XChip);
