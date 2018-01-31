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
      title, description, open, leftButtonText, rightButtonText,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <XButton size="small" onClick={this.handleClose} ghost>
            {leftButtonText}
          </XButton>
          <XButton size="small" onClick={this.handleConfirm} autoFocus>
            {rightButtonText}
          </XButton>
        </DialogActions>
      </Dialog>
    );
  }
}

XConfirmDialog.defaultProps = {
  data: null,
  leftButtonText: 'cancelar',
  rightButtonText: 'ok',
};

XConfirmDialog.propTypes = {
  data: PropTypes.object,
  description: PropTypes.string.isRequired,
  leftButtonText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  rightButtonText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default XConfirmDialog;
