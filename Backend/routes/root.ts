import express from 'express';
import { controller } from '../controllers/root';

export var router = express.Router();

router.get('/llaves', controller.llaves);
router.post('/escenario', controller.escenario);