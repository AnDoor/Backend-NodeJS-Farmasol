import { query } from "../database.js";

export const getLaboratorio = async() =>{
    const {rows} = await query('SELECT * FROM laboratorio');
    return rows;
    
}

export const createLaboratorio = async(LaboratorioData) =>{
    const {rif,nombre,direccion,telefono,email} = LaboratorioData;
    const text = 'INSERT INTO laboratorio (rif,nombre,direccion,telefono,email) VALUES ($1,$2,$3,$4,$5) RETURNING *'

    const {rows} = await query(text,[rif,nombre,direccion,telefono,email]);
    return rows[0];
    
}


export const updateLaboratorio = async(LaboratorioData,idLaboratorio) =>{
    try{
        const {rif,nombre,direccion,telefono,email} = LaboratorioData;
        const text = 'UPDATE laboratorio SET rif = $1, nombre = $2, direccion = $3, telefono = $4, email = $5 WHERE rif = $6 RETURNING *';
      
        const { rows } = await query(text, [rif,nombre, direccion,telefono, email, idLaboratorio]);
        return rows[0];
    }catch(error)
    {
        console.error('Error al actualizar laboratorio:', error);
        throw error;
    }
    
    
}

export const deleteLaboratorio = async(idLaboratorio) =>{
    const{rowCount} = await query('DELETE FROM laboratorio WHERE rif = $1 OR nombre =$1',[idLaboratorio]);
    return rowCount > 0;
}

export const buscarLaboratorio = async (searchTerm) => {
    
    const { rows } = await query(
        'SELECT * FROM laboratorio WHERE rif ILIKE $1 OR nombre ILIKE $1 OR direccion ILIKE $1',
            [`%${searchTerm}%`]
    );
    return rows;
};