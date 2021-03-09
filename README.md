# walletconnect-registry

App Registry for WalletConnect Protocol

## How to submit

Clone this repository to your computer and make sure you have Node.Js installed.

You will find a file called `template.js` which you should duplicate with a different name (eg. my-template.js) before filling the details. Then you can run the following script to submit it.

```sh
node scripts/submit.js my-template.js
```

If you received successful message after running the script you can make a pull request on Github

## Schema

```typescript
export interface AppEntry {
  id: string;
  name: string;
  homepage: string;
  chains: string[];
  app: {
    browser: string;
    ios: string;
    android: string;
    mac: string;
    windows: string;
    linux: string;
  };
  mobile: {
    native: string;
    universal: string;
  };
  desktop: {
    native: string;
    universal: string;
  };
  metadata: {
    shortName: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
}
```

## Id

Id is derived from the recursive hash of the list of names of the homepage url host

```js
const hash = require("./scripts/hash");

const url = new URL(entry.homepage);

const id = hash(url.host);
```

## Logos

Logos can be queried from the `logos` directory using the app id
