import { type ComputedRef } from 'vue';
import type { PermissionRequirement } from '@melt-js/libs-bag-core';
export declare const canAccess: (requirement: PermissionRequirement, userStore?: import("pinia").Store<"user", {
    token: string;
    username: string;
    user: Record<string, unknown> | null;
    roles: string[];
    permissions: string[];
    profileLoaded: boolean;
}, {
    isAuthenticated: (state: {
        token: string;
        username: string;
        user: Record<string, unknown> | null;
        roles: string[];
        permissions: string[];
        profileLoaded: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        token: string;
        username: string;
        user: Record<string, unknown> | null;
        roles: string[];
        permissions: string[];
        profileLoaded: boolean;
    }>) => boolean;
}, {
    login(payload: import("..").LoginPayload): Promise<void>;
    logout(): void;
    fetchProfile(): Promise<void>;
    hasRole(roles?: string[], mode?: import("@melt-js/libs-bag-core").AccessMode): boolean;
    hasPermission(perms?: string[], mode?: import("@melt-js/libs-bag-core").AccessMode): boolean;
}>) => boolean;
export declare const useAccess: (requirement: PermissionRequirement) => ComputedRef<boolean>;
