import express from 'express';

import * as cargoController from '../controllers/cargoControllers.js';

const router = express.Router();

router.get('/cargo',cargoController.getCargo);
router.post('/cargo',cargoController.createCargo);
router.put('/cargo/:id',cargoController.updateCargo);
router.delete('/cargo/:id',cargoController.deleteCargo);
router.get('/cargo/search',cargoController.searchCargo);
export default router;