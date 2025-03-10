import express from "express";
import * as sucursalController from "../controllers/sucursalController.js";

const router = express.Router();

router.get("/sucursal", sucursalController.getSucursal);
router.post("/sucursal", sucursalController.createSucursal);
router.put("/sucursal/:id", sucursalController.updateSucursal);
router.delete("/sucursal/:id", sucursalController.deleteSucursal);
router.get("/sucursal/search", sucursalController.searchSucursal);

export default router;