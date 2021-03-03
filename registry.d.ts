declare module "@walletconnect/registry" {
  export interface AppEntry {
    name: string;
    logo: string;
    homepage: string;
    type: string;
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
  }

  export type AppRegistry = AppEntry[];

  export default AppRegistry;
}
