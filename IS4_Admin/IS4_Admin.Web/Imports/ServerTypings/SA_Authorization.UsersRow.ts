
namespace IS4_Admin.SA_Authorization {
    export interface UsersRow {
        Id?: string;
        AccessFailedCount?: number;
        ConcurrencyStamp?: string;
        Email?: string;
        EmailConfirmed?: boolean;
        LockoutEnabled?: boolean;
        LockoutEnd?: any;
        NormalizedEmail?: string;
        NormalizedUserName?: string;
        PasswordHash?: string;
        PhoneNumber?: string;
        PhoneNumberConfirmed?: boolean;
        SecurityStamp?: string;
        TwoFactorEnabled?: boolean;
        UserName?: string;
        FirstName?: string;
        LastName?: string;
        OrgName?: string;
    }

    export namespace UsersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'SA_Authorization.Users';

        export namespace Fields {
            export declare const Id;
            export declare const AccessFailedCount;
            export declare const ConcurrencyStamp;
            export declare const Email;
            export declare const EmailConfirmed;
            export declare const LockoutEnabled;
            export declare const LockoutEnd;
            export declare const NormalizedEmail;
            export declare const NormalizedUserName;
            export declare const PasswordHash;
            export declare const PhoneNumber;
            export declare const PhoneNumberConfirmed;
            export declare const SecurityStamp;
            export declare const TwoFactorEnabled;
            export declare const UserName;
            export declare const FirstName;
            export declare const LastName;
            export declare const OrgName;
        }

        [
            'Id',
            'AccessFailedCount',
            'ConcurrencyStamp',
            'Email',
            'EmailConfirmed',
            'LockoutEnabled',
            'LockoutEnd',
            'NormalizedEmail',
            'NormalizedUserName',
            'PasswordHash',
            'PhoneNumber',
            'PhoneNumberConfirmed',
            'SecurityStamp',
            'TwoFactorEnabled',
            'UserName',
            'FirstName',
            'LastName',
            'OrgName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}