import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IInsurance } from 'app/shared/model/insurance.model';
import { AccountService } from 'app/core';
import { InsuranceService } from './insurance.service';

@Component({
    selector: 'jhi-insurance',
    templateUrl: './insurance.component.html'
})
export class InsuranceComponent implements OnInit, OnDestroy {
    insurances: IInsurance[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        protected insuranceService: InsuranceService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected activatedRoute: ActivatedRoute,
        protected accountService: AccountService
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.insuranceService
                .search({
                    query: this.currentSearch
                })
                .pipe(
                    filter((res: HttpResponse<IInsurance[]>) => res.ok),
                    map((res: HttpResponse<IInsurance[]>) => res.body)
                )
                .subscribe((res: IInsurance[]) => (this.insurances = res), (res: HttpErrorResponse) => this.onError(res.message));
            return;
        }
        this.insuranceService
            .query()
            .pipe(
                filter((res: HttpResponse<IInsurance[]>) => res.ok),
                map((res: HttpResponse<IInsurance[]>) => res.body)
            )
            .subscribe(
                (res: IInsurance[]) => {
                    this.insurances = res;
                    this.currentSearch = '';
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInInsurances();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IInsurance) {
        return item.id;
    }

    registerChangeInInsurances() {
        this.eventSubscriber = this.eventManager.subscribe('insuranceListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}