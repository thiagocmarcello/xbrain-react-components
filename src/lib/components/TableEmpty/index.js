import { CircularProgress } from 'material-ui/Progress';
import { TableCell, TableRow } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import XTypography from '../Typography';

import noResultImage from '../../assets/no-result.svg';

const styles = theme => ({
  noReults: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  tableCell: {
    textAlign: 'center',
  },
});

class TableEmpty extends PureComponent {
  renderFilterInfo = () => {
    const { enterFilterText } = this.props;

    return (
      <XTypography variant="body1" align="center">
        {enterFilterText}
      </XTypography>
    );
  };

  renderNoResults = () => {
    const { classes, noResultsText } = this.props;
    return (
      <div className={classes.noReults}>
        <img src={noResultImage} alt="" height="160" />
        <XTypography variant="body1" align="center" gutterTop="2x">
          {noResultsText}
        </XTypography>
      </div>
    );
  };

  renderLoading = () => <CircularProgress size={24} />;

  renderContent = () => {
    const { data, loading } = this.props;

    if (loading) {
      return this.renderLoading();
    }

    if (data) {
      return this.renderNoResults();
    }

    return this.renderFilterInfo();
  };

  render() {
    const { classes } = this.props;

    return (
      <TableRow>
        <TableCell colSpan={100} className={classes.tableCell}>
          {this.renderContent()}
        </TableCell>
      </TableRow>
    );
  }
}

TableEmpty.defaultProps = {
  data: null,
  enterFilterText: 'Informe os filtros.',
  loading: false,
  noResultsText: 'Nenhum resultado foi encontrado.',
};

TableEmpty.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.node,
  enterFilterText: PropTypes.string,
  loading: PropTypes.bool,
  noResultsText: PropTypes.string,
};

export default withStyles(styles)(TableEmpty);
