import { fade } from 'material-ui/styles/colorManipulator';
import { TextField as TextFieldMui } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    '& > div': {
      height: 'auto !important',
    },
  },
  error: {
    '& > input': {
      borderColor: theme.palette.error.main,
      '&:focus': {
        borderColor: theme.palette.error.main,
        boxShadow: `0 0 0 0.2rem ${fade(theme.palette.error.main, 0.25)}`,
      },
    },
    '& > textarea': {
      borderColor: theme.palette.error.main,
      '&:focus': {
        borderColor: theme.palette.error.main,
        boxShadow: `0 0 0 0.2rem ${fade(theme.palette.error.main, 0.25)}`,
      },
    },
  },
  input: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: 2,
    boxSizing: 'border-box',
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    minHeight: 36,
    padding: '6px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem ${fade(theme.palette.primary.main, 0.25)}`,
    },
    '&:disabled': {
      background: theme.palette.grey[50],
      color: theme.palette.text.disabled,
    },
  },
  label: {
    fontSize: theme.typography.pxToRem(13),
    transform: 'none',
  },
});

const TEXT_TRANSFORM_ANY = 'any';
const TEXT_TRANSFORM_LOWERCASE = 'lowercase';
const TEXT_TRANSFORM_UPPERCASE = 'uppercase';

const normalizeValue = (value, { textTransform, type }) => {
  if (typeof value !== 'string' || type === 'password') return value;

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
  InputLabelProps,
  onChange,
  type,
  multiline,
  ...props
}) => {
  const rows = multiline ? { rows: 2 } : null;
  return (
    <TextFieldMui
      error={error}
      id={name}
      type={type}
      {...rows}
      multiline={multiline}
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
      {...props}
      onChange={(event) => {
        const newEvent = event;
        newEvent.target.value = normalizeValue(event.target.value, {
          textTransform,
          type,
        });

        if (onChange) {
          onChange(newEvent);
        }
      }}
    />
  );
};

TextField.defaultProps = {
  error: false,
  InputLabelProps: null,
  InputProps: null,
  multiline: false,
  name: null,
  onChange: null,
  textTransform: TEXT_TRANSFORM_UPPERCASE,
  type: 'text',
};

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  textTransform: PropTypes.oneOf([
    TEXT_TRANSFORM_ANY,
    TEXT_TRANSFORM_LOWERCASE,
    TEXT_TRANSFORM_UPPERCASE,
  ]),
};

export default withStyles(styles, { name: 'XTextField' })(TextField);
