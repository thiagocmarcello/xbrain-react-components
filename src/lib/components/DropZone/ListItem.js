import { TableCell, TableRow } from 'material-ui/Table';
import Delete from 'material-ui-icons/Delete';
import filesize from 'filesize';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
  handleDelete = () => {
    const { onDelete, file } = this.props;
    onDelete(file);
  };

  render() {
    const { file } = this.props;
    return (
      <TableRow>
        <TableCell padding="none">{file.name}</TableCell>
        <TableCell numeric padding="none">
          {filesize(file.size)}
        </TableCell>
        <TableCell numeric padding="none">
          <IconButton onClick={this.handleDelete} aria-label="Delete">
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

ListItem.defaultProps = {
  onDelete: null,
  file: null,
};

ListItem.propTypes = {
  onDelete: PropTypes.func,
  file: PropTypes.object,
};

export default ListItem;
