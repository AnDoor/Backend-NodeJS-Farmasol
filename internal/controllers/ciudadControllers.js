import * as ciudadServices from "../services/ciudadServices.js";
 
 export const getCiudad = async (req,res) =>{
    try{
        const ciudad = await ciudadServices.getCiudad();
        res.status(200).json(ciudad);
    } catch(err)
        {
            console.error('ERROR ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createCiudad = async (req,res) =>{
    try{
        const ciudadData = req.body;
        const  newCiudad = await ciudadServices.createCiudad(ciudadData);

        res.status(200).json(newCiudad);
    } catch(err)
        {
            console.error('ERROR adding ciudad: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateCiudad = async (req,res) =>{
    try{
       const idCiudad = req.params.id;
       const ciudadData = req.body;
       const updatedCiudad = await ciudadServices.updateCiudad(ciudadData,idCiudad);

       if(!updatedCiudad){
        return res.status(404).json({message: 'Ciudad no encontrada'})
       }
       res.status(200).json(updatedCiudad);

    } catch(error)
        {
            console.error('ERROR actualizando ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteCiudad = async (req,res) =>{
    try{
        const idCiudad = req.params.id;
        const deleted = await ciudadServices.deleteCiudad(idCiudad);

        if (!deleted){
            return res.status(404).json({message: 'ciudad  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando ciudad: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchCiudad = async (req, res) => {
    try {
        const searchTerm = req.query.q; // Obtén el término de búsqueda desde la query string
        const ciudades = await ciudadServices.buscarCiudad(searchTerm); 

        if (ciudades.length === 0) {
            // Si no se encontraron ciudades, devuelve un 404
            return res.status(404).json({ message: 'No se encontraron ciudades' });
        }

        // Si hay resultados, devuelve las ciudades con un código 200
        res.status(200).json(ciudades);
    } catch (error) {
        console.error('ERROR al buscar la ciudad:', error);
        // Devuelve un error 500 para errores internos del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};