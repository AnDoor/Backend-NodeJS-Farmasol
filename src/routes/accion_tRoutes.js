import express from 'express';

import * as AccionTerapeuticaController from '../controllers/accion_tController.js';

const router = express.Router();

router.get('/accionTerapeutica',AccionTerapeuticaController.getAccionTerapeutica);
router.post('/accionTerapeutica',AccionTerapeuticaController.createAccionTerapeutica);
router.put('/accionTerapeutica/:id',AccionTerapeuticaController.updateAccionTerapeutica);
router.delete('/accionTerapeutica/:id',AccionTerapeuticaController.deleteAccionTerapeutica);
router.get('/accionTerapeutica/search',AccionTerapeuticaController.searchAccionTerapeutica);
export default router;