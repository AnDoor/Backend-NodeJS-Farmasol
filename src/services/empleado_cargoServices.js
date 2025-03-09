import { query } from "../database.js";

// Crear una relación empleado-cargo
export const createEmpleadoCargo = async (empleadoId, cargoId) => {
    const text = 'INSERT INTO empleado_cargo (empleado, cargo) VALUES ($1, $2) RETURNING *';
    const { rows } = await query(text, [empleadoId, cargoId]);
    return rows[0];
};

// Obtener todas las relaciones empleado-cargo
export const getEmpleadosCargos = async () => {
    const { rows } = await query('SELECT * FROM empleado_cargo');
    return rows;
};

// Obtener una relación empleado-cargo por ID
export const getEmpleadoCargoById = async (id) => {
    const { rows } = await query('SELECT * FROM empleado_cargo WHERE id = $1', [id]);
    return rows[0];
};

// Actualizar una relación empleado-cargo
export const updateEmpleadoCargo = async (id, empleadoId, cargoId) => {
    const text = 'UPDATE empleado_cargo SET empleado = $1, cargo = $2 WHERE id = $3 RETURNING *';
    const { rows } = await query(text, [empleadoId, cargoId, id]);
    return rows[0];
};

// Eliminar una relación empleado-cargo
export const deleteEmpleadoCargo = async (id) => {
    const { rows } = await query('DELETE FROM empleado_cargo WHERE id = $1 RETURNING *', [id]);
    return rows[0];
};