# walletconnect-registry

App Registry for WalletConnect Protocol

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
const hash = require("./hash");

const url = new URL(entry.homepage);

const id = hash(url.host);
```

## Logos

Logos can be queried from the `logos` directory using the app id
