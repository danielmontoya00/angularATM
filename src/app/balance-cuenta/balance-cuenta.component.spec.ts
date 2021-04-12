import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceCuentaComponent } from './balance-cuenta.component';

describe('BalanceCuentaComponent', () => {
  let component: BalanceCuentaComponent;
  let fixture: ComponentFixture<BalanceCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
