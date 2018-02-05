import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';
import { Typography } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';

export default class TableEmpty extends PureComponent {
  render() {
    const { data, loading } = this.props;

    return (
      <TableRow>
        <TableCell colSpan={100} style={{ textAlign: 'center' }}>
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <Typography variant="body1" align="center">
              {data === null ? 'Informe os filtros.' : 'Nenhum resultado encontrado.'}
            </Typography>
          )}
        </TableCell>
      </TableRow>
    );
  }
}

TableEmpty.defaultProps = {
  data: null,
  loading: false,
};

TableEmpty.propTypes = {
  data: PropTypes.node,
  loading: PropTypes.bool,
};
