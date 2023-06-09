import { llavesRSA } from '../src';
import  validator from 'validator';

export var controller = {

    llaves: (_req, res) => {
        return res.send(llavesRSA);
    },

    escenario: (req, res) => {
        const body = req?.body;
        if (!body || !body.flujo) {
            return res.send("Error en los datos");
        } else if ('Inicio' === body.flujo) {
            return res.send({ 'flujo': 'formulario' });
        } else if ('Formulario' === body.flujo) {
            //validar que los campos no sean nulos
            return res.send(validarDatosFormulario(body));
        }
        return res.send(llavesRSA);
    }

};

function validarDatosFormulario(data){
    try {
        var validateNumDoc = !validator.isEmpty(data.numDocumento);
        var validateNombre = !validator.isEmpty(data.nombre);
    } catch (error) {
        return {
            'exitoso': false,
            'mensaje': '¡DATOS INCORRECTOS!'
        };
    }

    if(validateNumDoc && validateNombre){
        return {
            'exitoso': true,
            'mensaje': '¡DATOS RECIBIDOS!'
        };
    }
}