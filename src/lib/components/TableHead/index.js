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
  enterDelay: 300,
  actions: false,
  actionsLabel: 'Ações',
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
  onOrderChange: PropTypes.func,
  data: PropTypes.array,
};
