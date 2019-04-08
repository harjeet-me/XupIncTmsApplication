import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared';
import {
    ContainerComponent,
    ContainerDetailComponent,
    ContainerUpdateComponent,
    ContainerDeletePopupComponent,
    ContainerDeleteDialogComponent,
    containerRoute,
    containerPopupRoute
} from './';

const ENTITY_STATES = [...containerRoute, ...containerPopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ContainerComponent,
        ContainerDetailComponent,
        ContainerUpdateComponent,
        ContainerDeleteDialogComponent,
        ContainerDeletePopupComponent
    ],
    entryComponents: [ContainerComponent, ContainerUpdateComponent, ContainerDeleteDialogComponent, ContainerDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationContainerModule {}
