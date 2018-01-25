import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TextField as TextFieldMui } from 'material-ui';
import { hexToRgb } from '../../utils/color';

const styles = theme => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  error: {
    '& > input': {
      borderColor: theme.palette.error.main,
      '&:focus': {
        borderColor: theme.palette.error.main,
        boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.error.main)}, .25)`,
      },
    },
  },
  input: {
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[100]}`,
    fontSize: 16,
    padding: '7px 12px',
    minHeight: 36,
    boxSizing: 'border-box',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.primary.main)}, .25)`,
    },
    '&:disabled': {
      background: theme.palette.grey[50],
    },
  },
  label: {
    fontSize: theme.typography.pxToRem(18),
  },
});

const TEXT_TRANSFORM_UPPERCASE = 'uppercase';
const TEXT_TRANSFORM_LOWERCASE = 'lowercase';
const TEXT_TRANSFORM_ANY = 'any';

const normalizeValue = (value, textTransform) => {
  if (typeof value !== 'string') return value;

  switch (textTransform) {
    case TEXT_TRANSFORM_UPPERCASE:
      return value.toUpperCase();
    case TEXT_TRANSFORM_LOWERCASE:
      return value.toLowerCase();
    default:
      return value;
  }
};

const TextField = ({
  classes,
  name,
  InputProps,
  error,
  textTransform,
  value,
  InputLabelProps,
  ...props
}) => (
  <TextFieldMui
    error={error}
    id={name}
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.root,
        error: classes.error,
        input: classes.input,
      },
      ...InputProps,
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.label,
      error: false,
      ...InputLabelProps,
    }}
    value={normalizeValue(value, textTransform)}
    {...props}
  />
);

TextField.defaultProps = {
  InputProps: null,
  InputLabelProps: null,
  error: false,
  name: null,
  textTransform: 'uppercase',
};

TextField.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string,
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
  textTransform: PropTypes.oneOf([
    TEXT_TRANSFORM_UPPERCASE,
    TEXT_TRANSFORM_LOWERCASE,
    TEXT_TRANSFORM_ANY,
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default withStyles(styles)(TextField);
