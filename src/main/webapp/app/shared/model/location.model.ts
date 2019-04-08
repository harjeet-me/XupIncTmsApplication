import { ICustomer } from 'app/shared/model/customer.model';

export const enum CountryEnum {
    USA = 'USA',
    CANADA = 'CANADA',
    MEXICO = 'MEXICO'
}

export interface ILocation {
    id?: number;
    address?: string;
    streetAddress?: string;
    city?: string;
    stateProvince?: string;
    country?: CountryEnum;
    postalCode?: string;
    customer?: ICustomer;
}

export class Location implements ILocation {
    constructor(
        public id?: number,
        public address?: string,
        public streetAddress?: string,
        public city?: string,
        public stateProvince?: string,
        public country?: CountryEnum,
        public postalCode?: string,
        public customer?: ICustomer
    ) {}
}
