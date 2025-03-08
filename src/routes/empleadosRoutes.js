import express from 'express';

import * as empleadoController from '../controllers/empleadosController.js';

const router = express.Router();


router.get('/empleado',empleadoController.getEmpleado);
router.post('/empleado',empleadoController.createEmpleado);
router.put('/empleado/:id',empleadoController.updateEmpleado);
router.delete('/empleado/:id',empleadoController.deleteEmpleado);
router.get('/empleado/search', empleadoController.searchEmpleado);
export default router;