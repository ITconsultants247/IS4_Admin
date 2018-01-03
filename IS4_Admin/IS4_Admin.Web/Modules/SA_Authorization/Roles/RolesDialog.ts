
namespace IS4_Admin.SA_Authorization {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RolesDialog extends Serenity.EntityDialog<RolesRow, any> {
        protected getFormKey() { return RolesForm.formKey; }
        protected getIdProperty() { return RolesRow.idProperty; }
        protected getLocalTextPrefix() { return RolesRow.localTextPrefix; }
        protected getNameProperty() { return RolesRow.nameProperty; }
        protected getService() { return RolesService.baseUrl; }

        protected form = new RolesForm(this.idPrefix);

    }
}