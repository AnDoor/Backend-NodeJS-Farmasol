import { query } from "../database.js";

export const getCiudad = async() =>{
    const {rows} = await query('SELECT * FROM ciudad');
    return rows;
    
}

export const createCiudad = async(ciudadData) =>{
    const {nombre,direccion,calle} = ciudadData;
    const text = 'INSERT INTO ciudad (nombre,direccion,calle) VALUES ($1,$2,$3) RETURNING *'

    const {rows} = await query(text,[nombre,direccion,calle]);
    return rows[0];
    
}


export const updateCiudad = async(ciudadData,idCiudad) =>{
    const {nombre,direccion,calle} = ciudadData;
    const text = 'UPDATE ciudad SET nombre = $1,direccion= $2,calle= $3 WHERE idciudad = $4 RETURNING *'

    const {rows} = await query(text,[nombre,direccion,calle,idCiudad]);
    return rows[0];
    
}

export const deleteCiudad = async(idCiudad) =>{
    const{rowCount} = await query('DELETE FROM ciudad WHERE idciudad = $1',[idCiudad]);
    return rowCount > 0;

    
}

export const buscarCiudad = async (searchTerm) => {
    // Busca solo por nombre
    const { rows } = await query(
        'SELECT * FROM ciudad WHERE nombre ILIKE $1 OR calle ILIKE  $1',
        [`%${searchTerm}%`]
    );
    return rows;
};
