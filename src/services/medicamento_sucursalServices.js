import { query } from "../database.js";

// Crear una relación medicamento-sucursal
export const createMedicamentoSucursal = async (sucursalId, medicamentoId, stock) => {
    const text = 'INSERT INTO medicamentostocks (sucursal, medicamento, stock) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await query(text, [sucursalId, medicamentoId, stock]); // Añadido stock
    return rows[0];
};

// Obtener todas las relaciones medicamento-sucursal
export const getMedicamentoSucursal = async () => {
    const { rows } = await query('SELECT * FROM medicamentostocks');
    return rows;
};

// Obtener una relación medicamento-sucursal por ID
export const getMedicamentoSucursalById = async (id) => {
    const { rows } = await query('SELECT * FROM medicamentostocks WHERE code = $1', [id]);
    return rows[0];
};

// Actualizar una relación medicamento-sucursal
export const updateMedicamentoSucursal = async (id, sucursalId, medicamentoId, stock) => {
    const text = 'UPDATE medicamentostocks SET sucursal = $1, medicamento = $2, stock = $3 WHERE code = $4 RETURNING *';
    const { rows } = await query(text, [sucursalId, medicamentoId, stock, id]); // Añadido stock y id
    return rows[0];
};

// Eliminar una relación medicamento-sucursal
export const deleteMedicamentoSucursal = async (id) => {
    const { rows } = await query('DELETE FROM medicamentostocks WHERE code= $1 RETURNING *', [id]);
    return rows[0];
};

