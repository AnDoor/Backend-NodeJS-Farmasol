import express from "express";
import * as laboratorioController from '../controllers/laboratorioController.js'


const router = express.Router();

router.get('/laboratorio', laboratorioController.getLaboratorio);
router.post('/laboratorio', laboratorioController.createLaboratorio);
router.put('/laboratorio/:id', laboratorioController.updateLaboratorio);
router.delete('/laboratorio/:id', laboratorioController.deleteLaboratorio);
router.get('/laboratorio/search', laboratorioController.searchLaboratorio);


export default router;
