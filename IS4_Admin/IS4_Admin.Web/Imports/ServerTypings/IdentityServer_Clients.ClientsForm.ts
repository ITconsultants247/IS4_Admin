
namespace IS4_Admin.IdentityServer_Clients {
    export class ClientsForm extends Serenity.PrefixedContext {
        static formKey = 'IdentityServer_Clients.Clients';
    }

    export interface ClientsForm {
        AbsoluteRefreshTokenLifetime: Serenity.IntegerEditor;
        AccessTokenLifetime: Serenity.IntegerEditor;
        AccessTokenType: Serenity.IntegerEditor;
        AllowAccessTokensViaBrowser: Serenity.BooleanEditor;
        AllowOfflineAccess: Serenity.BooleanEditor;
        AllowPlainTextPkce: Serenity.BooleanEditor;
        AllowRememberConsent: Serenity.BooleanEditor;
        AlwaysIncludeUserClaimsInIdToken: Serenity.BooleanEditor;
        AlwaysSendClientClaims: Serenity.BooleanEditor;
        AuthorizationCodeLifetime: Serenity.IntegerEditor;
        BackChannelLogoutSessionRequired: Serenity.BooleanEditor;
        BackChannelLogoutUri: Serenity.StringEditor;
        ClientClaimsPrefix: Serenity.StringEditor;
        ClientId: Serenity.StringEditor;
        ClientName: Serenity.StringEditor;
        ClientUri: Serenity.StringEditor;
        ConsentLifetime: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        EnableLocalLogin: Serenity.BooleanEditor;
        Enabled: Serenity.BooleanEditor;
        FrontChannelLogoutSessionRequired: Serenity.BooleanEditor;
        FrontChannelLogoutUri: Serenity.StringEditor;
        IdentityTokenLifetime: Serenity.IntegerEditor;
        IncludeJwtId: Serenity.BooleanEditor;
        LogoUri: Serenity.StringEditor;
        PairWiseSubjectSalt: Serenity.StringEditor;
        ProtocolType: Serenity.StringEditor;
        RefreshTokenExpiration: Serenity.IntegerEditor;
        RefreshTokenUsage: Serenity.IntegerEditor;
        RequireClientSecret: Serenity.BooleanEditor;
        RequireConsent: Serenity.BooleanEditor;
        RequirePkce: Serenity.BooleanEditor;
        SlidingRefreshTokenLifetime: Serenity.IntegerEditor;
        UpdateAccessTokenClaimsOnRefresh: Serenity.BooleanEditor;
    }

    [,
        ['AbsoluteRefreshTokenLifetime', () => Serenity.IntegerEditor],
        ['AccessTokenLifetime', () => Serenity.IntegerEditor],
        ['AccessTokenType', () => Serenity.IntegerEditor],
        ['AllowAccessTokensViaBrowser', () => Serenity.BooleanEditor],
        ['AllowOfflineAccess', () => Serenity.BooleanEditor],
        ['AllowPlainTextPkce', () => Serenity.BooleanEditor],
        ['AllowRememberConsent', () => Serenity.BooleanEditor],
        ['AlwaysIncludeUserClaimsInIdToken', () => Serenity.BooleanEditor],
        ['AlwaysSendClientClaims', () => Serenity.BooleanEditor],
        ['AuthorizationCodeLifetime', () => Serenity.IntegerEditor],
        ['BackChannelLogoutSessionRequired', () => Serenity.BooleanEditor],
        ['BackChannelLogoutUri', () => Serenity.StringEditor],
        ['ClientClaimsPrefix', () => Serenity.StringEditor],
        ['ClientId', () => Serenity.StringEditor],
        ['ClientName', () => Serenity.StringEditor],
        ['ClientUri', () => Serenity.StringEditor],
        ['ConsentLifetime', () => Serenity.IntegerEditor],
        ['Description', () => Serenity.StringEditor],
        ['EnableLocalLogin', () => Serenity.BooleanEditor],
        ['Enabled', () => Serenity.BooleanEditor],
        ['FrontChannelLogoutSessionRequired', () => Serenity.BooleanEditor],
        ['FrontChannelLogoutUri', () => Serenity.StringEditor],
        ['IdentityTokenLifetime', () => Serenity.IntegerEditor],
        ['IncludeJwtId', () => Serenity.BooleanEditor],
        ['LogoUri', () => Serenity.StringEditor],
        ['PairWiseSubjectSalt', () => Serenity.StringEditor],
        ['ProtocolType', () => Serenity.StringEditor],
        ['RefreshTokenExpiration', () => Serenity.IntegerEditor],
        ['RefreshTokenUsage', () => Serenity.IntegerEditor],
        ['RequireClientSecret', () => Serenity.BooleanEditor],
        ['RequireConsent', () => Serenity.BooleanEditor],
        ['RequirePkce', () => Serenity.BooleanEditor],
        ['SlidingRefreshTokenLifetime', () => Serenity.IntegerEditor],
        ['UpdateAccessTokenClaimsOnRefresh', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(ClientsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}