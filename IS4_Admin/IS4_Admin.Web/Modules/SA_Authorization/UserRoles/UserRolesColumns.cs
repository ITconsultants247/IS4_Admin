
namespace IS4_Admin.SA_Authorization.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SA_Authorization.UserRoles")]
    [BasedOnRow(typeof(Entities.UserRolesRow))]
    public class UserRolesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String UserConcurrencyStamp { get; set; }
        public String RoleConcurrencyStamp { get; set; }
    }
}