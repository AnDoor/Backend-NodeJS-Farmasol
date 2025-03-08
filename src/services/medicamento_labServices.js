import { query } from "../database.js";

// Crear una relación medicamento-laboratorio
export const createMedicamentoLab = async (sucursalId, medicamentoId, stock) => {
    const text = 'INSERT INTO laboratorio_medicamento (medicamento, laboratorio, stock) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await query(text, [sucursalId, medicamentoId, stock]); // Añadido stock
    return rows[0];
};

// Obtener todas las relaciones medicamento-laboratorio
export const getMedicamentoLab = async () => {
    const { rows } = await query('SELECT * FROM laboratorio_medicamento');
    return rows;
};

// Obtener una relación medicamento-laboratorio por ID
export const getMedicamentoLabById = async (id) => {
    const { rows } = await query('SELECT * FROM laboratorio_medicamento WHERE id = $1', [id]);
    return rows[0];
};

// Actualizar una relación medicamento-laboratorio
export const updateMedicamentoLab = async (id, sucursalId, medicamentoId, stock) => {
    const text = 'UPDATE laboratorio_medicamento SET medicamento = $1, laboratorio = $2, stock = $3 WHERE id = $4 RETURNING *';
    const { rows } = await query(text, [sucursalId, medicamentoId, stock, id]); 
    return rows[0];
};

// Eliminar una relación medicamento-laboratorio
export const deleteMedicamentoLab = async (id) => {
    const { rows } = await query('DELETE FROM laboratorio_medicamento WHERE id= $1 RETURNING *', [id]);
    return rows[0];
};
