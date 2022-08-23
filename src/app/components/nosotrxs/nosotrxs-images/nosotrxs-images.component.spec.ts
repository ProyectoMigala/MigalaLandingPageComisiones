import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrxsImagesComponent } from './nosotrxs-images.component';

describe('NosotrxsImagesComponent', () => {
    let component: NosotrxsImagesComponent;
    let fixture: ComponentFixture<NosotrxsImagesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NosotrxsImagesComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NosotrxsImagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
