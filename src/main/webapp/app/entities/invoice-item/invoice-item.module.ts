import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared';
import {
    InvoiceItemComponent,
    InvoiceItemDetailComponent,
    InvoiceItemUpdateComponent,
    InvoiceItemDeletePopupComponent,
    InvoiceItemDeleteDialogComponent,
    invoiceItemRoute,
    invoiceItemPopupRoute
} from './';

const ENTITY_STATES = [...invoiceItemRoute, ...invoiceItemPopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        InvoiceItemComponent,
        InvoiceItemDetailComponent,
        InvoiceItemUpdateComponent,
        InvoiceItemDeleteDialogComponent,
        InvoiceItemDeletePopupComponent
    ],
    entryComponents: [InvoiceItemComponent, InvoiceItemUpdateComponent, InvoiceItemDeleteDialogComponent, InvoiceItemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationInvoiceItemModule {}
