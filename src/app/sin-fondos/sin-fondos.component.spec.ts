import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinFondosComponent } from './sin-fondos.component';

describe('SinFondosComponent', () => {
  let component: SinFondosComponent;
  let fixture: ComponentFixture<SinFondosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinFondosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinFondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
