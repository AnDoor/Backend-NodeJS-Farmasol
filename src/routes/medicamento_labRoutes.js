import express from 'express';
import * as medicinaLaboratorio from '../controllers/medicamento_labController.js';

const router = express.Router();

// Rutas para medicamento_stock
router.post('/medicamento_lab', medicinaLaboratorio.createMedicamentoLab); // Crear
router.get('/medicamento_lab', medicinaLaboratorio.getMedicamentoLab); // Obtener todos
router.get('/medicamento_lab/:id', medicinaLaboratorio.getMedicamentoLabById); // Obtener por ID
router.put('/medicamento_lab/:id', medicinaLaboratorio.updateMedicamentoLab); // Actualizar
router.delete('/medicamento_lab/:id', medicinaLaboratorio.deleteMedicamentoLab); // Eliminar


export default router;