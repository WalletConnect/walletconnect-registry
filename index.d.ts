declare module "@walletconnect/registry" {
  export interface AppEntry {
    id: string;
    name: string;
    description: string;
    homepage: string;
    chains: string[];
    versions: string[];
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

  export type AppRegistry = {
    [id: string]: AppEntry;
  };

  export default AppRegistry;
}
