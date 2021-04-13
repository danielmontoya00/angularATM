import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarEfectivoMessageComponent } from './retirar-efectivo-message.component';

describe('RetirarEfectivoMessageComponent', () => {
  let component: RetirarEfectivoMessageComponent;
  let fixture: ComponentFixture<RetirarEfectivoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirarEfectivoMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirarEfectivoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
