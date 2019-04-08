import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IInvoiceItem } from 'app/shared/model/invoice-item.model';
import { InvoiceItemService } from './invoice-item.service';

@Component({
    selector: 'jhi-invoice-item-update',
    templateUrl: './invoice-item-update.component.html'
})
export class InvoiceItemUpdateComponent implements OnInit {
    invoiceItem: IInvoiceItem;
    isSaving: boolean;

    constructor(protected invoiceItemService: InvoiceItemService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ invoiceItem }) => {
            this.invoiceItem = invoiceItem;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.invoiceItem.id !== undefined) {
            this.subscribeToSaveResponse(this.invoiceItemService.update(this.invoiceItem));
        } else {
            this.subscribeToSaveResponse(this.invoiceItemService.create(this.invoiceItem));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IInvoiceItem>>) {
        result.subscribe((res: HttpResponse<IInvoiceItem>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
