import * as pedidoServices from "../services/pedidoServices.js";

export const getPedidos = async (req, res) => {
  try {
    const pedidos = await pedidoServices.getPedidos();
    res.status(200).json(pedidos);
  } catch (err) {
    console.error("ERROR getPedidos: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const createPedido = async (req, res) => {
  try {
    const pedidoData = req.body;
    const newPedido = await pedidoServices.createPedido(pedidoData);
    res.status(200).json(newPedido);
  } catch (err) {
    console.error("ERROR createPedido: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const updatePedido = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Convierte el ID a entero
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const pedidoData = req.body;

        const updatedPedido = await pedidoServices.updatePedido(pedidoData, id);

        if (!updatedPedido) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }

        res.status(200).json(updatedPedido);
    } catch (err) {
        console.error("ERROR updatePedido: ", err);
        console.error("Stack trace:", err.stack); // Agrega el stack trace
        res.status(500).json({ message: "Internal server ERROR" });
    }
};

export const deletePedido = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await pedidoServices.deletePedido(id);
    if (!deleted) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.status(200).send();
  } catch (err) {
    console.error("ERROR deletePedido: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const searchPedido = async (req, res) => {
  try {
    const searchTerm = req.query.term; // Término de búsqueda
    const pedidos = await pedidoServices.searchPedido(searchTerm);
    if (pedidos.length === 0) {
      return res.status(404).json({ message: "No se encontraron pedidos" });
    }
    res.status(200).json(pedidos);
  } catch (err) {
    console.error("ERROR searchPedido: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};