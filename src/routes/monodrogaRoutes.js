import * as monodrogaController from '../controllers/monodorgaControllers.js';

import express from 'express';

const router = express.Router()

router.get('/monodroga',monodrogaController.getMonodroga);
router.post('/monodroga', monodrogaController.createMonodroga);
router.put('/monodroga/:id',monodrogaController.updateMonodroga);
router.delete('/monodroga/:id',monodrogaController.deleteMonodroga);
router.get('/monodroga/search',monodrogaController.searchMonodroga);


// router.get('/medicamento',medicamentoController.getMedicamento);
// router.post('/medicamento',medicamentoController.createMedicamento);
// router.put('/medicamento/:id',medicamentoController.updateMedicamento);
// router.delete('/medicamento/:id',medicamentoController.deleteMedicamento);
// router.get('/medicamento/search',medicamentoController.searchMedicamento);

export default router;
