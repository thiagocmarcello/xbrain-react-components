import { MenuItem } from 'material-ui/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const customStyles = {
  fontSize: 14,
};

const Option = ({
  onSelect, option, focusedOption, labelKey, ...props
}) => {
  const handleClick = event => onSelect(option, event);
  const { style, key } = props;
  const { height, ...styles } = style;
  const { disabled } = option;
  const label = option[labelKey];
  const newLabel = label && typeof label === 'string' ? label.toUpperCase() : label;

  return (
    <MenuItem
      disabled={disabled}
      key={key}
      onClick={handleClick}
      style={{ ...styles, ...customStyles }}
      selected={option === focusedOption}
      ContainerComponent="div"
    >
      {newLabel}
    </MenuItem>
  );
};

Option.defaultProps = {
  disabled: false,
};

Option.propTypes = {
  disabled: PropTypes.bool,
  focusedOption: PropTypes.object.isRequired,
  key: PropTypes.node.isRequired,
  labelKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default Option;
