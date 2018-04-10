import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import XButton from '../Button';

class XConfirmDialog extends PureComponent {
  handleConfirm = () => {
    const { onClick, data } = this.props;

    if (onClick) {
      onClick(data, true);
    }
  };

  handleClose = () => {
    const { onClick, data } = this.props;
    if (onClick) {
      onClick(data, false);
    }
  };

  render() {
    const {
      description,
      leftButtonProps,
      leftButtonText,
      open,
      rightButtonProps,
      rightButtonText,
      title,
      ...rest
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
        {...rest}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <XButton size="small" variant="ghost" onClick={this.handleClose} {...leftButtonProps}>
            {leftButtonText}
          </XButton>
          <XButton size="small" onClick={this.handleConfirm} autoFocus {...rightButtonProps}>
            {rightButtonText}
          </XButton>
        </DialogActions>
      </Dialog>
    );
  }
}

XConfirmDialog.defaultProps = {
  data: null,
  leftButtonProps: null,
  leftButtonText: 'cancelar',
  rightButtonProps: null,
  rightButtonText: 'ok',
};

XConfirmDialog.propTypes = {
  data: PropTypes.object,
  description: PropTypes.string.isRequired,
  leftButtonProps: PropTypes.object,
  leftButtonText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  rightButtonProps: PropTypes.object,
  rightButtonText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default XConfirmDialog;
