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

* [XButton](#xbutton) - [MU](https://material-ui-next.com/demos/buttons/)
* [XExternalRedirect](#xexternalredirect) - Redirects to an external URL

> All `[MU]` components have the
> [material-ui](https://github.com/mui-org/material-ui.git) props. However, we
> added new properties that will be listed as a custom property.

---

### XButton

Just a button.

#### Custom properties

`loading={true|false}` (optional) - displays a loading or not, default is
`false`.

```jsx
<XButton loading type="submit">
  Send
</XButton>;
```

---

### XExternalRedirect

Redirects to an external URL.

#### Properties

`uri={string}` (required) - URL you want to redirect

```jsx
<XExternalRedirect uri="https://google.com" />;
```
