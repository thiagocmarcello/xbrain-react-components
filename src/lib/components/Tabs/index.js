import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import { Tab } from 'material-ui/Tabs';
import { Tabs } from 'material-ui';

import TabContainer from './TabContainer';

class XTabs extends PureComponent {
  state = {
    tabActive: 0,
  };

  handleChange = (event, tabActive) => {
    this.setState({ tabActive });
  };

  render() {
    const { tabs, tabProps, ...rest } = this.props;
    const { tabActive } = this.state;
    const currentTab = tabs[tabActive];

    return (
      <Fragment>
        <Tabs value={tabActive} onChange={this.handleChange} {...rest}>
          {tabs.map((tab, index) => {
            const key = `tabkey-${index}`;
            return <Tab key={key} label={tab.label} disabled={tab.disabled} {...tabProps} />;
          })}
        </Tabs>
        {
          <TabContainer disableGutters={currentTab.disableGutters}>
            {currentTab.component}
          </TabContainer>
        }
      </Fragment>
    );
  }
}

XTabs.defaultProps = {
  tabProps: null,
};

XTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabProps: PropTypes.object,
};

export default XTabs;
