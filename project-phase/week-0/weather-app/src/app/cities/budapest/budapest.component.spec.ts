import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestComponent } from './budapest.component';

describe('BudapestComponent', () => {
  let component: BudapestComponent;
  let fixture: ComponentFixture<BudapestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
