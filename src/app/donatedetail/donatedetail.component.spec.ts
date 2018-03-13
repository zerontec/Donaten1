import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatedetailComponent } from './donatedetail.component';

describe('DonatedetailComponent', () => {
  let component: DonatedetailComponent;
  let fixture: ComponentFixture<DonatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
