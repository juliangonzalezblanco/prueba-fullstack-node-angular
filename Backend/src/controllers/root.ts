import { llavesRSA } from '..';
import  validator from 'validator';

export var controller = {

    llaves: (_req, res) => {
        return res.json(llavesRSA);
    },

    escenario: (req, res) => {
        const body = req?.body;
        if (!body || !body.flujo) {
            return res.json("Error en los datos");
        } else if ('Inicio' === body.flujo) {
            return res.json({ 'flujo': 'formulario' });
        } else if ('Formulario' === body.flujo) {
            //validar que los campos no sean nulos
            return res.json(validarDatosFormulario(body));
        }
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