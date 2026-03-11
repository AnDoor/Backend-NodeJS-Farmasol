import { query } from "../database.js";

//query para obtener el registro de TODAS las cuenta por pagar 
export const getCuentasPagar = async () => {
  const { rows } = await query("SELECT * FROM cuentas_pagar");
  return rows;
};

//query para crear una nueva cuenta por pagar 
export const createCuentasPagar = async (data) => {
  const { pedido, sucursal, fecha_vencimiento } = data;
  const text =
    "INSERT INTO cuentas_pagar (pedido, sucursal, fecha_vencimiento) VALUES ($1, $2, $3) RETURNING *";
  const { rows } = await query(text, [
    pedido,
    sucursal,
    fecha_vencimiento,
  ]);
  return rows[0];
};
//query para actualizar cuenta por pagar 
export const updateCuentasPagar = async (data, id) => {
  const { pedido, sucursal, fecha_vencimiento } = data;
  const text =
    "UPDATE cuentas_pagar SET pedido = $1, sucursal = $2, fecha_vencimiento = $3 WHERE id = $4 RETURNING *";
  const { rows } = await query(text, [
    pedido,
    sucursal,
    fecha_vencimiento,
    id,
  ]);
  return rows[0];
};


//se eliminar  por id de la cuenta por pagar
export const deleteCuentasPagar = async (id) => {
  const { rowCount } = await query("DELETE FROM cuentas_pagar WHERE id = $1", [
    id,
  ]);
  return rowCount > 0;
};

//se busca por sucursal las cuentas por pagar
export const searchCuentasPagar = async (searchTerm) => {
    const { rows } = await query(
        "SELECT * FROM cuentas_pagar WHERE CAST(sucursal AS TEXT) ILIKE $1",
        [`%${searchTerm}%`]
    );
    return rows;
};