import { Moment } from 'moment';
import { ICustomer } from 'app/shared/model/customer.model';

export const enum StatusEnum {
    PICKEDUP = 'PICKEDUP',
    ONROAD = 'ONROAD',
    DELIVERED = 'DELIVERED'
}

export interface IInvoice {
    id?: number;
    bookingNo?: string;
    invoiceTotal?: number;
    invoiceDueDate?: Moment;
    status?: StatusEnum;
    invoiceTo?: ICustomer;
}

export class Invoice implements IInvoice {
    constructor(
        public id?: number,
        public bookingNo?: string,
        public invoiceTotal?: number,
        public invoiceDueDate?: Moment,
        public status?: StatusEnum,
        public invoiceTo?: ICustomer
    ) {}
}
