
namespace IS4_Admin.SA_Authorization.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SA_Authorization.Roles")]
    [BasedOnRow(typeof(Entities.RolesRow))]
    public class RolesForm
    {
        public String ConcurrencyStamp { get; set; }
        public String Name { get; set; }
        public String NormalizedName { get; set; }
    }
}