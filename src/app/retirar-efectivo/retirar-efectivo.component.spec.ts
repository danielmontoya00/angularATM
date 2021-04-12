import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarEfectivoComponent } from './retirar-efectivo.component';

describe('RetirarEfectivoComponent', () => {
  let component: RetirarEfectivoComponent;
  let fixture: ComponentFixture<RetirarEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirarEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirarEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
