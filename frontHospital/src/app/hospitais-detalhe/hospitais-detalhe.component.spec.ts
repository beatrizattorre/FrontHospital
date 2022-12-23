import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaisDetalheComponent } from './hospitais-detalhe.component';

describe('HospitaisDetalheComponent', () => {
  let component: HospitaisDetalheComponent;
  let fixture: ComponentFixture<HospitaisDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaisDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitaisDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
