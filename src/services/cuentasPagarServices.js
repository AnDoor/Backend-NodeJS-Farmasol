import { query } from "../database.js";

export const getCuentasPagar = async () => {
  const { rows } = await query("SELECT * FROM cuentas_pagar");
  return rows;
};

export const createCuentasPagar = async (data) => {
  const { pedido_id, sucursal_id, monto, fecha_vencimiento } = data;
  const text =
    "INSERT INTO cuentas_pagar (pedido_id, sucursal_id, monto, fecha_vencimiento) VALUES ($1, $2, $3, $4) RETURNING *";
  const { rows } = await query(text, [
    pedido_id,
    sucursal_id,
    monto,
    fecha_vencimiento,
  ]);
  return rows[0];
};

export const updateCuentasPagar = async (data, id) => {
  const { pedido_id, sucursal_id, monto, fecha_vencimiento } = data;
  const text =
    "UPDATE cuentas_pagar SET pedido_id = $1, sucursal_id = $2, monto = $3, fecha_vencimiento = $4 WHERE id = $5 RETURNING *";
  const { rows } = await query(text, [
    pedido_id,
    sucursal_id,
    monto,
    fecha_vencimiento,
    id,
  ]);
  return rows[0];
};

export const deleteCuentasPagar = async (id) => {
  const { rowCount } = await query("DELETE FROM cuentas_pagar WHERE id = $1", [
    id,
  ]);
  return rowCount > 0;
};

export const searchCuentasPagar = async (searchTerm) => {
  // Se realiza búsqueda convirtiendo a texto los campos pedido_id y sucursal_id
  const { rows } = await query(
    "SELECT * FROM cuentas_pagar WHERE CAST(pedido_id AS TEXT) ILIKE $1 OR CAST(sucursal_id AS TEXT) ILIKE $1",
    [`%${searchTerm}%`]
  );
  return rows;
};
