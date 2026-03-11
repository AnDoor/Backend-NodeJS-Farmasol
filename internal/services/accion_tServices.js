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
        const text = 'UPDATE accion_t SET  nombre = $1, descripcion = $2 WHERE id = $3 RETURNING *';
      
        const { rows } = await query(text, [nombre,descripcion, idAccionTerapeuticaData]);
        return rows[0];
    }catch(error)
    {
        console.error('Error al actualizar Accion Terapeutica:', error);
        throw error;
    }
    
    
}
export const deleteAccionTerapeutica = async (idAccionTerapeutica) => {
    try {
      const { rowCount } = await query('DELETE FROM accion_t WHERE id = $1', [idAccionTerapeutica]);
      return rowCount > 0;
    } catch (error) {
      console.error('Error al eliminar Accion Terapeutica:', error);
      throw error; // Lanzar el error para que el controlador lo maneje
    }
};


export const buscarAccionTerapeutica = async (searchTerm) => {
    try {
      const { rows } = await query(
        'SELECT * FROM accion_t WHERE nombre ILIKE $1 OR CAST(id AS TEXT) = $2',
        [`%${searchTerm}%`, searchTerm]
      );
      return rows;
    } catch (error) {
      console.error('Error searching therapeutic actions:', error);
      return []; 
    }
  };