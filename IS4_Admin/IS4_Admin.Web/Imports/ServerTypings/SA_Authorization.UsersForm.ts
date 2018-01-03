
namespace IS4_Admin.SA_Authorization {
    export class UsersForm extends Serenity.PrefixedContext {
        static formKey = 'SA_Authorization.Users';
    }

    export interface UsersForm {
        AccessFailedCount: Serenity.IntegerEditor;
        ConcurrencyStamp: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmailConfirmed: Serenity.BooleanEditor;
        LockoutEnabled: Serenity.BooleanEditor;
        LockoutEnd: Serenity.StringEditor;
        NormalizedEmail: Serenity.StringEditor;
        NormalizedUserName: Serenity.StringEditor;
        PasswordHash: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        PhoneNumberConfirmed: Serenity.BooleanEditor;
        SecurityStamp: Serenity.StringEditor;
        TwoFactorEnabled: Serenity.BooleanEditor;
        UserName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        OrgName: Serenity.StringEditor;
    }

    [,
        ['AccessFailedCount', () => Serenity.IntegerEditor],
        ['ConcurrencyStamp', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['EmailConfirmed', () => Serenity.BooleanEditor],
        ['LockoutEnabled', () => Serenity.BooleanEditor],
        ['LockoutEnd', () => Serenity.StringEditor],
        ['NormalizedEmail', () => Serenity.StringEditor],
        ['NormalizedUserName', () => Serenity.StringEditor],
        ['PasswordHash', () => Serenity.StringEditor],
        ['PhoneNumber', () => Serenity.StringEditor],
        ['PhoneNumberConfirmed', () => Serenity.BooleanEditor],
        ['SecurityStamp', () => Serenity.StringEditor],
        ['TwoFactorEnabled', () => Serenity.BooleanEditor],
        ['UserName', () => Serenity.StringEditor],
        ['FirstName', () => Serenity.StringEditor],
        ['LastName', () => Serenity.StringEditor],
        ['OrgName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UsersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}