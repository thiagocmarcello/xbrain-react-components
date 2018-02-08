import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';

import TabContainer from './TabContainer';

class XTabs extends PureComponent {
  state = {
    tabActive: 0,
  };

  handleTabChange = (event, tabActive) => {
    this.setState({ tabActive });
  };

  render() {
    const { tabs } = this.props;
    const { tabActive } = this.state;
    return (
      <Fragment>
        <Tabs value={tabActive} onChange={this.handleTabChange} {...this.props}>
          {tabs.map(tab => <Tab label={tab.label} disabled={tab.disabled} />)}
        </Tabs>
        {<TabContainer>{tabs[tabActive].component}</TabContainer>}
      </Fragment>
    );
  }
}

XTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default XTabs;
