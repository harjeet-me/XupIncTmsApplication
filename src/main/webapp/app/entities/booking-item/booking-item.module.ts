import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared';
import {
    BookingItemComponent,
    BookingItemDetailComponent,
    BookingItemUpdateComponent,
    BookingItemDeletePopupComponent,
    BookingItemDeleteDialogComponent,
    bookingItemRoute,
    bookingItemPopupRoute
} from './';

const ENTITY_STATES = [...bookingItemRoute, ...bookingItemPopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BookingItemComponent,
        BookingItemDetailComponent,
        BookingItemUpdateComponent,
        BookingItemDeleteDialogComponent,
        BookingItemDeletePopupComponent
    ],
    entryComponents: [BookingItemComponent, BookingItemUpdateComponent, BookingItemDeleteDialogComponent, BookingItemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationBookingItemModule {}
