import request from 'supertest';
import {app} from '../src/index'

describe('test api', ()=>{

    test('GET /llaves retorna 200 y no undefined', async () => {
        const response = await request(app).get('/llaves');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    test('POST /escenario retorna 200 y flujo: formulario', async () => {
        const body = {
            flujo: 'Inicio'
        }
        const response = await request(app).post('/escenario').send(body);
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.flujo).toBeDefined();
        expect(response.body.flujo).toStrictEqual('formulario');
    });

    test('POST /escenario retorna 200, ¡DATOS INCORRECTOS! y exitoso falso', async () => {
        const body = {
            flujo: 'Formulario'
        }
        const response = await request(app).post('/escenario').send(body);
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.exitoso).toBeFalsy();
        expect(response.body.mensaje).toStrictEqual('¡DATOS INCORRECTOS!');
    });

    test('POST /escenario retorna 200, ¡DATOS RECIBIDOS! y exitoso true', async () => {
        const body = {
            flujo: 'Formulario',
            numDocumento: '1242135',
            nombre: 'julian'
        }
        const response = await request(app).post('/escenario').send(body);
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.exitoso).toBeTruthy();
        expect(response.body.mensaje).toStrictEqual('¡DATOS RECIBIDOS!');
    });
})