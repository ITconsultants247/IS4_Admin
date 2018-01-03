
namespace IS4_Admin.SA_Authorization {
    export interface RolesRow {
        Id?: string;
        ConcurrencyStamp?: string;
        Name?: string;
        NormalizedName?: string;
    }

    export namespace RolesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'SA_Authorization.Roles';

        export namespace Fields {
            export declare const Id;
            export declare const ConcurrencyStamp;
            export declare const Name;
            export declare const NormalizedName;
        }

        [
            'Id',
            'ConcurrencyStamp',
            'Name',
            'NormalizedName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}