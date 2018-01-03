
namespace IS4_Admin.IdentityServer_Clients {
    export interface ClientsRow {
        Id?: number;
        AbsoluteRefreshTokenLifetime?: number;
        AccessTokenLifetime?: number;
        AccessTokenType?: number;
        AllowAccessTokensViaBrowser?: boolean;
        AllowOfflineAccess?: boolean;
        AllowPlainTextPkce?: boolean;
        AllowRememberConsent?: boolean;
        AlwaysIncludeUserClaimsInIdToken?: boolean;
        AlwaysSendClientClaims?: boolean;
        AuthorizationCodeLifetime?: number;
        BackChannelLogoutSessionRequired?: boolean;
        BackChannelLogoutUri?: string;
        ClientClaimsPrefix?: string;
        ClientId?: string;
        ClientName?: string;
        ClientUri?: string;
        ConsentLifetime?: number;
        Description?: string;
        EnableLocalLogin?: boolean;
        Enabled?: boolean;
        FrontChannelLogoutSessionRequired?: boolean;
        FrontChannelLogoutUri?: string;
        IdentityTokenLifetime?: number;
        IncludeJwtId?: boolean;
        LogoUri?: string;
        PairWiseSubjectSalt?: string;
        ProtocolType?: string;
        RefreshTokenExpiration?: number;
        RefreshTokenUsage?: number;
        RequireClientSecret?: boolean;
        RequireConsent?: boolean;
        RequirePkce?: boolean;
        SlidingRefreshTokenLifetime?: number;
        UpdateAccessTokenClaimsOnRefresh?: boolean;
    }

    export namespace ClientsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BackChannelLogoutUri';
        export const localTextPrefix = 'IdentityServer_Clients.Clients';

        export namespace Fields {
            export declare const Id;
            export declare const AbsoluteRefreshTokenLifetime;
            export declare const AccessTokenLifetime;
            export declare const AccessTokenType;
            export declare const AllowAccessTokensViaBrowser;
            export declare const AllowOfflineAccess;
            export declare const AllowPlainTextPkce;
            export declare const AllowRememberConsent;
            export declare const AlwaysIncludeUserClaimsInIdToken;
            export declare const AlwaysSendClientClaims;
            export declare const AuthorizationCodeLifetime;
            export declare const BackChannelLogoutSessionRequired;
            export declare const BackChannelLogoutUri;
            export declare const ClientClaimsPrefix;
            export declare const ClientId;
            export declare const ClientName;
            export declare const ClientUri;
            export declare const ConsentLifetime;
            export declare const Description;
            export declare const EnableLocalLogin;
            export declare const Enabled;
            export declare const FrontChannelLogoutSessionRequired;
            export declare const FrontChannelLogoutUri;
            export declare const IdentityTokenLifetime;
            export declare const IncludeJwtId;
            export declare const LogoUri;
            export declare const PairWiseSubjectSalt;
            export declare const ProtocolType;
            export declare const RefreshTokenExpiration;
            export declare const RefreshTokenUsage;
            export declare const RequireClientSecret;
            export declare const RequireConsent;
            export declare const RequirePkce;
            export declare const SlidingRefreshTokenLifetime;
            export declare const UpdateAccessTokenClaimsOnRefresh;
        }

        [
            'Id',
            'AbsoluteRefreshTokenLifetime',
            'AccessTokenLifetime',
            'AccessTokenType',
            'AllowAccessTokensViaBrowser',
            'AllowOfflineAccess',
            'AllowPlainTextPkce',
            'AllowRememberConsent',
            'AlwaysIncludeUserClaimsInIdToken',
            'AlwaysSendClientClaims',
            'AuthorizationCodeLifetime',
            'BackChannelLogoutSessionRequired',
            'BackChannelLogoutUri',
            'ClientClaimsPrefix',
            'ClientId',
            'ClientName',
            'ClientUri',
            'ConsentLifetime',
            'Description',
            'EnableLocalLogin',
            'Enabled',
            'FrontChannelLogoutSessionRequired',
            'FrontChannelLogoutUri',
            'IdentityTokenLifetime',
            'IncludeJwtId',
            'LogoUri',
            'PairWiseSubjectSalt',
            'ProtocolType',
            'RefreshTokenExpiration',
            'RefreshTokenUsage',
            'RequireClientSecret',
            'RequireConsent',
            'RequirePkce',
            'SlidingRefreshTokenLifetime',
            'UpdateAccessTokenClaimsOnRefresh'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}