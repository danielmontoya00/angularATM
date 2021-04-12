import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTarjetaComponent } from './insertar-tarjeta.component';

describe('InsertarTarjetaComponent', () => {
  let component: InsertarTarjetaComponent;
  let fixture: ComponentFixture<InsertarTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
