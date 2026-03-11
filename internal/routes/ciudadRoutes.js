import express from 'express';

import * as ciudadController from '../controllers/ciudadControllers.js';

const router = express.Router();

router.get('/ciudad',ciudadController.getCiudad);
router.post('/ciudad',ciudadController.createCiudad);
router.put('/ciudad/:id',ciudadController.updateCiudad);
router.delete('/ciudad/:id',ciudadController.deleteCiudad);
router.get('/ciudad/search',ciudadController.searchCiudad);
export default router;
