import type { RouteLocationNormalizedLoaded } from 'vue-router';
export interface TabItem {
    fullPath: string;
    path: string;
    name?: string;
    cacheKey?: string;
    title?: string;
    noCache?: boolean;
}
export declare const useTabBarStore: import("pinia").StoreDefinition<"tabbar", {
    tabs: TabItem[];
    enableTabCache: boolean;
    enableTabPersist: boolean;
    refreshingViews: string[];
}, {
    cachedViews: (state: {
        tabs: {
            fullPath: string;
            path: string;
            name?: string | undefined;
            cacheKey?: string | undefined;
            title?: string | undefined;
            noCache?: boolean | undefined;
        }[];
        enableTabCache: boolean;
        enableTabPersist: boolean;
        refreshingViews: string[];
    } & import("pinia").PiniaCustomStateProperties<{
        tabs: TabItem[];
        enableTabCache: boolean;
        enableTabPersist: boolean;
        refreshingViews: string[];
    }>) => string[];
}, {
    syncRefreshingViews(): void;
    addTab(route: RouteLocationNormalizedLoaded): void;
    removeTabsByPaths(paths: string[]): void;
    removeTab(fullPath: string): void;
    clearTabs(): void;
    closeOtherTabs(fullPath: string): void;
    closeLeftTabs(fullPath: string): void;
    closeRightTabs(fullPath: string): void;
    evictCache(fullPath: string): Promise<void>;
    restoreCache(fullPath: string): void;
}>;
