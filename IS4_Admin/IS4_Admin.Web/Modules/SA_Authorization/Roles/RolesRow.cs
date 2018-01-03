
namespace IS4_Admin.SA_Authorization.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("IdentityServer"), TableName("[dbo].[AspNetRoles]")]
    [DisplayName("Roles"), InstanceName("Roles"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RolesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Size(450), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Concurrency Stamp")]
        public String ConcurrencyStamp
        {
            get { return Fields.ConcurrencyStamp[this]; }
            set { Fields.ConcurrencyStamp[this] = value; }
        }

        [DisplayName("Name"), Size(256)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Normalized Name"), Size(256)]
        public String NormalizedName
        {
            get { return Fields.NormalizedName[this]; }
            set { Fields.NormalizedName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RolesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField ConcurrencyStamp;
            public StringField Name;
            public StringField NormalizedName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "SA_Authorization.Roles";
            }
        }
    }
}
