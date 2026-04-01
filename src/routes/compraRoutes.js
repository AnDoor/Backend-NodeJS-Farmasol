import express from "express";
import * as compraController from "../controllers/compraControllers.js";

const router = express.Router();

router.get("/compra", compraController.getCompras);
router.post("/compra", compraController.createCompra);
router.put("/compra/:id", compraController.updateCompra);
router.delete("/compra/:id", compraController.deleteCompra);
router.get("/compra/search", compraController.searchCompra);

export default router;
