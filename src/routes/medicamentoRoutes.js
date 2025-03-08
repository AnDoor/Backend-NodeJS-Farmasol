import express from 'express';

import * as medicamentoController from '../controllers/medicamentoController.js';

const router = express.Router();

router.get('/medicamento',medicamentoController.getMedicamento);
router.post('/medicamento',medicamentoController.createMedicamento);
router.put('/medicamento/:id',medicamentoController.updateMedicamento);
router.delete('/medicamento/:id',medicamentoController.deleteMedicamento);
router.get('/medicamento/search',medicamentoController.searchMedicamento);


export default router;