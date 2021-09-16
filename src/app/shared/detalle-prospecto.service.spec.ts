import { TestBed } from '@angular/core/testing';

import { DetalleProspectoService } from './detalle-prospecto.service';

describe('DetalleProspectoService', () => {
  let service: DetalleProspectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProspectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
