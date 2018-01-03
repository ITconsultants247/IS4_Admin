
namespace IS4_Admin.SA_Authorization.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SA_Authorization.UserRoles")]
    [BasedOnRow(typeof(Entities.UserRolesRow))]
    public class UserRolesForm
    {
        public String RoleId { get; set; }
    }
}