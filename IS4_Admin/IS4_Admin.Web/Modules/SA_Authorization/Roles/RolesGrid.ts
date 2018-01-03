
namespace IS4_Admin.SA_Authorization {

    @Serenity.Decorators.registerClass()
    export class RolesGrid extends Serenity.EntityGrid<RolesRow, any> {
        protected getColumnsKey() { return 'SA_Authorization.Roles'; }
        protected getDialogType() { return RolesDialog; }
        protected getIdProperty() { return RolesRow.idProperty; }
        protected getLocalTextPrefix() { return RolesRow.localTextPrefix; }
        protected getService() { return RolesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}