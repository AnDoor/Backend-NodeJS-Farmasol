import * as compraServices from "../services/compraServices.js";

export const getCompras = async (req, res) => {
  try {
    const compras = await compraServices.getCompras();
    res.status(200).json(compras);
  } catch (err) {
    console.error("ERROR getCompras: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const createCompra = async (req, res) => {
  try {
    const data = req.body;
    const newCompra = await compraServices.createCompra(data);
    res.status(200).json(newCompra);
  } catch (err) {
    console.error("ERROR createCompra: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const updateCompra = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedCompra = await compraServices.updateCompra(data, id);
    if (!updatedCompra) {
      return res.status(404).json({ message: "Compra no encontrada" });
    }
    res.status(200).json(updatedCompra);
  } catch (err) {
    console.error("ERROR updateCompra: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const deleteCompra = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await compraServices.deleteCompra(id);
    if (!deleted) {
      return res.status(404).json({ message: "Compra no encontrada" });
    }
    res.status(200).send();
  } catch (err) {
    console.error("ERROR deleteCompra: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const searchCompra = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const compras = await compraServices.searchCompra(searchTerm);
    if (compras.length === 0) {
      return res.status(404).json({ message: "No se encontraron compras" });
    }
    res.status(200).json(compras);
  } catch (err) {
    console.error("ERROR searchCompra: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};
