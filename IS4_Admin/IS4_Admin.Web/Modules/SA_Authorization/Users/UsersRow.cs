
namespace IS4_Admin.SA_Authorization.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("IdentityServer"), TableName("[dbo].[AspNetUsers]")]
    [DisplayName("Users"), InstanceName("Users"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UsersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Size(450), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Access Failed Count"), NotNull]
        public Int32? AccessFailedCount
        {
            get { return Fields.AccessFailedCount[this]; }
            set { Fields.AccessFailedCount[this] = value; }
        }

        [DisplayName("Concurrency Stamp")]
        public String ConcurrencyStamp
        {
            get { return Fields.ConcurrencyStamp[this]; }
            set { Fields.ConcurrencyStamp[this] = value; }
        }

        [DisplayName("Email"), Size(256)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Email Confirmed"), NotNull]
        public Boolean? EmailConfirmed
        {
            get { return Fields.EmailConfirmed[this]; }
            set { Fields.EmailConfirmed[this] = value; }
        }

        [DisplayName("Lockout Enabled"), NotNull]
        public Boolean? LockoutEnabled
        {
            get { return Fields.LockoutEnabled[this]; }
            set { Fields.LockoutEnabled[this] = value; }
        }

        [DisplayName("Lockout End")]
        public DateTimeOffset? LockoutEnd
        {
            get { return Fields.LockoutEnd[this]; }
            set { Fields.LockoutEnd[this] = value; }
        }

        [DisplayName("Normalized Email"), Size(256)]
        public String NormalizedEmail
        {
            get { return Fields.NormalizedEmail[this]; }
            set { Fields.NormalizedEmail[this] = value; }
        }

        [DisplayName("Normalized User Name"), Size(256)]
        public String NormalizedUserName
        {
            get { return Fields.NormalizedUserName[this]; }
            set { Fields.NormalizedUserName[this] = value; }
        }

        [DisplayName("Password Hash")]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Phone Number")]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Phone Number Confirmed"), NotNull]
        public Boolean? PhoneNumberConfirmed
        {
            get { return Fields.PhoneNumberConfirmed[this]; }
            set { Fields.PhoneNumberConfirmed[this] = value; }
        }

        [DisplayName("Security Stamp")]
        public String SecurityStamp
        {
            get { return Fields.SecurityStamp[this]; }
            set { Fields.SecurityStamp[this] = value; }
        }

        [DisplayName("Two Factor Enabled"), NotNull]
        public Boolean? TwoFactorEnabled
        {
            get { return Fields.TwoFactorEnabled[this]; }
            set { Fields.TwoFactorEnabled[this] = value; }
        }

        [DisplayName("User Name"), Size(256)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("First Name"), Size(30)]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(30)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Org Name"), Size(100)]
        public String OrgName
        {
            get { return Fields.OrgName[this]; }
            set { Fields.OrgName[this] = value; }
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

        public UsersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public Int32Field AccessFailedCount;
            public StringField ConcurrencyStamp;
            public StringField Email;
            public BooleanField EmailConfirmed;
            public BooleanField LockoutEnabled;
            public DateTimeOffsetField LockoutEnd;
            public StringField NormalizedEmail;
            public StringField NormalizedUserName;
            public StringField PasswordHash;
            public StringField PhoneNumber;
            public BooleanField PhoneNumberConfirmed;
            public StringField SecurityStamp;
            public BooleanField TwoFactorEnabled;
            public StringField UserName;
            public StringField FirstName;
            public StringField LastName;
            public StringField OrgName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "SA_Authorization.Users";
            }
        }
    }
}
