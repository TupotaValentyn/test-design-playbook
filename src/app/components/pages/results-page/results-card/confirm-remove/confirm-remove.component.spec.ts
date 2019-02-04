import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRemoveComponent } from './confirm-remove.component';

describe('ConfirmRemoveComponent', () => {
  let component: ConfirmRemoveComponent;
  let fixture: ComponentFixture<ConfirmRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
