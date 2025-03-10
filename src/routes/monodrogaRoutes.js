import * as monodrogaController from '../controllers/monodorgaControllers.js';

import express from 'express';

const router = express.Router()

router.get('/monodroga',monodrogaController.getMonodroga);
router.post('/monodroga', monodrogaController.createMonodroga);
router.put('/monodroga/:id',monodrogaController.updateMonodroga);
router.delete('/monodroga/:id',monodrogaController.deleteMonodroga);
router.get('/monodroga/search',monodrogaController.searchMonodroga);



export default router;
