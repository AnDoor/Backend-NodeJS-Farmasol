import express from 'express';
import * as empleadoCargoController from '../controllers/empleado_cargoControllers.js';

const router = express.Router();

// Rutas para empleado_cargo
router.post('/empleado_cargo', empleadoCargoController.createEmpleadoCargo); // Crear
router.get('/empleado_cargo', empleadoCargoController.getEmpleadosCargos); // Obtener todos
router.get('/empleado_cargo/:id', empleadoCargoController.getEmpleadoCargoById); // Obtener por ID
router.put('/empleado_cargo/:id', empleadoCargoController.updateEmpleadoCargo); // Actualizar
router.delete('/empleado_cargo/:id', empleadoCargoController.deleteEmpleadoCargo); // Eliminar

export default router;