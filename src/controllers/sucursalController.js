import * as sucursalServices from "../services/sucursalServices.js";
export const getSucursal = async (req, res) => {
  try {
    const sucursal = await sucursalServices.getSucursal();
    res.status(200).json(sucursal);
  } catch (err) {
    console.error("ERROR getPedidos: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const createSucursal = async (req, res) => {
  try {
    const sucursalData = req.body;
    const newSucursal = await sucursalServices.createSucursal(sucursalData);
    res.status(200).json(newSucursal);
  } catch (err) {
    console.error("ERROR create Sucursal: ", err);
    res.status(500).json({ message: "Internal server ERROR" });
  }
};

export const updateSucursal = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Convierte el ID a entero
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID de sucursal inválido" }); // Mensaje actualizado
        }

        const sucursalData = req.body;

        const updatedSucursal = await sucursalServices.updateSucursal(sucursalData, id);

        if (!updatedSucursal) {
            return res.status(404).json({ message: "Sucursal no encontrada" }); // Mensaje actualizado
        }

        res.status(200).json(updatedSucursal);
    } catch (err) {
        console.error("ERROR updateSucursal: ", err); // Mensaje actualizado
        console.error("Stack trace:", err.stack);
        res.status(500).json({ message: "Internal server ERROR" });
    }
};

export const deleteSucursal = async (req, res) => {
    try {
      const id = parseInt(req.params.id); // Convierte el ID a entero
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID de sucursal inválido" });
      }
  
      const deleted = await sucursalServices.deleteSucursal(id); // Llama a la función correcta del servicio
  
      if (!deleted) {
        return res.status(404).json({ message: "Sucursal no encontrada" }); // Mensaje corregido
      }
  
      res.status(200).send(); // o res.status(204).send(); para "No Content"
  
    } catch (err) {
      console.error("ERROR deleteSucursal: ", err); // Nombre del error corregido
      res.status(500).json({ message: "Internal server ERROR" });
    }
  };

  

  export const searchSucursal = async (req, res) => {
    try {
      const searchTerm = req.query.term;
  
      if (!searchTerm) {
        return res.status(400).json({ message: "El término de búsqueda es requerido." });
      }
  
      const sucursales = await sucursalServices.searchSucursal(searchTerm);
  
      if (sucursales.length === 0) {
        return res.status(404).json({ message: "No se encontraron sucursales." });
      }
  
      res.status(200).json(sucursales);
    } catch (err) {
      console.error("ERROR searchSucursal: ", err);
      res.status(500).json({ message: "Error interno del servidor." });
    }
  };