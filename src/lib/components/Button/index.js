import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress, Button } from 'material-ui';
import { ICON } from './../../config/styles';

const styles = () => ({
  root: {
    display: 'inline-block',
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -Math.abs(ICON.size / 2),
    marginLeft: -Math.abs(ICON.size / 2),
  },
});

class XButton extends React.Component {
  renderLabel = () => {
    const { loading, loadingText, children } = this.props;
    return loading ? loadingText : children;
  };

  render() {
    const {
      classes, loading, loadingText, ...props
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button raised color="primary" disabled={loading} {...props}>
            {this.renderLabel()}
          </Button>
          {loading && <CircularProgress size={ICON.size} className={classes.buttonProgress} />}
        </div>
      </div>
    );
  }
}

XButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
};

XButton.defaultProps = {
  loading: false,
  loadingText: 'aguarde',
};

export default withStyles(styles)(XButton);
