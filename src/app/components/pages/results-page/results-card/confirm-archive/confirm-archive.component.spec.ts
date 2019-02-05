import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmArchiveComponent } from './confirm-archive.component';

describe('ConfirmArchiveComponent', () => {
  let component: ConfirmArchiveComponent;
  let fixture: ComponentFixture<ConfirmArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
