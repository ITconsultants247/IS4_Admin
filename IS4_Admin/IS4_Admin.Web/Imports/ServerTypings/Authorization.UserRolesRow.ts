
namespace IS4_Admin.Authorization {
    export interface UserRolesRow {
        UserId?: string;
        RoleId?: string;
        UserAccessFailedCount?: number;
        UserConcurrencyStamp?: string;
        UserEmail?: string;
        UserEmailConfirmed?: boolean;
        UserLockoutEnabled?: boolean;
        UserLockoutEnd?: any;
        UserNormalizedEmail?: string;
        UserNormalizedUserName?: string;
        UserPasswordHash?: string;
        UserPhoneNumber?: string;
        UserPhoneNumberConfirmed?: boolean;
        UserSecurityStamp?: string;
        UserTwoFactorEnabled?: boolean;
        UserUserName?: string;
        UserFirstName?: string;
        UserLastName?: string;
        UserOrgName?: string;
        RoleConcurrencyStamp?: string;
        RoleName?: string;
        RoleNormalizedName?: string;
    }

    export namespace UserRolesRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'UserId';
        export const localTextPrefix = 'Authorization.UserRoles';

        export namespace Fields {
            export declare const UserId;
            export declare const RoleId;
            export declare const UserAccessFailedCount;
            export declare const UserConcurrencyStamp;
            export declare const UserEmail;
            export declare const UserEmailConfirmed;
            export declare const UserLockoutEnabled;
            export declare const UserLockoutEnd;
            export declare const UserNormalizedEmail;
            export declare const UserNormalizedUserName;
            export declare const UserPasswordHash;
            export declare const UserPhoneNumber;
            export declare const UserPhoneNumberConfirmed;
            export declare const UserSecurityStamp;
            export declare const UserTwoFactorEnabled;
            export declare const UserUserName;
            export declare const UserFirstName;
            export declare const UserLastName;
            export declare const UserOrgName;
            export declare const RoleConcurrencyStamp;
            export declare const RoleName;
            export declare const RoleNormalizedName;
        }

        [
            'UserId',
            'RoleId',
            'UserAccessFailedCount',
            'UserConcurrencyStamp',
            'UserEmail',
            'UserEmailConfirmed',
            'UserLockoutEnabled',
            'UserLockoutEnd',
            'UserNormalizedEmail',
            'UserNormalizedUserName',
            'UserPasswordHash',
            'UserPhoneNumber',
            'UserPhoneNumberConfirmed',
            'UserSecurityStamp',
            'UserTwoFactorEnabled',
            'UserUserName',
            'UserFirstName',
            'UserLastName',
            'UserOrgName',
            'RoleConcurrencyStamp',
            'RoleName',
            'RoleNormalizedName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}