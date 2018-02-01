import { Select as SelectMui } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { hexToRgb } from '../../utils/color';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
  select: {
    borderRadius: 2,
    boxSizing: 'border-box',
    color: theme.palette.text.primary,
    height: 36,
    padding: '7px 0 7px 12px',
    '&:focus': {
      background: 'transparent',
      borderRadius: 2,
    },
  },
  selectError: {
    border: `1px solid ${theme.palette.error.main}`,
    '&:focus': {
      borderColor: theme.palette.error.main,
      boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.error.main)}, .25)`,
    },
  },
  selectNoError: {
    border: `1px solid ${theme.palette.grey[100]}`,
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.primary.main)}, .25)`,
    },
  },
  disabled: {
    background: theme.palette.grey[50],
    color: theme.palette.text.disabled,
  },
  inputLabelRoot: {
    fontSize: theme.typography.pxToRem(18),
  },
  icon: {
    top: 6,
  },
});

const Select = ({
  classes, label, name, InputLabelProps, error, ...props
}) => (
  <Fragment>
    <InputLabel
      error={false}
      classes={{
        root: classes.inputLabelRoot,
      }}
      shrink
      htmlFor={name}
      {...InputLabelProps}
    >
      {label}
    </InputLabel>
    <SelectMui
      disableUnderline
      classes={{
        root: classes.root,
        select: [classes.select, error ? classes.selectError : classes.selectNoError].join(' '),
        icon: classes.icon,
        disabled: classes.disabled,
      }}
      {...props}
    />
  </Fragment>
);

Select.defaultProps = {
  error: false,
  InputLabelProps: null,
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool,
  InputLabelProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Select);
