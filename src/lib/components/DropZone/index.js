import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import CloudUpload from 'material-ui-icons/CloudUpload';
import Dropzone from 'react-dropzone';
import filesize from 'filesize';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import ListItem from './ListItem';
import XTypography from '../Typography';

const styles = theme => ({
  cloudUpload: {
    color: theme.palette.primary.main,
    height: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit,
    width: theme.spacing.unit * 5,
  },
  dropzone: {
    marginTop: theme.spacing.unit * 3,
  },
  dropZoneTableFiles: {
    overflowX: 'auto',
  },
  tableFiles: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class XDropZone extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      files: [],
    };

    const { theme } = props;
    const { primary, grey, error } = theme.palette;

    this.dropZoneActiveStyle = {
      backgroundColor: primary.all[50],
      border: `2px dashed ${primary.main}`,
    };

    this.dropZoneErrorStyle = {
      borderColor: error.main,
    };

    this.dropZoneStyle = {
      alignItems: 'center',
      border: `2px dashed ${grey[100]}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: theme.spacing.unit * 10,
      padding: theme.spacing.unit * 2,
    };
  }

  componentWillMount() {
    this.initialize();
  }

  getCleanLabel = () => {
    const { multiple, labelPlural, labelSingular } = this.props;
    return multiple ? labelPlural : labelSingular;
  };

  getDirtyLabel = () => {
    const { multiple, dirtyLabelPlural, dirtyLabelSingular } = this.props;
    return multiple ? dirtyLabelPlural : dirtyLabelSingular;
  };

  initialize = () => this.setState({ text: this.getCleanLabel() });

  handleDragEnter = () => {
    this.setState({
      text: this.getDirtyLabel(),
    });

    const { onDragEnter } = this.props;

    if (onDragEnter) {
      onDragEnter();
    }
  };

  handleDragLeave = () => {
    this.setState({
      text: this.getCleanLabel(),
    });

    const { onDragLeave } = this.props;

    if (onDragLeave) {
      onDragLeave();
    }
  };

  handleDrop = (acceptedFiles, rejectedFiles) => {
    const {
      multiple, allowDuplicate, onDrop, onChange,
    } = this.props;

    this.setState(
      (prevState) => {
        let allFiles = [...prevState.files, ...acceptedFiles];
        allFiles = allowDuplicate ? allFiles : this.removeDuplicateFiles(allFiles);

        return {
          files: multiple ? allFiles : acceptedFiles,
          text: this.getCleanLabel(),
        };
      },
      () => {
        const { files } = this.state;

        if (onChange) {
          onChange(files);
        }

        if (onDrop) {
          onDrop(acceptedFiles, rejectedFiles);
        }
      },
    );
  };

  removeDuplicateFiles = files =>
    files.filter((file, index) => files.map(mapFile => mapFile.name).indexOf(file.name) === index);

  handleDelete = file =>
    this.setState(
      prevState => ({
        files: prevState.files.filter(item => item !== file),
      }),
      () => {
        const { onChange } = this.props;
        const { files } = this.state;

        if (onChange) {
          onChange(files.length ? files : '');
        }
      },
    );

  renderListFiles = (files) => {
    const { classes } = this.props;
    return (
      files.length > 0 && (
        <div className={classes.dropZoneTableFiles}>
          <Table className={classes.tableFiles}>
            <TableHead>
              <TableRow>
                <TableCell padding="none">Nome</TableCell>
                <TableCell numeric padding="none" style={{ width: 128 }}>
                  Tamanho
                </TableCell>
                <TableCell numeric padding="none" style={{ width: 80 }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => this.renderListFilesItem(file, index))}
            </TableBody>
          </Table>
        </div>
      )
    );
  };

  renderListFilesItem = (file, index) => (
    <ListItem key={`dropZone-file-${index}`} file={file} onDelete={this.handleDelete} />
  );

  renderAllowedFiles = () => {
    const { accept } = this.props;
    return (
      accept && (
        <XTypography color="primary" variant="caption" component="p">
          {accept}
        </XTypography>
      )
    );
  };

  renderMaxFileSize = () => {
    const { maxSize } = this.props;
    return (
      maxSize && (
        <XTypography variant="caption">Arquivos de no máximo {filesize(maxSize)}.</XTypography>
      )
    );
  };

  renderLabel = () => {
    const { name, label, required } = this.props;
    return (
      <InputLabel error={false} shrink htmlFor={name} focused={false}>
        {label}
        {required && ' *'}
      </InputLabel>
    );
  };

  render() {
    const { text, files } = this.state;
    const {
      accept,
      allowDuplicate,
      classes,
      className,
      dirtyLabelPlural,
      dirtyLabelSingular,
      error,
      iconStyle,
      labelPlural,
      labelSingular,
      style,
      theme,
      ...rest
    } = this.props;

    const errorStyle = error ? this.dropZoneErrorStyle : {};

    return (
      <FormControl fullWidth>
        {this.renderLabel()}
        <Dropzone
          {...rest}
          accept={accept}
          style={{
            ...this.dropZoneStyle,
            ...style,
            ...errorStyle,
          }}
          activeStyle={this.dropZoneActiveStyle}
          onDrop={this.handleDrop}
          onChange={this.handleChange}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          className={classNames(classes.dropzone, className)}
        >
          <XTypography variant="body1" align="center">
            {text}
          </XTypography>
          {this.renderMaxFileSize()}
          {this.renderAllowedFiles()}
          <CloudUpload
            className={classes.cloudUpload}
            style={{
              ...iconStyle,
            }}
          />
        </Dropzone>
        {this.renderListFiles(files)}
      </FormControl>
    );
  }
}

XDropZone.defaultProps = {
  accept: null,
  allowDuplicate: false,
  className: '',
  dirtyLabelPlural: 'Solte os arquivos para anexar',
  dirtyLabelSingular: 'Solte o arquivo para anexar',
  error: false,
  iconStyle: null,
  labelPlural: 'Arraste e solte ou clique para selecionar os arquivos',
  labelSingular: 'Arraste e solte ou clique para selecionar o arquivo',
  maxSize: null,
  multiple: false,
  onChange: null,
  onDragEnter: null,
  onDragLeave: null,
  onDrop: null,
  required: false,
  style: null,
};

XDropZone.propTypes = {
  accept: PropTypes.string,
  allowDuplicate: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  dirtyLabelPlural: PropTypes.string,
  dirtyLabelSingular: PropTypes.string,
  error: PropTypes.bool,
  iconStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  labelPlural: PropTypes.string,
  labelSingular: PropTypes.string,
  maxSize: PropTypes.number,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,
  required: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true, name: 'XDropZone' })(XDropZone);
