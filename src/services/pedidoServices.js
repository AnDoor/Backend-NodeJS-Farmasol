import { query } from "../database.js";

export const getPedidos = async () => {
  const { rows } = await query("SELECT * FROM pedido");
  return rows;
};

export const createPedido = async (pedidoData) => {
  const { fecha, estado, empleado_id } = pedidoData;
  const text =
    "INSERT INTO pedido (fecha, estado, empleado_id) VALUES ($1, $2, $3) RETURNING *";
  const { rows } = await query(text, [fecha, estado, empleado_id]);
  return rows[0];
};

export const updatePedido = async (pedidoData, id) => {
  const { fecha, estado, empleado_id } = pedidoData;
  const text =
    "UPDATE pedido SET fecha = $1, estado = $2, empleado_id = $3 WHERE id = $4 RETURNING *";
  const { rows } = await query(text, [fecha, estado, empleado_id, id]);
  return rows[0];
};

export const deletePedido = async (id) => {
  const { rowCount } = await query("DELETE FROM pedido WHERE id = $1", [id]);
  return rowCount > 0;
};

export const searchPedido = async (searchTerm) => {
  // Se busca por el campo "estado"
  const { rows } = await query("SELECT * FROM pedido WHERE estado ILIKE $1", [
    `%${searchTerm}%`,
  ]);
  return rows;
};
