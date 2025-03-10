import { query } from "../database.js";

export const getSucursal = async () => {
  const { rows } = await query("SELECT * FROM sucursal");
  return rows;
};

export const createSucursal = async (SucursalData) => {
  const { ciudad} = SucursalData;
  const text =
    "INSERT INTO sucursal (ciudad) VALUES ($1) RETURNING *";
  const { rows } = await query(text, [ciudad]);
  return rows[0];
};

export const updateSucursal = async (sucursalData, id) => {
    const { ciudad } = sucursalData;
    const text = "UPDATE sucursal SET ciudad = $1 WHERE idsucursal = $2 RETURNING *";
    const { rows } = await query(text, [ciudad, id]);
    return rows[0];
};

export const deleteSucursal = async (id) => {
    const { rowCount } = await query("DELETE FROM sucursal WHERE idsucursal = $1", [id]);
    return rowCount > 0;
  };

  export const searchSucursal = async (searchTerm) => {
    try {
      // Intenta buscar por idsucursal o ciudad (asumiendo que ambos son numéricos)
      if (!isNaN(searchTerm)) {
        const { rows } = await query(
          "SELECT * FROM sucursal WHERE idsucursal = $1 OR ciudad = $1",
          [searchTerm]
        );
        return rows;
      } else {
        return []; // Si searchTerm no es un número, no hay resultados.
      }
    } catch (error) {
      console.error("Error searching sucursal:", error);
      return []; // O lanza el error, dependiendo de cómo quieras manejarlo
    }
  };