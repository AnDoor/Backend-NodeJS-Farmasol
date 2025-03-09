import * as cuentasPagarServices from "../services/cuentasPagarServices.js";

export const getCuentasPagar = async (req, res) => {
  try {
    const cuentas = await cuentasPagarServices.getCuentasPagar();
    res.status(200).json(cuentas);
  } catch (err) {
    console.error("ERROR getCuentasPagar: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const createCuentasPagar = async (req, res) => {
  try {
    const data = req.body;
    const newCuenta = await cuentasPagarServices.createCuentasPagar(data);
    res.status(200).json(newCuenta);
  } catch (err) {
    console.error("ERROR createCuentasPagar: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const updateCuentasPagar = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedCuenta = await cuentasPagarServices.updateCuentasPagar(
      data,
      id
    );
    if (!updatedCuenta) {
      return res
        .status(404)
        .json({ message: "Cuenta por pagar no encontrada" });
    }
    res.status(200).json(updatedCuenta);
  } catch (err) {
    console.error("ERROR updateCuentasPagar: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const deleteCuentasPagar = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await cuentasPagarServices.deleteCuentasPagar(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Cuenta por pagar no encontrada" });
    }
    res.status(200).send();
  } catch (err) {
    console.error("ERROR deleteCuentasPagar: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const searchCuentasPagar = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const cuentas = await cuentasPagarServices.searchCuentasPagar(searchTerm);
    if (cuentas.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron cuentas por pagar" });
    }
    res.status(200).json(cuentas);
  } catch (err) {
    console.error("ERROR searchCuentasPagar: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};
