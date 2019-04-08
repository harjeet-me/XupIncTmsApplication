import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { IBookingItem } from 'app/shared/model/booking-item.model';
import { BookingItemService } from './booking-item.service';
import { IEquipment } from 'app/shared/model/equipment.model';
import { EquipmentService } from 'app/entities/equipment';
import { IDriver } from 'app/shared/model/driver.model';
import { DriverService } from 'app/entities/driver';
import { IBooking } from 'app/shared/model/booking.model';
import { BookingService } from 'app/entities/booking';

@Component({
    selector: 'jhi-booking-item-update',
    templateUrl: './booking-item-update.component.html'
})
export class BookingItemUpdateComponent implements OnInit {
    bookingItem: IBookingItem;
    isSaving: boolean;

    equipment: IEquipment[];

    drivers: IDriver[];

    bookings: IBooking[];
    pickup: string;
    drop: string;
    chasisInTime: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected bookingItemService: BookingItemService,
        protected equipmentService: EquipmentService,
        protected driverService: DriverService,
        protected bookingService: BookingService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ bookingItem }) => {
            this.bookingItem = bookingItem;
            this.pickup = this.bookingItem.pickup != null ? this.bookingItem.pickup.format(DATE_TIME_FORMAT) : null;
            this.drop = this.bookingItem.drop != null ? this.bookingItem.drop.format(DATE_TIME_FORMAT) : null;
            this.chasisInTime = this.bookingItem.chasisInTime != null ? this.bookingItem.chasisInTime.format(DATE_TIME_FORMAT) : null;
        });
        this.equipmentService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEquipment[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEquipment[]>) => response.body)
            )
            .subscribe((res: IEquipment[]) => (this.equipment = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.driverService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IDriver[]>) => mayBeOk.ok),
                map((response: HttpResponse<IDriver[]>) => response.body)
            )
            .subscribe((res: IDriver[]) => (this.drivers = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.bookingService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IBooking[]>) => mayBeOk.ok),
                map((response: HttpResponse<IBooking[]>) => response.body)
            )
            .subscribe((res: IBooking[]) => (this.bookings = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.bookingItem, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.bookingItem.pickup = this.pickup != null ? moment(this.pickup, DATE_TIME_FORMAT) : null;
        this.bookingItem.drop = this.drop != null ? moment(this.drop, DATE_TIME_FORMAT) : null;
        this.bookingItem.chasisInTime = this.chasisInTime != null ? moment(this.chasisInTime, DATE_TIME_FORMAT) : null;
        if (this.bookingItem.id !== undefined) {
            this.subscribeToSaveResponse(this.bookingItemService.update(this.bookingItem));
        } else {
            this.subscribeToSaveResponse(this.bookingItemService.create(this.bookingItem));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IBookingItem>>) {
        result.subscribe((res: HttpResponse<IBookingItem>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackEquipmentById(index: number, item: IEquipment) {
        return item.id;
    }

    trackDriverById(index: number, item: IDriver) {
        return item.id;
    }

    trackBookingById(index: number, item: IBooking) {
        return item.id;
    }
}
