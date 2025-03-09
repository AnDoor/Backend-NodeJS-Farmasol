import { query } from "../database.js";

export const getCompras = async () => {
  const { rows } = await query("SELECT * FROM compra");
  return rows;
};

export const createCompra = async (data) => {
  const { pedido_id, fecha } = data;
  const text =
    "INSERT INTO compra (pedido_id, fecha) VALUES ($1, $2) RETURNING *";
  const { rows } = await query(text, [pedido_id, fecha]);
  return rows[0];
};

export const updateCompra = async (data, id) => {
  const { pedido_id, fecha } = data;
  const text =
    "UPDATE compra SET pedido_id = $1, fecha = $2 WHERE id = $3 RETURNING *";
  const { rows } = await query(text, [pedido_id, fecha, id]);
  return rows[0];
};

export const deleteCompra = async (id) => {
  const { rowCount } = await query("DELETE FROM compra WHERE id = $1", [id]);
  return rowCount > 0;
};

export const searchCompra = async (searchTerm) => {
  // Se busca por pedido_id convirtiéndolo a texto
  const { rows } = await query(
    "SELECT * FROM compra WHERE CAST(pedido_id AS TEXT) ILIKE $1",
    [`%${searchTerm}%`]
  );
  return rows;
};
