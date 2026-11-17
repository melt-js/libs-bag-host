export interface HostNavigationConfig {
    homePath: string;
    loginPath: string;
    profilePath: string;
    forbiddenPath: string;
    notFoundPath: string;
    redirectName: string;
}
export declare const defaultHostNavigation: HostNavigationConfig;
export declare const setupHostNavigation: (config?: Partial<HostNavigationConfig>) => HostNavigationConfig;
export declare const getHostNavigationConfig: () => HostNavigationConfig;
