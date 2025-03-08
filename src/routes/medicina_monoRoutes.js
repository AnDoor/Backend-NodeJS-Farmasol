import express from 'express';
import * as medicinaMonoController from '../controllers/medicina_monoController.js';

const router = express.Router();

// Rutas para empleado_cargo
router.post('/medicina_mono', medicinaMonoController.createMedicinaMono); // Crear
router.get('/medicina_mono', medicinaMonoController.getMedicinaMono); // Obtener todos
router.get('/medicina_mono/:id', medicinaMonoController.getMedicinaMonoById); // Obtener por ID
router.put('/medicina_mono/:id', medicinaMonoController.updateMedicinaMono); // Actualizar
router.delete('/medicina_mono/:id', medicinaMonoController.deleteMedicinaMono); // Eliminar

export default router;