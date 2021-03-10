# walletconnect-registry

App Registry for WalletConnect Protocol

## How to submit

Clone this repository to your computer and install the project dependencies with NPM.

```sh
npm install
```

Then you will find a directory called `template` which you should duplicate with a different name (eg. `my-app`) before filling the details.
You will find the template has a reference to the logo location. For simplicity, you should copy the logo to the same directory as the JS file.

After you can run the following script to submit it to the registry.

```sh
## For Wallets
npm run submit -- wallet my-app

## For Dapps
npm run submit -- dapp my-app
```

If you received successful message after running the script, then you can make a pull request on Github with the update registry.

**NOTE:** Don't forget to delete the directory you duplicated to allow us to merge the submission quicker.

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

## License

MIT
