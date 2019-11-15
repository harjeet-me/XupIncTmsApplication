import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'booking',
                loadChildren: './booking/booking.module#XupIncTmsApplicationBookingModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#XupIncTmsApplicationInvoiceModule'
            },
            {
                path: 'invoice-item',
                loadChildren: './invoice-item/invoice-item.module#XupIncTmsApplicationInvoiceItemModule'
            },
            {
                path: 'insurance',
                loadChildren: './insurance/insurance.module#XupIncTmsApplicationInsuranceModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#XupIncTmsApplicationContactModule'
            },
            {
                path: 'booking-item',
                loadChildren: './booking-item/booking-item.module#XupIncTmsApplicationBookingItemModule'
            },
            {
                path: 'equipment',
                loadChildren: './equipment/equipment.module#XupIncTmsApplicationEquipmentModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#XupIncTmsApplicationCustomerModule'
            },
            {
                path: 'vendor',
                loadChildren: './vendor/vendor.module#XupIncTmsApplicationVendorModule'
            },
            {
                path: 'container',
                loadChildren: './container/container.module#XupIncTmsApplicationContainerModule'
            },
            {
                path: 'driver',
                loadChildren: './driver/driver.module#XupIncTmsApplicationDriverModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#XupIncTmsApplicationLocationModule'
            },
            {
                path: 'region',
                loadChildren: './region/region.module#XupIncTmsApplicationRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#XupIncTmsApplicationCountryModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#XupIncTmsApplicationDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#XupIncTmsApplicationTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#XupIncTmsApplicationEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#XupIncTmsApplicationJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#XupIncTmsApplicationJobHistoryModule'
            },
            {
                path: 'vendor',
                loadChildren: './vendor/vendor.module#XupIncTmsApplicationVendorModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XupIncTmsApplicationEntityModule {}
