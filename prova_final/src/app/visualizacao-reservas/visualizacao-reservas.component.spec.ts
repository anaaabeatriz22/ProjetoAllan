import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoReservasComponent } from './visualizacao-reservas.component';

describe('VisualizacaoReservasComponent', () => {
  let component: VisualizacaoReservasComponent;
  let fixture: ComponentFixture<VisualizacaoReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacaoReservasComponent]
    });
    fixture = TestBed.createComponent(VisualizacaoReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
