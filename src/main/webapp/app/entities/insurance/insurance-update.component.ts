import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IInsurance } from 'app/shared/model/insurance.model';
import { InsuranceService } from './insurance.service';
import { ICustomer } from 'app/shared/model/customer.model';
import { CustomerService } from 'app/entities/customer';

@Component({
    selector: 'jhi-insurance-update',
    templateUrl: './insurance-update.component.html'
})
export class InsuranceUpdateComponent implements OnInit {
    insurance: IInsurance;
    isSaving: boolean;

    customers: ICustomer[];
    startDateDp: any;
    expiryDateDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected insuranceService: InsuranceService,
        protected customerService: CustomerService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ insurance }) => {
            this.insurance = insurance;
        });
        this.customerService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICustomer[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICustomer[]>) => response.body)
            )
            .subscribe((res: ICustomer[]) => (this.customers = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.insurance.id !== undefined) {
            this.subscribeToSaveResponse(this.insuranceService.update(this.insurance));
        } else {
            this.subscribeToSaveResponse(this.insuranceService.create(this.insurance));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IInsurance>>) {
        result.subscribe((res: HttpResponse<IInsurance>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCustomerById(index: number, item: ICustomer) {
        return item.id;
    }
}
