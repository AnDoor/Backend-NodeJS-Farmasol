import { query } from "../database.js";

export const getEmpleado = async() =>{
    const {rows} = await query('SELECT * FROM empleado');
    return rows;
}

export const createEmpleado = async (empleadoData) => {
    const { idempleado, nombre, apellido, telefono, direccion, email } = empleadoData;

    
    const text = `
        INSERT INTO empleado (idempleado, nombre, apellido, telefono, direccion, email)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `;

    const { rows } = await query(text, [idempleado, nombre, apellido, telefono, direccion, email]);

    // Retorna el primer registro insertado
    return rows[0];
};


export const updateEmpleado = async (idEmpleadoActual, empleadoData) => {
    const { nombre, apellido, telefono, direccion, email } = empleadoData;

    // Consulta SQL corregida
    const text = `
        UPDATE empleado 
        SET nombre = $1, apellido = $2, telefono = $3, direccion = $4, email = $5
        WHERE idempleado = $6
        RETURNING *
    `;

    // Ejecuta la consulta con los parámetros en el orden correcto
    const { rows } = await query(text, [nombre, apellido, telefono, direccion, email, idEmpleadoActual]);

    // Retorna el primer registro actualizado
    return rows[0];
};

export const deleteEmpleado = async(idempleado) =>{
    const{rowCount} = await query('DELETE FROM empleado WHERE idempleado = $1',[idempleado]);
    return rowCount > 0;

    
}

export const buscarEmpleado = async (searchTerm) => {
    try {
        const { rows } = await query(
            'SELECT * FROM empleado WHERE idempleado::text LIKE $1 OR nombre LIKE $1 OR apellido LIKE $1',
            [`%${searchTerm}%`]
        );
        return rows;
    } catch (err) {
        console.error('ERROR en buscarEmpleado:', err);
        throw err; // Propaga el error para que sea manejado por el controlador
    }
};