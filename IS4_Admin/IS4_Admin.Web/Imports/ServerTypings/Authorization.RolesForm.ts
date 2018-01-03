
namespace IS4_Admin.Authorization {
    export class RolesForm extends Serenity.PrefixedContext {
        static formKey = 'Authorization.Roles';
    }

    export interface RolesForm {
        ConcurrencyStamp: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        NormalizedName: Serenity.StringEditor;
    }

    [,
        ['ConcurrencyStamp', () => Serenity.StringEditor],
        ['Name', () => Serenity.StringEditor],
        ['NormalizedName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RolesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}