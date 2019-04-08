import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IContainer } from 'app/shared/model/container.model';
import { ContainerService } from './container.service';

@Component({
    selector: 'jhi-container-update',
    templateUrl: './container-update.component.html'
})
export class ContainerUpdateComponent implements OnInit {
    container: IContainer;
    isSaving: boolean;

    constructor(protected containerService: ContainerService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ container }) => {
            this.container = container;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.container.id !== undefined) {
            this.subscribeToSaveResponse(this.containerService.update(this.container));
        } else {
            this.subscribeToSaveResponse(this.containerService.create(this.container));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IContainer>>) {
        result.subscribe((res: HttpResponse<IContainer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
