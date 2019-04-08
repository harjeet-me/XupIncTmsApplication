import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared';
import {
    EquipmentComponent,
    EquipmentDetailComponent,
    EquipmentUpdateComponent,
    EquipmentDeletePopupComponent,
    EquipmentDeleteDialogComponent,
    equipmentRoute,
    equipmentPopupRoute
} from './';

const ENTITY_STATES = [...equipmentRoute, ...equipmentPopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EquipmentComponent,
        EquipmentDetailComponent,
        EquipmentUpdateComponent,
        EquipmentDeleteDialogComponent,
        EquipmentDeletePopupComponent
    ],
    entryComponents: [EquipmentComponent, EquipmentUpdateComponent, EquipmentDeleteDialogComponent, EquipmentDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationEquipmentModule {}
