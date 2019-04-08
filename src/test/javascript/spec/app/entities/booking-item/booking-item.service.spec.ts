/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { BookingItemService } from 'app/entities/booking-item/booking-item.service';
import { IBookingItem, BookingItem, StatusEnum } from 'app/shared/model/booking-item.model';

describe('Service Tests', () => {
    describe('BookingItem Service', () => {
        let injector: TestBed;
        let service: BookingItemService;
        let httpMock: HttpTestingController;
        let elemDefault: IBookingItem;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(BookingItemService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new BookingItem(
                0,
                'AAAAAAA',
                currentDate,
                currentDate,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                StatusEnum.PICKEDUP,
                0,
                currentDate,
                'image/png',
                'AAAAAAA',
                false,
                'AAAAAAA'
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        pickup: currentDate.format(DATE_TIME_FORMAT),
                        drop: currentDate.format(DATE_TIME_FORMAT),
                        chasisInTime: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a BookingItem', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        pickup: currentDate.format(DATE_TIME_FORMAT),
                        drop: currentDate.format(DATE_TIME_FORMAT),
                        chasisInTime: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        pickup: currentDate,
                        drop: currentDate,
                        chasisInTime: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new BookingItem(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a BookingItem', async () => {
                const returnedFromService = Object.assign(
                    {
                        description: 'BBBBBB',
                        pickup: currentDate.format(DATE_TIME_FORMAT),
                        drop: currentDate.format(DATE_TIME_FORMAT),
                        source: 'BBBBBB',
                        destination: 'BBBBBB',
                        currentLocation: 'BBBBBB',
                        status: 'BBBBBB',
                        detention: 1,
                        chasisInTime: currentDate.format(DATE_TIME_FORMAT),
                        pod: 'BBBBBB',
                        hazmat: true,
                        recievedBy: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        pickup: currentDate,
                        drop: currentDate,
                        chasisInTime: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of BookingItem', async () => {
                const returnedFromService = Object.assign(
                    {
                        description: 'BBBBBB',
                        pickup: currentDate.format(DATE_TIME_FORMAT),
                        drop: currentDate.format(DATE_TIME_FORMAT),
                        source: 'BBBBBB',
                        destination: 'BBBBBB',
                        currentLocation: 'BBBBBB',
                        status: 'BBBBBB',
                        detention: 1,
                        chasisInTime: currentDate.format(DATE_TIME_FORMAT),
                        pod: 'BBBBBB',
                        hazmat: true,
                        recievedBy: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        pickup: currentDate,
                        drop: currentDate,
                        chasisInTime: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a BookingItem', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
