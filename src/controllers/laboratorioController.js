import * as laboratorioServices from "../services/laboratorioServices.js";
 
 export const getLaboratorio = async (req,res) =>{
    try{
        const laboratorio = await laboratorioServices.getLaboratorio();
        res.status(200).json(laboratorio);
    } catch(err)
        {
            console.error('ERROR ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createLaboratorio = async (req,res) =>{
    try{
        const laboratorioData = req.body;
        const  newLaboratorio = await laboratorioServices.createLaboratorio(laboratorioData);

        res.status(200).json(newLaboratorio);
    } catch(err)
        {
            console.error('ERROR adding Laboratorio: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateLaboratorio = async (req,res) =>{
    try{
       const idLaboratorio = req.params.id;
       const laboratorioData = req.body;
       const updatedLaboratorio = await laboratorioServices.updateLaboratorio(laboratorioData,idLaboratorio);

       if(!updatedLaboratorio){
        return res.status(404).json({message: 'Laboratorio no encontrada'})
       }
       res.status(200).json(updatedLaboratorio);

    } catch(error)
        {
            console.error('ERROR actualizando laboratorio: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteLaboratorio = async (req,res) =>{
    try{
        const idLaboratorio = req.params.id;
        const deleted = await laboratorioServices.deleteLaboratorio(idLaboratorio);

        if (!deleted){
            return res.status(404).json({message: 'laboratorio  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando laboratorio: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchLaboratorio = async (req, res) => {
    try {
        const searchTerm = req.query.term; // Obtén el término de búsqueda desde la query string
        const laboratorios = await laboratorioServices.buscarLaboratorio(searchTerm); 

        if (laboratorios.length === 0) {
            return res.status(404).json({ message: 'No se encontraron laboratorios' });
        }

      
        res.status(200).json(laboratorios);
    } catch (error) {
        console.error('Error al buscar laboratorios:', error.stack || error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};