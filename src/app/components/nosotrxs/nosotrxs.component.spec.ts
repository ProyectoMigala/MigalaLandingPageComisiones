import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrxsComponent } from './nosotrxs.component';

describe('NosotrxsComponent', () => {
  let component: NosotrxsComponent;
  let fixture: ComponentFixture<NosotrxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
