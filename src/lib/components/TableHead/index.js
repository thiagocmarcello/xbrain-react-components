import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TableCell, TableHead as TableHeadMui, TableRow, TableSortLabel } from 'material-ui/Table';
import { Tooltip } from 'material-ui';

export default class TableHead extends PureComponent {
  handleChangeOrder = property => () => {
    const { onOrderChange } = this.props;
    if (onOrderChange) {
      onOrderChange(property);
    }
  };

  isColumnVisible = row => row.visible !== false;

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
            {columns.filter(this.isColumnVisible).map((column, index) => (
              <TableCell
                key={index}
                padding={column.padding || index % 2 === 0 ? 'none' : 'dense'}
                numeric={column.numeric}
              >
                {this.renderContent(column)}
              </TableCell>
            ))}
            {actions && (
              <TableCell padding="none" numeric>
                {actionsLabel}
              </TableCell>
            )}
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
  actions: false,
  actionsLabel: 'Ações',
  data: null,
  enterDelay: 300,
  onOrderChange: null,
  orderBy: 'id',
  orderDirection: 'asc',
  titleToolTip: 'Ordenar',
};

TableHead.propTypes = {
  actions: PropTypes.bool,
  actionsLabel: PropTypes.string,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  enterDelay: PropTypes.number,
  onOrderChange: PropTypes.func,
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  titleToolTip: PropTypes.string,
};
