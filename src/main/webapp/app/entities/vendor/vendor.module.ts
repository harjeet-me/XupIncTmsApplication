import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XupIncTmsApplicationSharedModule } from 'app/shared/shared.module';
import { VendorComponent } from './vendor.component';
import { VendorDetailComponent } from './vendor-detail.component';
import { VendorUpdateComponent } from './vendor-update.component';
import { VendorDeletePopupComponent, VendorDeleteDialogComponent } from './vendor-delete-dialog.component';
import { vendorRoute, vendorPopupRoute } from './vendor.route';

const ENTITY_STATES = [...vendorRoute, ...vendorPopupRoute];

@NgModule({
    imports: [XupIncTmsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [VendorComponent, VendorDetailComponent, VendorUpdateComponent, VendorDeleteDialogComponent, VendorDeletePopupComponent],
    entryComponents: [VendorDeleteDialogComponent]
})
export class XupIncTmsApplicationVendorModule {}
