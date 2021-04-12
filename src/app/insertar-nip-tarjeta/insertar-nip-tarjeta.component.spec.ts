import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarNipTarjetaComponent } from './insertar-nip-tarjeta.component';

describe('InsertarNipTarjetaComponent', () => {
  let component: InsertarNipTarjetaComponent;
  let fixture: ComponentFixture<InsertarNipTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarNipTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarNipTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
