import * as AccionTerapeuticaServices from "../services/accion_tServices.js";
 
 export const getAccionTerapeutica= async (req,res) =>{
    try{
        const AccionTerapeutica = await AccionTerapeuticaServices.getAccionTerapeutica();
        res.status(200).json(AccionTerapeutica);
    } catch(err)
        {
            console.error('ERROR Accion Terapeutica: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createAccionTerapeutica = async (req,res) =>{
    try{
        const AccionTerapeuticaData = req.body;
        const  newAccionTerapeutica = await AccionTerapeuticaServices.createAccionTerapeutica(AccionTerapeuticaData);

        res.status(200).json(newAccionTerapeutica);
    } catch(err)
        {
            console.error('ERROR adding Laboratorio: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateAccionTerapeutica = async (req,res) =>{
    try{
       const idAccionTerapeutica = req.params.id;
       const AccionTerapeuticaData = req.body;
       const updatedAccionTerapeutica = await AccionTerapeuticaServices.updateAccionTerapeutica(AccionTerapeuticaData,idAccionTerapeutica);

       if(!updatedAccionTerapeutica){
        return res.status(404).json({message: 'Accion Terapeutica no encontrada'})
       }
       res.status(200).json(updatedAccionTerapeutica);

    } catch(error)
        {
            console.error('ERROR actualizando Accion Terapeutica: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteAccionTerapeutica = async (req,res) =>{
    try{
        const idAccionTerapeutica = req.params.id;
        const deleted = await AccionTerapeuticaServices.deleteAccionTerapeutica(idAccionTerapeutica);

        if (!deleted){
            return res.status(404).json({message: 'Accion Terapeutica  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando Accion Terapeutica: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchAccionTerapeutica = async (req, res) => {
    try {
        const searchTerm = req.query.term; // Obtén el término de búsqueda desde la query string
        const AccionesTerapeutica = await AccionTerapeuticaServices.buscarAccionTerapeutica(searchTerm); 

        if (AccionesTerapeutica.length === 0) {
            return res.status(404).json({ message: 'No se encontraron Acciones Terapeutica' });
        }

      
        res.status(200).json(AccionesTerapeutica);
    } catch (error) {
        console.error('Error al buscar Acciones Terapeutica:', error.stack || error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};