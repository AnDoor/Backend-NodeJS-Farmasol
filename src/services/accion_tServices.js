import { query } from "../database.js";

export const getAccionTerapeutica = async() =>{
    const {rows} = await query('SELECT * FROM accion_t');
    return rows;
    
}

export const createAccionTerapeutica = async(AccionTerapeuticaData) =>{
    const {nombre,descripcion} = AccionTerapeuticaData;
    const text = 'INSERT INTO accion_t (nombre,descripcion) VALUES ($1,$2) RETURNING *'

    const {rows} = await query(text,[nombre,descripcion]);
    return rows[0];
    
}


export const updateAccionTerapeutica = async(AccionTerapeuticaData,idAccionTerapeuticaData) =>{
    try{
        const {nombre,descripcion} = AccionTerapeuticaData;
        const text = 'UPDATE accion_t SET  nombre = $1, descripcion = $2 WHERE nombre = $3 RETURNING *';
      
        const { rows } = await query(text, [nombre,descripcion, idAccionTerapeuticaData]);
        return rows[0];
    }catch(error)
    {
        console.error('Error al actualizar Accion Terapeutica:', error);
        throw error;
    }
    
    
}

export const deleteAccionTerapeutica = async(idLaboratorio) =>{
    const{rowCount} = await query('DELETE FROM accion_t WHERE CAST(id AS TEXT) = $1 OR nombre =$1',[idLaboratorio]);
    return rowCount > 0;
}

export const buscarAccionTerapeutica = async (searchTerm) => {
    
    const { rows } = await query(
        'SELECT * FROM accion_t WHERE nombre ILIKE $1',
            [`%${searchTerm}%`]
    );
    return rows;
};