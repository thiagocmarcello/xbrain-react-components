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

All components have the
[material-ui](https://github.com/mui-org/material-ui.git) settings. However, we
added new properties that will be listed in each component below.

* [XButton](https://material-ui-next.com/demos/buttons/)

Custom properties:

`loading={true|false}` - displays a loading or not, default is `false`.

```jsx
<XButton loading type="submit">
  Enviar
</XButton>;
```

---

## Usage

Rather than import your component class from `material-ui`, import it from
`xbrain-react-components`.

```jsx
import { XButton } from 'xbrain-react-components';

class MyForm extends Component {
  render() {
    return (
      <XButton loading type="submit">
        Send
      </XButton>
    );
  }
}

export default MyForm;
```
