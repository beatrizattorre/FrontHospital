import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaisEditarComponent } from './hospitais-editar.component';

describe('HospitaisEditarComponent', () => {
  let component: HospitaisEditarComponent;
  let fixture: ComponentFixture<HospitaisEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaisEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitaisEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
