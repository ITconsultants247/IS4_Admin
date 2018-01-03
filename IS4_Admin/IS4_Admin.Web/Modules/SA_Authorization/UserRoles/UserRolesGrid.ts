
namespace IS4_Admin.SA_Authorization {

    @Serenity.Decorators.registerClass()
    export class UserRolesGrid extends Serenity.EntityGrid<UserRolesRow, any> {
        protected getColumnsKey() { return 'SA_Authorization.UserRoles'; }
        protected getDialogType() { return UserRolesDialog; }
        protected getIdProperty() { return UserRolesRow.idProperty; }
        protected getLocalTextPrefix() { return UserRolesRow.localTextPrefix; }
        protected getService() { return UserRolesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}