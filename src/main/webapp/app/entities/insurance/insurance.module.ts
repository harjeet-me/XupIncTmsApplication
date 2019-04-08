import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared';
import {
    InsuranceComponent,
    InsuranceDetailComponent,
    InsuranceUpdateComponent,
    InsuranceDeletePopupComponent,
    InsuranceDeleteDialogComponent,
    insuranceRoute,
    insurancePopupRoute
} from './';

const ENTITY_STATES = [...insuranceRoute, ...insurancePopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        InsuranceComponent,
        InsuranceDetailComponent,
        InsuranceUpdateComponent,
        InsuranceDeleteDialogComponent,
        InsuranceDeletePopupComponent
    ],
    entryComponents: [InsuranceComponent, InsuranceUpdateComponent, InsuranceDeleteDialogComponent, InsuranceDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationInsuranceModule {}
