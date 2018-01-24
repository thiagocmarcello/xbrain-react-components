import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TextField as TextFieldMui } from 'material-ui';
import { hexToRgb } from '../../utils/color';

const styles = theme => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
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
  },
  textFieldFormLabel: {
    fontSize: theme.typography.pxToRem(18),
  },
});

const TextField = ({
  classes, InputProps, InputLabelProps, ...props
}) => (
  <TextFieldMui
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.textFieldRoot,
        input: classes.textFieldInput,
      },
      ...InputProps,
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.textFieldFormLabel,
      ...InputLabelProps,
    }}
    {...props}
  />
);

TextField.defaultProps = {
  InputProps: null,
  InputLabelProps: null,
};

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
};

export default withStyles(styles)(TextField);
