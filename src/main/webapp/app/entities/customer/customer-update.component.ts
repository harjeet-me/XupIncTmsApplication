import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICustomer } from 'app/shared/model/customer.model';
import { CustomerService } from './customer.service';
import { ILocation } from 'app/shared/model/location.model';
import { LocationService } from 'app/entities/location';
import { IContact } from 'app/shared/model/contact.model';
import { ContactService } from 'app/entities/contact';
import { IInsurance } from 'app/shared/model/insurance.model';
import { InsuranceService } from 'app/entities/insurance';

@Component({
    selector: 'jhi-customer-update',
    templateUrl: './customer-update.component.html'
})
export class CustomerUpdateComponent implements OnInit {
    customer: ICustomer;
    isSaving: boolean;

    billingaddresses: ILocation[];

    contacts: IContact[];

    insurances: IInsurance[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected customerService: CustomerService,
        protected locationService: LocationService,
        protected contactService: ContactService,
        protected insuranceService: InsuranceService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ customer }) => {
            this.customer = customer;
        });
        this.locationService
            .query({ filter: 'customer-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ILocation[]>) => mayBeOk.ok),
                map((response: HttpResponse<ILocation[]>) => response.body)
            )
            .subscribe(
                (res: ILocation[]) => {
                    if (!this.customer.billingAddress || !this.customer.billingAddress.id) {
                        this.billingaddresses = res;
                    } else {
                        this.locationService
                            .find(this.customer.billingAddress.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<ILocation>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<ILocation>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: ILocation) => (this.billingaddresses = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.contactService
            .query({ filter: 'customer-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IContact[]>) => mayBeOk.ok),
                map((response: HttpResponse<IContact[]>) => response.body)
            )
            .subscribe(
                (res: IContact[]) => {
                    if (!this.customer.contact || !this.customer.contact.id) {
                        this.contacts = res;
                    } else {
                        this.contactService
                            .find(this.customer.contact.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IContact>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IContact>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IContact) => (this.contacts = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.insuranceService
            .query({ filter: 'customer-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IInsurance[]>) => mayBeOk.ok),
                map((response: HttpResponse<IInsurance[]>) => response.body)
            )
            .subscribe(
                (res: IInsurance[]) => {
                    if (!this.customer.insurance || !this.customer.insurance.id) {
                        this.insurances = res;
                    } else {
                        this.insuranceService
                            .find(this.customer.insurance.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IInsurance>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IInsurance>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IInsurance) => (this.insurances = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.customer.id !== undefined) {
            this.subscribeToSaveResponse(this.customerService.update(this.customer));
        } else {
            this.subscribeToSaveResponse(this.customerService.create(this.customer));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICustomer>>) {
        result.subscribe((res: HttpResponse<ICustomer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackLocationById(index: number, item: ILocation) {
        return item.id;
    }

    trackContactById(index: number, item: IContact) {
        return item.id;
    }

    trackInsuranceById(index: number, item: IInsurance) {
        return item.id;
    }
}
