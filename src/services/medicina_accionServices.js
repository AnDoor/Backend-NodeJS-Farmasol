import { query } from "../database.js";

// Crear una relación medicamento-monodroga
export const createMedicinaAccion = async (medicamentoId, accionId) => {
    const text = 'INSERT INTO medicamento_accion (medicamento, accionterapeutica) VALUES ($1, $2) RETURNING *';
    const { rows } = await query(text, [medicamentoId, accionId]); // Orden corregido
    return rows[0];
};

// Obtener todas las relaciones medicamento-monodroga
export const getMedicinaAccion  = async () => {
    const { rows } = await query('SELECT * FROM medicamento_accion');
    return rows;
};

// Obtener una relación medicamento-monodroga por ID
export const getMedicinaAccionById = async (id) => {
    const { rows } = await query('SELECT * FROM medicamento_accion WHERE id = $1', [id]);
    return rows[0];
};

// Actualizar una relación medicamento-monodroga
export const updateMedicinaAccion = async (id, medicamentoId, accionId) => {
    const text = `
        UPDATE medicamento_accion 
        SET medicamento = $1, accionterapeutica = $2 
        WHERE id = $3 
        RETURNING *
    `;

    // Ejecuta la consulta con los parámetros correctos
    const { rows } = await query(text, [medicamentoId, accionId, id]);

    // Retorna el primer registro actualizado
    return rows[0];
};

// Eliminar una relación medicamento-monodroga
export const deleteMedicinaAccion  = async (id) => {
    const { rows } = await query('DELETE FROM medicamento_accion WHERE id = $1 RETURNING *', [id]);
    return rows[0];
};