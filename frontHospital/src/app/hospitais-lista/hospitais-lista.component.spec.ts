import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaisListaComponent } from './hospitais-lista.component';

describe('HospitaisListaComponent', () => {
  let component: HospitaisListaComponent;
  let fixture: ComponentFixture<HospitaisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaisListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitaisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
