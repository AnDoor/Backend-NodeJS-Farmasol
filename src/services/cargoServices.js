import { query } from "../database.js";

export const getCargo = async() =>{
    const {rows} = await query('SELECT * FROM cargo');
    return rows;
    
}

export const createCargo = async(cargoData) =>{
    const {nombre,descripcion} = cargoData;
    const text = 'INSERT INTO cargo (nombre,descripcion) VALUES ($1,$2) RETURNING *'

    const {rows} = await query(text,[nombre,descripcion]);
    return rows[0];
    
}


export const updateCargo = async(cargoData,idcargo) =>{
    const {nombre,descripcion} = cargoData;
    const text = 
    'UPDATE cargo SET nombre = $1,descripcion = $2, WHERE idcargo = $3 RETURNING *';

    const {rows} = await query(text,[nombre,descripcion,idcargo]);
    return rows[0];
    
}

export const deleteCargo = async(idcargo) =>{
    const{rowCount} = await query('DELETE FROM cargo WHERE idcargo = $1',[idcargo]);
    return rowCount > 0;

    
}

// export const buscarCargo= async (searchTerm) => {
//     // Busca solo por nombre
//     const { rows } = await query(
//         'SELECT * FROM cargo WHERE nombre ILIKE $1',
//         [`%${searchTerm}%`]
//     );
//     return rows;
// };

export const buscarCargo = async (searchTerm) => {
    try {
        const { rows } = await query(
            'SELECT * FROM cargo WHERE nombre LIKE $1 ',[`%${searchTerm}%`]);
        return rows;
    } catch (err) {
        console.error('ERROR en buscar cargo:', err);
        throw err; 
    }
};