import { query } from "../database.js";

// Crear una relación medicamento-monodroga
export const createMedicinaMono = async (medicamentoId, monodrogaId) => {
    const text = 'INSERT INTO medicamento_mono (medicamento, monodroga) VALUES ($1, $2) RETURNING *';
    const { rows } = await query(text, [medicamentoId, monodrogaId]); // Orden corregido
    return rows[0];
};

// Obtener todas las relaciones medicamento-monodroga
export const getMedicinaMono = async () => {
    const { rows } = await query('SELECT * FROM medicamento_mono');
    return rows;
};

// Obtener una relación medicamento-monodroga por ID
export const getMedicinaMonoById = async (id) => {
    const { rows } = await query('SELECT * FROM medicamento_mono WHERE id = $1', [id]);
    return rows[0];
};

// Actualizar una relación medicamento-monodroga
export const updateMedicinaMono = async (id, medicamentoId, monodrogaId) => {
    const text = 'UPDATE medicamento_mono SET medicamento = $1, monodroga = $2 WHERE id = $3 RETURNING *';
    const { rows } = await query(text, [medicamentoId, monodrogaId, id]);
    return rows[0];
};

// Eliminar una relación medicamento-monodroga
export const deleteMedicinaMono = async (id) => {
    const { rows } = await query('DELETE FROM medicamento_mono WHERE id = $1 RETURNING *', [id]);
    return rows[0];
};