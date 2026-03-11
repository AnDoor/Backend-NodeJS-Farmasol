import { query } from "../database.js";

export const getMedicamento = async() =>{
    const {rows} = await query('SELECT * FROM medicamento');
    return rows;
    
}

export const createMedicamento = async(MedicamentoData) =>{
    const {code,nombre,presentacion,precio} = MedicamentoData;
    const text = 'INSERT INTO medicamento (code,nombre,presentacion,precio) VALUES ($1,$2,$3,$4) RETURNING *'

    const {rows} = await query(text,[code,nombre,presentacion,precio]);
    return rows[0];
    
}


export const updateMedicamento = async(MedicamentoData,idMedicamento) =>{
    const {code,nombre,presentacion,precio} = MedicamentoData;
    const text = 'UPDATE medicamento SET code = $1, nombre = $2, presentacion = $3, precio = $4 WHERE code = $5 RETURNING *'; 

    const { rows } = await query(text, [code, nombre, presentacion, precio, idMedicamento]);
    return rows[0];
    
}

export const deleteMedicamento= async(idMedicamento) =>{
    const{rowCount} = await query('DELETE FROM medicamento WHERE code = $1',[idMedicamento]);
    return rowCount > 0;

    
}

export const buscarMedicamento= async (searchTerm) => {
    
    const { rows } = await query(
        'SELECT * FROM medicamento WHERE code ILIKE $1 OR nombre ILIKE $1 OR CAST(precio AS TEXT) ILIKE $1',
            [`%${searchTerm}%`]
    );
    return rows;
};