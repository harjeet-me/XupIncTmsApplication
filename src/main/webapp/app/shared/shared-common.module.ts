import { NgModule } from '@angular/core';

import { XupIncTmsApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [XupIncTmsApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [XupIncTmsApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class XupIncTmsApplicationSharedCommonModule {}
