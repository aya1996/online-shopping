import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTopComponent } from './lab-top.component';

describe('LabTopComponent', () => {
  let component: LabTopComponent;
  let fixture: ComponentFixture<LabTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
