import * as monodrogaServices from "../services/monodrograServices.js";
 
 export const getMonodroga = async (req,res) =>{
    try{
        const monodroga = await monodrogaServices.getMonodroga();
        res.status(200).json(monodroga);
    } catch(err)
        {
            console.error('ERROR ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createMonodroga= async (req,res) =>{
    try{
        const monodrogaData = req.body;
        const  newMedicamento = await monodrogaServices.createMonodroga(monodrogaData);

        res.status(200).json(newMedicamento);
    } catch(err)
        {
            console.error('ERROR adding Monodroga: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateMonodroga = async (req,res) =>{
    try{
       const idMonodroga = req.params.id;
       const monodrogaData = req.body;
       const updatedMonodroga = await monodrogaServices.updateMonodroga(monodrogaData,idMonodroga);

       if(!updatedMonodroga){
        return res.status(404).json({message: 'Monodroga no encontrada'})
       }
       res.status(200).json(updatedMonodroga);

    } catch(error)
        {
            console.error('ERROR actualizando Monodroga: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteMonodroga = async (req,res) =>{
    try{
        const idMonodroga = req.params.id;
        const deleted = await monodrogaServices.deleteMonodroga(idMonodroga);

        if (!deleted){
            return res.status(404).json({message: 'Monodroga  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando Monodroga: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchMonodroga = async (req, res) => {
    try {
        const searchTerm = req.query.term; // Obtén el término de búsqueda desde la query string
        const monodrogas = await monodrogaServices.buscarMonodroga(searchTerm); 

        if (monodrogas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron monodrogas' });
        }

      
        res.status(200).json(monodrogas);
    } catch (error) {
        console.error('Error al buscar monodrogas:', error.stack || error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};