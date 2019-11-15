export interface IVendor {
    id?: number;
    company?: string;
    firstName?: string;
    lastName?: string;
    mc?: number;
    email?: string;
    phoneNumber?: number;
    insuranceProvider?: string;
}

export class Vendor implements IVendor {
    constructor(
        public id?: number,
        public company?: string,
        public firstName?: string,
        public lastName?: string,
        public mc?: number,
        public email?: string,
        public phoneNumber?: number,
        public insuranceProvider?: string
    ) {}
}
