import { query } from "../database.js";

export const getCompras = async () => {
  const { rows } = await query("SELECT * FROM compra");
  return rows;
};

export const createCompra = async (data) => {
    const { pedido, fecha, formapago } = data;
    const text = "INSERT INTO compra (pedido, fecha, formapago) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await query(text, [pedido, fecha, formapago]);
    return rows[0];
};

export const updateCompra = async (data, id) => {
    const { pedido, fecha, formapago } = data; 
    const text =
        "UPDATE compra SET pedido = $1, fecha = $2, formapago = $3 WHERE id = $4 RETURNING *";
    const { rows } = await query(text, [pedido, fecha, formapago, id]);
    return rows[0];
};

export const deleteCompra = async (id) => {
  const { rowCount } = await query("DELETE FROM compra WHERE id = $1", [id]);
  return rowCount > 0;
};


export const buscarCompra= async (searchTerm) => {
    // Busca solo por forma pago o pedido
    const { rows } = await query(
        'SELECT * FROM compra WHERE formapago ILIKE $1 OR CAST(pedido AS TEXT) ILIKE $1',
        [`%${searchTerm}%`]
    );
    return rows;
};