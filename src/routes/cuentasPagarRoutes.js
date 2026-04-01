import express from "express";
import * as cuentasPagarController from "../controllers/cuentasPagarControllers.js";

const router = express.Router();

router.get("/cuentas-pagar", cuentasPagarController.getCuentasPagar);
router.post("/cuentas-pagar", cuentasPagarController.createCuentasPagar);
router.put("/cuentas-pagar/:id", cuentasPagarController.updateCuentasPagar);
router.delete("/cuentas-pagar/:id", cuentasPagarController.deleteCuentasPagar);
router.get("/cuentas-pagar/search", cuentasPagarController.searchCuentasPagar);

export default router;
