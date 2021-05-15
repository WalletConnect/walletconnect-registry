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
    colors?: AppMetadataColors;
  }

  export type AppType = "non-signer" | "signer" | "hybrid";

  export interface AppDescription {
    name: string;
    type: AppType;
    homepage: string;
    categories: string[];
    platforms: AppPlatforms;
    metadata?: AppMetadata;
  }
  export interface AppProvider {
    id: string;
    host: string;
    apps: AppDescription[];
  }

  export type AppRegistry = {
    [id: string]: App;
  };

  export default AppRegistry;
}
