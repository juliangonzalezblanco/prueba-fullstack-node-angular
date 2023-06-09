import express from 'express';
import cors from 'cors';
import { generarLlavesRSA } from '../src/encrypt/RSA';
import { router } from '../src/routes/root';

export const app = express();
app.use(express.json()); //transforma req.body a un json
app.use(cors());

const PORT = 3000;
export let llavesRSA: any = null;

//cargar rutas
app.use('/', router);

//obtenemos las llaves e iniciamos el servidor
generarLlavesRSA()
    .then(llaves => {
        //almacenamos las llaves en memoria
        llavesRSA = llaves;
        //arrancamos el servidor express
        app.listen(PORT, () => { })
    })