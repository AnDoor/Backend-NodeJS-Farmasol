import { query } from "../database.js";

export const getMonodroga = async() =>{
    const {rows} = await query('SELECT * FROM monodroga');
    return rows;
    
}

export const createMonodroga = async(MonodrogaData) =>{
    const {nombre,descripcion} = MonodrogaData;
    const text = 'INSERT INTO monodroga (nombre,descripcion) VALUES ($1,$2) RETURNING *'

    const {rows} = await query(text,[nombre,descripcion]);
    return rows[0];
    
}


export const updateMonodroga = async(MonodrogaData,idMonodroga) =>{
    const {nombre,descripcion} = MonodrogaData;
    const text = 
    'UPDATE monodroga SET nombre = $1, descripcion = $2 WHERE code = $3 RETURNING *'; 
  
    const { rows } = await query(text, [nombre, descripcion,  idMonodroga]);
    return rows[0];
    
}

export const deleteMonodroga = async(idMonodroga) =>{
    const{rowCount} = await query('DELETE FROM monodroga WHERE code = $1',[idMonodroga]);
    return rowCount > 0;
}

export const buscarMonodroga = async (searchTerm) => {
    
    const { rows } = await query(
        'SELECT * FROM monodroga WHERE CAST(code AS TEXT) ILIKE $1 OR nombre ILIKE $1',
            [`%${searchTerm}%`]
    );
    return rows;
};