import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';

import TabContainer from './TabContainer';

const styles = theme => ({
  borderBottom: {
    position: 'relative',
    '&:after': {
      backgroundColor: theme.palette.divider,
      bottom: 0,
      content: '""',
      height: 1,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
  },
  fixed: {
    backgroundColor: theme.palette.common.white,
    position: 'fixed',
    width: '100%',
    zIndex: 2,
  },
  toolbar: {
    height: 48,
  },
});

class XTabs extends PureComponent {
  state = {
    tabActive: 0,
  };

  componentWillMount() {
    this.handleDefaultTab(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.handleDefaultTab(nextProps);
  }

  handleDefaultTab = ({ defaultTab }) => {
    const { onChange } = this.props;
    if (defaultTab) {
      if (this.state.tabActive !== defaultTab) {
        this.setState({ tabActive: defaultTab }, () => {
          if (onChange) {
            onChange(null, defaultTab);
          }
        });
      }
    }
  };

  handleChange = (event, tabActive) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event, tabActive);
    }

    this.setState({ tabActive });
  };

  render() {
    const {
      tabs,
      tabProps,
      classes,
      borderBottom,
      defaultTab,
      onChange,
      fixed,
      ...rest
    } = this.props;

    const { tabActive } = this.state;
    const currentTab = tabs[tabActive];
    const borderBottomStyle = borderBottom ? classes.borderBottom : '';

    return (
      <Fragment>
        <div className={fixed ? classes.fixed : ''}>
          <div className={borderBottomStyle}>
            <Tabs value={tabActive} onChange={this.handleChange} {...rest}>
              {tabs.map((tab, index) => {
                if (!tab) return null;
                const key = `tabkey-${index}`;
                const label = tab.label ? { label: tab.label } : null;
                return <Tab key={key} {...label} disabled={tab.disabled} {...tab.tabProps} />;
              })}
            </Tabs>
          </div>
        </div>
        {currentTab && (
          <Fragment>
            {fixed && <div className={classes.toolbar} />}
            <TabContainer disableGutters={currentTab.disableGutters}>
              {currentTab.component}
            </TabContainer>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

XTabs.defaultProps = {
  borderBottom: false,
  defaultTab: 0,
  fixed: false,
  onChange: null,
  tabProps: null,
};

XTabs.propTypes = {
  borderBottom: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  defaultTab: PropTypes.number,
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  tabProps: PropTypes.object,
  tabs: PropTypes.array.isRequired,
};

export default withStyles(styles, { name: 'XTabs' })(XTabs);
