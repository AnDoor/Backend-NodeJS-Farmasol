import express from 'express';
import * as medicinaAccionController from '../controllers/medicina_accionController.js';

const router = express.Router();

// Rutas para medicina_accion
router.post('/medicina_accion', medicinaAccionController.createMedicinaAccion); // Crear
router.get('/medicina_accion', medicinaAccionController.getMedicinaAccion); // Obtener todos
router.get('/medicina_accion/:id', medicinaAccionController.getMedicinaAccionById); // Obtener por ID
router.put('/medicina_accion/:id', medicinaAccionController.updateMedicinaAccion); // Actualizar
router.delete('/medicina_accion/:id', medicinaAccionController.deleteMedicinaAccion); // Eliminar

export default router;