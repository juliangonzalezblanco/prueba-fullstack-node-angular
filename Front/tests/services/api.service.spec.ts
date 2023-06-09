import { TestBed } from '@angular/core/testing';

import { ApiService } from '../../src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ApiService);
  });

  test('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  test('debe traer las llaves', (done) => {
    service.getLlaves().subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.llavePrivada).toBeDefined();
      expect(res.llavePublica).toBeDefined();

      done();
    })
  });

  test('debe traer flujo', (done) => {
    const body = {
      flujo: 'Inicio'
    }
    service.getEscenario(body).subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.flujo).toBeDefined();
      expect(res.flujo).toStrictEqual('formulario');

      done();
    })
  });

  test('formulario no exitoso', (done) => {
    const body = {
      flujo: 'Formulario'
    }
    service.getEscenario(body).subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.exitoso).toBeFalsy();
      expect(res.mensaje).toStrictEqual('¡DATOS INCORRECTOS!');

      done();
    })
  });

  test('formulario exitoso', (done) => {
    const body = {
      flujo: 'Formulario',
      numDocumento: '1242135',
      nombre: 'julian'
    }
    service.getEscenario(body).subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.exitoso).toBeTruthy();
      expect(res.mensaje).toStrictEqual('¡DATOS RECIBIDOS!');

      done();
    })
  });
});
