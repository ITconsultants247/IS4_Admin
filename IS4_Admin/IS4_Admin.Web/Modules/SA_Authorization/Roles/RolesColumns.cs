
namespace IS4_Admin.SA_Authorization.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SA_Authorization.Roles")]
    [BasedOnRow(typeof(Entities.RolesRow))]
    public class RolesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String ConcurrencyStamp { get; set; }
        public String Name { get; set; }
        public String NormalizedName { get; set; }
    }
}