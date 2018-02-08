# X-Brain React Components

[![Build Status](https://travis-ci.org/xbrain-dev/xbrain-react-components.svg?branch=master)](https://travis-ci.org/xbrain-dev/xbrain-react-components)
[![gzip size](http://img.badgesize.io/https://unpkg.com/xbrain-react-components/dist/xbrain-react-components.min.js?compression=gzip)](https://unpkg.com/xbrain-react-components/dist/xbrain-react-components.min.js)
[![dependencies Status](https://david-dm.org/xbrain-dev/xbrain-react-components/status.svg)](https://david-dm.org/xbrain-dev/xbrain-react-components)
[![devDependencies Status](https://david-dm.org/xbrain-dev/xbrain-react-components/dev-status.svg)](https://david-dm.org/xbrain-dev/xbrain-react-components?type=dev)
[![peerDependencies Status](https://david-dm.org/xbrain-dev/xbrain-react-components/peer-status.svg)](https://david-dm.org/xbrain-dev/xbrain-react-components?type=peer)
[![npm](https://img.shields.io/npm/v/xbrain-react-components.svg)](https://www.npmjs.com/package/xbrain-react-components)
[![license](https://img.shields.io/github/license/xbrain-dev/xbrain-react-components.svg)](https://github.com/xbrain-dev/xbrain-react-components)

[`xbrain-react-components`](https://github.com/xbrain-dev/xbrain-react-components)
is a set of custom components that use material-ui v1 as a basis.

## Installation

Using [yarn](https://yarnpkg.com/):

```bash
  yarn add xbrain-react-components
```

Using [npm](https://www.npmjs.org/):

```bash
  npm install --save xbrain-react-components
```

---

## Available Components

* [XButton](#xbutton) - [mui](https://material-ui-next.com/demos/buttons/)
* [XExternalRedirect](#xexternalredirect) - Redirects to an external URL
* [XTableHead](#xtablehead) - [mui](https://material-ui-next.com/demos/tables/)
* [XTabs](#xtabs) - [mui](https://material-ui-next.com/api/tabs/)

> All `[mui]` components have the
> [material-ui](https://github.com/mui-org/material-ui.git) props. However, we
> added new properties that will be listed as a custom property.

---

### XButton

Just a button.

#### Custom properties

`loading={true|false}` (optional) - displays a loading or not, default is
`false`.

`gutter={all|top|right|bottom|left}` (optional) - adds extra space in chosen direction.

```jsx
<XButton gutter="right" loading type="submit">
  Cancel
</XButton>

<XButton gutter="left" loading type="submit">
  Send
</XButton>
```

---

### XExternalRedirect

Redirects to an external URL.

#### Properties

`uri={string}` (required) - URL you want to redirect

```jsx
<XExternalRedirect uri="https://google.com" />
```

### XTableHead

Head for data table.

#### Properties

`enterDelay=300` (optional) - Delay for tooltip.

`titleToolTip={string}` (optional) - Name in tooltip.

`actions={false|true}` (optional) - Add last column in table for actions.

`actionsLabel={string}` (optional) - Name of the label for actions.

`orderDirection={'asc'|'desc'}` (optional) - The sort order of the column.

`orderBy={string}` (optional) - The current sort columns.

`data={array}` (required) - Data list.

`data.orderKey:{string}` - (optional) - The name of the columns to be sorted. If it is not present, the column will not be sorted.

`data.name:{string}` - (optional) - Column name.

`data.numeric:{true|false}` - (optional) - If `true`, content will align to the right.

`data.padding:{default'|'checkbox'|'dense'|'none'}` - (optional) - If present replace padding cell padding

#### Exemple

```jsx
const columns = [{ name: 'id', orderKey: 'id', numeric: true }, { name: 'name', orderKey: 'name' }];

const order = {
  orderBy: 'id',
  orderDirection: 'asc',
};

const data = [
  {
    id: 1,
    name: 'Name 1',
  },
  {
    id: 2,
    name: 'Name 2',
  },
];

handleOrderChange = newOrderBy => {
  console.log('column click:', newOrderBy);
};

<XTableHead
  columns={columns}
  orderBy={order.orderBy}
  orderDirection={order.orderDirection}
  onOrderChange={handleOrderChange}
  data={data}
  actions
/>;
```

### XTabs

Tabs component.

#### Properties

`tabs={array}` (required) - Array of tabs .

`tabs.label:{string}` - (optional) - The name tab.

`tabs.disabled={bool}` (optional) - Disabled tab.

`tabs.component={false|true}` (required) - Component that will be rendered.

#### Exemple

```jsx
const tabs = [
  {
    label: 'information',
    disabled: false,
    component: <InformationScreen {...this.props} />,
  },
  {
    label: 'Details',
    disabled: false,
    component: <DetailsScreen {...this.props} />,
  },
];

<XTabs tabs={tabs} />;
```
