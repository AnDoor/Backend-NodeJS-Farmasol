import express from "express";
import * as pedidoController from "../controllers/pedidoController.js";

const router = express.Router();

router.get("/pedido", pedidoController.getPedidos);
router.post("/pedido", pedidoController.createPedido);
router.put("/pedido/:id", pedidoController.updatePedido);
router.delete("/pedido/:id", pedidoController.deletePedido);
router.get("/pedido/search", pedidoController.searchPedido);

export default router;