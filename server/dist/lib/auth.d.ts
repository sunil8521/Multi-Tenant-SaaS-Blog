export declare const auth: import("better-auth").Auth<{
    hooks: {
        before: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
    };
    user: {
        modelName: string;
        fields: {
            name: string;
        };
        additionalFields: {
            jobTitle: {
                type: "string";
                input: true;
                required: false;
            };
        };
    };
    emailAndPassword: {
        enabled: true;
    };
    trustedOrigins: string[];
    advanced: {
        crossSubDomainCookies: {
            enabled: true;
            domain: string;
        };
    };
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth/adapters/prisma").DBAdapter<import("better-auth").BetterAuthOptions>;
}>;
//# sourceMappingURL=auth.d.ts.map