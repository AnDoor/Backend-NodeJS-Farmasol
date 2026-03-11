import express from 'express';
import * as medicinaSucursal from '../controllers/medicamento_sucursalController.js';

const router = express.Router();

// Rutas para medicamento_stock
router.post('/medicamento_stock', medicinaSucursal.createMedicamentoSucursal); // Crear
router.get('/medicamento_stock', medicinaSucursal.getMedicamentoSucursal); // Obtener todos
router.get('/medicamento_stock/:id', medicinaSucursal.getMedicamentoSucursalById); // Obtener por ID
router.put('/medicamento_stock/:id', medicinaSucursal.updateMedicamentoSucursal); // Actualizar
router.delete('/medicamento_stock/:id', medicinaSucursal.deleteMedicamentoSucursal); // Eliminar


export default router;