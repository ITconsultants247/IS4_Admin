
namespace IS4_Admin.SA_Authorization.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("IdentityServer"), TableName("[dbo].[AspNetUserRoles]")]
    [DisplayName("User Roles"), InstanceName("User Roles"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserRolesRow : Row, IIdRow, INameRow
    {
        [DisplayName("User"), Size(450), PrimaryKey, ForeignKey("[dbo].[AspNetUsers]", "Id"), LeftJoin("jUser"), QuickSearch, TextualField("UserConcurrencyStamp")]
        public String UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Role"), Size(450), PrimaryKey, ForeignKey("[dbo].[AspNetRoles]", "Id"), LeftJoin("jRole"), TextualField("RoleConcurrencyStamp")]
        public String RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("User Access Failed Count"), Expression("jUser.[AccessFailedCount]")]
        public Int32? UserAccessFailedCount
        {
            get { return Fields.UserAccessFailedCount[this]; }
            set { Fields.UserAccessFailedCount[this] = value; }
        }

        [DisplayName("User Concurrency Stamp"), Expression("jUser.[ConcurrencyStamp]")]
        public String UserConcurrencyStamp
        {
            get { return Fields.UserConcurrencyStamp[this]; }
            set { Fields.UserConcurrencyStamp[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Email Confirmed"), Expression("jUser.[EmailConfirmed]")]
        public Boolean? UserEmailConfirmed
        {
            get { return Fields.UserEmailConfirmed[this]; }
            set { Fields.UserEmailConfirmed[this] = value; }
        }

        [DisplayName("User Lockout Enabled"), Expression("jUser.[LockoutEnabled]")]
        public Boolean? UserLockoutEnabled
        {
            get { return Fields.UserLockoutEnabled[this]; }
            set { Fields.UserLockoutEnabled[this] = value; }
        }

        [DisplayName("User Lockout End"), Expression("jUser.[LockoutEnd]")]
        public DateTimeOffset? UserLockoutEnd
        {
            get { return Fields.UserLockoutEnd[this]; }
            set { Fields.UserLockoutEnd[this] = value; }
        }

        [DisplayName("User Normalized Email"), Expression("jUser.[NormalizedEmail]")]
        public String UserNormalizedEmail
        {
            get { return Fields.UserNormalizedEmail[this]; }
            set { Fields.UserNormalizedEmail[this] = value; }
        }

        [DisplayName("User Normalized User Name"), Expression("jUser.[NormalizedUserName]")]
        public String UserNormalizedUserName
        {
            get { return Fields.UserNormalizedUserName[this]; }
            set { Fields.UserNormalizedUserName[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Phone Number"), Expression("jUser.[PhoneNumber]")]
        public String UserPhoneNumber
        {
            get { return Fields.UserPhoneNumber[this]; }
            set { Fields.UserPhoneNumber[this] = value; }
        }

        [DisplayName("User Phone Number Confirmed"), Expression("jUser.[PhoneNumberConfirmed]")]
        public Boolean? UserPhoneNumberConfirmed
        {
            get { return Fields.UserPhoneNumberConfirmed[this]; }
            set { Fields.UserPhoneNumberConfirmed[this] = value; }
        }

        [DisplayName("User Security Stamp"), Expression("jUser.[SecurityStamp]")]
        public String UserSecurityStamp
        {
            get { return Fields.UserSecurityStamp[this]; }
            set { Fields.UserSecurityStamp[this] = value; }
        }

        [DisplayName("User Two Factor Enabled"), Expression("jUser.[TwoFactorEnabled]")]
        public Boolean? UserTwoFactorEnabled
        {
            get { return Fields.UserTwoFactorEnabled[this]; }
            set { Fields.UserTwoFactorEnabled[this] = value; }
        }

        [DisplayName("User User Name"), Expression("jUser.[UserName]")]
        public String UserUserName
        {
            get { return Fields.UserUserName[this]; }
            set { Fields.UserUserName[this] = value; }
        }

        [DisplayName("User First Name"), Expression("jUser.[FirstName]")]
        public String UserFirstName
        {
            get { return Fields.UserFirstName[this]; }
            set { Fields.UserFirstName[this] = value; }
        }

        [DisplayName("User Last Name"), Expression("jUser.[LastName]")]
        public String UserLastName
        {
            get { return Fields.UserLastName[this]; }
            set { Fields.UserLastName[this] = value; }
        }

        [DisplayName("User Org Name"), Expression("jUser.[OrgName]")]
        public String UserOrgName
        {
            get { return Fields.UserOrgName[this]; }
            set { Fields.UserOrgName[this] = value; }
        }

        [DisplayName("Role Concurrency Stamp"), Expression("jRole.[ConcurrencyStamp]")]
        public String RoleConcurrencyStamp
        {
            get { return Fields.RoleConcurrencyStamp[this]; }
            set { Fields.RoleConcurrencyStamp[this] = value; }
        }

        [DisplayName("Role Name"), Expression("jRole.[Name]")]
        public String RoleName
        {
            get { return Fields.RoleName[this]; }
            set { Fields.RoleName[this] = value; }
        }

        [DisplayName("Role Normalized Name"), Expression("jRole.[NormalizedName]")]
        public String RoleNormalizedName
        {
            get { return Fields.RoleNormalizedName[this]; }
            set { Fields.RoleNormalizedName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRolesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField UserId;
            public StringField RoleId;

            public Int32Field UserAccessFailedCount;
            public StringField UserConcurrencyStamp;
            public StringField UserEmail;
            public BooleanField UserEmailConfirmed;
            public BooleanField UserLockoutEnabled;
            public DateTimeOffsetField UserLockoutEnd;
            public StringField UserNormalizedEmail;
            public StringField UserNormalizedUserName;
            public StringField UserPasswordHash;
            public StringField UserPhoneNumber;
            public BooleanField UserPhoneNumberConfirmed;
            public StringField UserSecurityStamp;
            public BooleanField UserTwoFactorEnabled;
            public StringField UserUserName;
            public StringField UserFirstName;
            public StringField UserLastName;
            public StringField UserOrgName;

            public StringField RoleConcurrencyStamp;
            public StringField RoleName;
            public StringField RoleNormalizedName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "SA_Authorization.UserRoles";
            }
        }
    }
}
