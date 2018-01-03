
namespace IS4_Admin.SA_Authorization {
    export class UserRolesForm extends Serenity.PrefixedContext {
        static formKey = 'SA_Authorization.UserRoles';
    }

    export interface UserRolesForm {
        RoleId: Serenity.StringEditor;
    }

    [,
        ['RoleId', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UserRolesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}