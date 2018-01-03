
namespace IS4_Admin.SA_Authorization {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserRolesDialog extends Serenity.EntityDialog<UserRolesRow, any> {
        protected getFormKey() { return UserRolesForm.formKey; }
        protected getIdProperty() { return UserRolesRow.idProperty; }
        protected getLocalTextPrefix() { return UserRolesRow.localTextPrefix; }
        protected getNameProperty() { return UserRolesRow.nameProperty; }
        protected getService() { return UserRolesService.baseUrl; }

        protected form = new UserRolesForm(this.idPrefix);

    }
}