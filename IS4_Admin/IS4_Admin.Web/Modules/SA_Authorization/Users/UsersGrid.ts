
namespace IS4_Admin.SA_Authorization {

    @Serenity.Decorators.registerClass()
    export class UsersGrid extends Serenity.EntityGrid<UsersRow, any> {
        protected getColumnsKey() { return 'SA_Authorization.Users'; }
        protected getDialogType() { return UsersDialog; }
        protected getIdProperty() { return UsersRow.idProperty; }
        protected getLocalTextPrefix() { return UsersRow.localTextPrefix; }
        protected getService() { return UsersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}