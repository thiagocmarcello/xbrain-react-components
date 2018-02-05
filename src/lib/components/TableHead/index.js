import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TableCell from 'material-ui/Table/TableCell';
import { TableHead as TableHeadMui } from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import TableSortLabel from 'material-ui/Table/TableSortLabel';
import Tooltip from 'material-ui/Tooltip/Tooltip';

export default class TableHead extends PureComponent {
  handleChangeOrder = property => () => {
    const { onOrderChange } = this.props;
    if (onOrderChange) {
      onOrderChange(property);
    }
  };

  renderContent = (column) => {
    const {
      enterDelay, orderDirection, orderBy, titleToolTip, data,
    } = this.props;
    if (Array.isArray(data) && data.length && column.orderKey) {
      return (
        <Tooltip
          title={titleToolTip}
          placement={column.numeric ? 'bottom-end' : 'bottom-start'}
          enterDelay={enterDelay}
        >
          <TableSortLabel
            active={orderBy === column.orderKey}
            direction={orderDirection}
            onClick={this.handleChangeOrder(column.orderKey)}
          >
            {column.name}
          </TableSortLabel>
        </Tooltip>
      );
    }
    return column.name;
  };

  render() {
    const { columns, actions, actionsLabel } = this.props;
    if (Array.isArray(columns) && columns.length) {
      return (
        <TableHeadMui>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} padding={index % 2 === 0 ? 'dense' : 'none'} numeric={column.numeric}>
                {this.renderContent(column)}
              </TableCell>
            ))}
            {actions && <TableCell>{actionsLabel}</TableCell>}
          </TableRow>
        </TableHeadMui>
      );
    }
    return (
      <TableHeadMui>
        <TableRow />
      </TableHeadMui>
    );
  }
}

TableHead.defaultProps = {
  enterDelay: 300,
  actions: false,
  actionsLabel: 'Ação',
  titleToolTip: 'Ordenar',
  orderDirection: 'asc',
  orderBy: 'id',
};

TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  enterDelay: PropTypes.number,
  titleToolTip: PropTypes.string,
  actions: PropTypes.bool,
  actionsLabel: PropTypes.string,
  onOrderChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
