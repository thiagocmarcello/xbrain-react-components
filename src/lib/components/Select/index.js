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
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: 2,
    boxSizing: 'border-box',
    height: 36,
    padding: '7px 0 7px 12px',
    '&:focus': {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
      borderRadius: 2,
      boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.primary.main)}, .25)`,
    },
  },
  disabled: {
    background: theme.palette.grey[50],
  },
  inputLabelRoot: {
    fontSize: theme.typography.pxToRem(18),
  },
  icon: {
    top: 6,
  },
});

const Select = ({
  classes, label, name, InputLabelProps, ...props
}) => (
  <Fragment>
    <InputLabel
      classes={{ root: classes.inputLabelRoot }}
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
        select: classes.select,
        icon: classes.icon,
        disabled: classes.disabled,
      }}
      {...props}
    />
  </Fragment>
);

Select.defaultProps = {
  InputLabelProps: null,
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  InputLabelProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Select);
