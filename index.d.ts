declare module "@walletconnect/registry" {
  export interface AppPlatforms {
    browser?: string;
    ios?: string;
    android?: string;
    mac?: string;
    windows?: string;
    linux?: string;
  }

  export interface AppLinkingOptions {
    native?: string;
    universal?: string;
  }

  export interface AppLinking {
    mobile?: AppLinkingOptions;
    desktop?: AppLinkingOptions;
  }

  export interface AppMetadataColors {
    primary?: string;
    secondary?: string;
  }

  export interface AppMetadata {
    homepage?: string;
    shortName?: string;
    customLogo?: string;
    categories?: string[];
    colors?: AppMetadataColors;
  }

  export type AppType = "dapp" | "wallet" | "hybrid";

  export interface AppDescription {
    name: string;
    type: AppType;

    platforms: AppPlatforms;
    metadata?: AppMetadata;
  }

  export type AppHostType = "dns" | "ens" | "ipns";

  export interface AppHost {
    type: AppHostType;
    domain: string;
  }
  export interface AppProvider {
    id: string;
    host: AppHost;
    apps: AppDescription[];
  }

  export type AppRegistry = {
    [id: string]: App;
  };

  export default AppRegistry;
}
