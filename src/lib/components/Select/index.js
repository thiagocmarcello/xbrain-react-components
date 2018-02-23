import { fade } from 'material-ui/styles/colorManipulator';
import { InputLabel } from 'material-ui/Input';
import { Select as SelectMui } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
  select: {
    borderRadius: 2,
    boxSizing: 'border-box',
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    height: 36,
    padding: '9px 0 9px 12px',
    '&:focus': {
      background: 'transparent',
      borderRadius: 2,
    },
  },
  selectError: {
    border: `1px solid ${theme.palette.error.main}`,
    '&:focus': {
      borderColor: theme.palette.error.main,
      boxShadow: `0 0 0 0.2rem ${fade(theme.palette.error.main, 0.25)}`,
    },
  },
  selectNoError: {
    border: `1px solid ${theme.palette.grey[100]}`,
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem ${fade(theme.palette.primary.main, 0.25)}`,
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
  classes, label, name, InputLabelProps, error, required, ...props
}) => (
  <Fragment>
    {label && (
      <InputLabel
        error={false}
        classes={{
          root: classes.inputLabelRoot,
        }}
        shrink
        htmlFor={name}
        {...InputLabelProps}
      >
        {label} {required && ' *'}
      </InputLabel>
    )}
    <SelectMui
      disableUnderline
      classes={{
        root: label ? classes.root : '',
        select: classNames(classes.select, error ? classes.selectError : classes.selectNoError),
        icon: classes.icon,
        disabled: classes.disabled,
      }}
      required={required}
      {...props}
    />
  </Fragment>
);

Select.defaultProps = {
  error: false,
  InputLabelProps: null,
  label: null,
  required: false,
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool,
  InputLabelProps: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default withStyles(styles)(Select);
