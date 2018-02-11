import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const progressHeight = 2;

const XLogoProgressHOC = ({ image }) => {
  const styles = (theme) => {
    const gutter = theme.spacing.unit * 2;

    return {
      root: {
        height: image.height + progressHeight + gutter,
      },
      rootLinearProgres: {
        height: progressHeight,
        marginTop: gutter,
      },
    };
  };

  class LogoProgress extends PureComponent {
    state = {
      loadingLogo: false,
      loadingProgress: false,
    };

    componentDidMount() {
      this.startAnimation();
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    timer = null;

    startAnimation = () => {
      const { transitions: { duration } } = this.props.theme;

      this.timer = setTimeout(() => {
        this.setState({
          loadingLogo: true,
        });
      }, duration.enteringScreen * 2);
    };

    handleEndAnimation = () => {
      this.setState({ loadingProgress: true });
    };

    render() {
      const { classes, theme: { transitions } } = this.props;
      const { loadingLogo, loadingProgress } = this.state;
      const { shortest } = transitions.duration;
      const { standard } = transitions.duration;

      return (
        <div className={classes.root}>
          <Fade
            appear
            in={loadingLogo}
            timeout={standard * 2.5}
            unmountOnExit
            onEntered={this.handleEndAnimation}
          >
            <div>
              <img alt={image.alt} src={image.src} height={image.height} />
              <Fade appear in={loadingProgress} timeout={shortest} unmountOnExit>
                <LinearProgress classes={{ root: classes.rootLinearProgres }} color="primary" />
              </Fade>
            </div>
          </Fade>
        </div>
      );
    }
  }

  LogoProgress.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  const LogoProgressContainer = withStyles(styles, { withTheme: true })(LogoProgress);

  return <LogoProgressContainer />;
};

LogoProgressHOC.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.node.isRequired,
  }).isRequired,
};

export default XLogoProgressHOC;
