import { Creatable } from 'react-select';
import { fade } from 'material-ui/styles/colorManipulator';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import createFilterOptions from 'react-select-fast-filter-options';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css';

import Option from './Option';
import XChip from '../Chip';

const ITEM_HEIGHT = 48;

const styles = theme => ({
  '@global': {
    '.Select.is-focused:not(.is-open) > .Select-control, .Select.is-open .Select-control': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem ${fade(theme.palette.primary.main, 0.25)}`,
    },
    '.Select-control': {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.grey[100],
      borderRadius: '2px !important',
      color: theme.palette.text.primary,
      display: 'flex',
      height: 'auto',
      minHeight: '36px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(14),
      '& .Select-input:focus': {
        background: 'inherit',
      },
    },
    '.Select-multi-value-wrapper': {
      alignItems: 'center',
      display: 'inline-flex !important',
      flexWrap: 'wrap',
      width: 'calc(100% - 24px)',
    },
    '.Select.has-value.is-clearable.Select--multi .Select-multi-value-wrapper': {
      paddingRight: 6,
      width: 'calc(100% - 48px)',
    },
    '.Select.has-value.Select--multi .Select-multi-value-wrapper': {
      paddingBottom: 3,
    },
    '.Select-arrow-zone, .Select-clear-zone, .Select--multi .Select-clear-zone': {
      alignItems: 'center',
      color: theme.palette.text.secondary,
      display: 'inline-flex',
      justifyContent: 'center',
      width: 24,
    },
    '.Select-clear-zone': {
      '&:hover': {
        color: 'currentColor',
      },
    },
    '.Select-values': {
      display: 'inline-flex',
      marginLeft: 3,
      marginTop: 3,
      maxWidth: '100%',
    },
    '.Select-input': {
      display: 'inline-flex !important',
      height: 34,
      padding: '0 12px',
    },
    '.Select--multi.has-value .Select-input': {
      height: 28,
      marginLeft: 3,
      marginTop: 3,
    },
    '.Select-input > input, .Select-control > *:last-child': {
      padding: 0,
    },
    '.Select-placeholder, .Select--single > .Select-control .Select-value': {
      color: theme.palette.text.primary,
      paddingLeft: 12,
      width: 'calc(100% - 24px)',
    },
    '.Select-placeholder': {
      opacity: 0.42,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      border: 0,
      boxShadow: theme.shadows[2],
      left: 0,
      maxHeight: ITEM_HEIGHT * 4.5,
      position: 'absolute',
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },

    '.Select.is-disabled > .Select-control': {
      background: theme.palette.grey[50],
    },
    '.Select.is-disabled .Select-placeholder, .Select.is-disabled .Select-value': {
      color: theme.palette.text.disabled,
      opacity: 1,
    },
    '.Select.is-disabled .Select-arrow-zone': {
      opacity: 1,
    },
  },
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  error: {
    '& .Select-control': {
      borderColor: `${theme.palette.error.main} !important`,
    },
    '&.is-focused .Select-control': {
      boxShadow: `0 0 0 0.2rem ${fade(theme.palette.error.main, 0.25)} !important`,
    },
  },
  createLabel: {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
  },
});

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterOptions: null,
    };
  }

  componentWillMount() {
    this.setFilter(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.handleFilter(nextProps);
  }

  setFilter = props =>
    this.setState({
      filterOptions: createFilterOptions({
        options: props.options,
        labelKey: props.labelKey,
        valueKey: props.valueKey,
      }),
    });

  handleFilter = (props) => {
    const { options } = props;

    if (options !== this.props.options) {
      this.setFilter(props);
    }
  };

  handleInputChange = value => (value ? value.toUpperCase() : value);

  renderLabel = () => {
    const { name, label, required } = this.props;
    return (
      label && (
        <InputLabel error={false} shrink htmlFor={name}>
          {label}
          {required && ' *'}
        </InputLabel>
      )
    );
  };

  renderValue = (valueProps) => {
    const { avatar, labelKey, disabled } = this.props;
    const { value, children, onRemove } = valueProps;

    const label = value[labelKey];

    if (onRemove) {
      return (
        <div className="Select-values">
          <XChip
            avatar={avatar}
            size="small"
            tabIndex={-1}
            label={label && label.toUpperCase()}
            onDelete={(event) => {
              if (!disabled) {
                event.preventDefault();
                event.stopPropagation();
                onRemove(value);
              }
            }}
          />
        </div>
      );
    }

    return <div className="Select-value">{children}</div>;
  };

  renderArrow = arrowProps => (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />);

  renderPromptTextCreator = (label) => {
    const { promptTextCreator, classes } = this.props;

    if (promptTextCreator) {
      return promptTextCreator(label);
    }

    return (
      <div>
        Criar a opção <span className={classes.createLabel}>{label}</span>
      </div>
    );
  };

  render() {
    const {
      avatar,
      classes,
      clearAllText,
      creatable,
      error,
      label,
      labelKey,
      multiple,
      name,
      noResultsText,
      options,
      placeholder,
      required,
      valueKey,
      inputProps,
      ...rest
    } = this.props;

    const { filterOptions } = this.state;
    const selectComponent = creatable ? { selectComponent: Creatable } : null;
    const rootStyle = label ? classes.root : '';
    const newInputProps = inputProps || {};

    return (
      <FormControl fullWidth className={error ? 'has-error' : ''}>
        <div className={rootStyle}>
          {this.renderLabel()}
          <VirtualizedSelect
            arrowRenderer={this.renderArrow}
            className={error ? classes.error : ''}
            clearable={multiple}
            clearAllText={clearAllText}
            clearRenderer={() => <ClearIcon />}
            closeOnSelect={!multiple}
            filterOptions={filterOptions}
            id={name}
            joinValues={false}
            multi={multiple}
            noResultsText={<Typography variant="body1">{this.props.noResultsText}</Typography>}
            onInputChange={this.handleInputChange}
            optionHeight={ITEM_HEIGHT}
            optionRenderer={Option}
            options={options}
            placeholder={placeholder}
            removeSelected
            searchable
            simpleValue
            valueComponent={this.renderValue}
            labelKey={labelKey}
            valueKey={valueKey}
            tabSelectsValue={false}
            {...rest}
            {...selectComponent}
            promptTextCreator={this.renderPromptTextCreator}
            // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
            inputProps={{ ...newInputProps, autoComplete: new Date().getTime() }}
          />
        </div>
      </FormControl>
    );
  }
}

Select.defaultProps = {
  avatar: null,
  clearAllText: 'Remover todos',
  creatable: false,
  disabled: false,
  error: false,
  inputProps: null,
  label: null,
  labelKey: 'label',
  multiple: false,
  name: null,
  noResultsText: 'Nenhum resultado encontrado.',
  placeholder: 'Selecione',
  promptTextCreator: null,
  required: null,
  valueKey: 'value',
};

Select.propTypes = {
  avatar: PropTypes.node,
  classes: PropTypes.object.isRequired,
  clearAllText: PropTypes.string,
  creatable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  labelKey: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  noResultsText: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  promptTextCreator: PropTypes.func,
  required: PropTypes.bool,
  valueKey: PropTypes.string,
};

export default withStyles(styles, { name: 'XVirtualizedSelect' })(Select);
