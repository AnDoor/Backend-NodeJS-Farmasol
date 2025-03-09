import * as cargoServices from "../services/cargoServices.js";
 
 export const getCargo = async (req,res) =>{
    try{
        const cargo = await cargoServices.getCargo();
        res.status(200).json(cargo);
    } catch(err)
        {
            console.error('ERROR cargo: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createCargo = async (req,res) =>{
    try{
        const cargoData = req.body;
        const  newCargo= await cargoServices.createCargo(cargoData);

        res.status(200).json(newCargo);
    } catch(err)
        {
            console.error('ERROR adding cargo: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateCargo = async (req,res) =>{
    try{
       const idCargo = req.params.id;
       const cargoData = req.body;
       const updatedCargo= await cargoServices.updateCargo(cargoData,idCargo);

       if(!updatedCargo){
        return res.status(404).json({message: 'cargo no encontrada'})
       }
       res.status(200).json(updatedCargo);

    } catch(error)
        {
            console.error('ERROR actualizando cargo: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteCargo = async (req,res) =>{
    try{
        const idCargo = req.params.id;
        const deletedcargo = await cargoServices.deleteCargo(idCargo);

        if (!deletedcargo){
            return res.status(404).json({message: 'cargo  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando cargo: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

//  export const searchCargo= async (req, res) => {
//     try {
//         const searchTerm = req.query.q; // Obtén el término de búsqueda desde la query string
//         const ciudades = await cargoServices.buscarCiudad(searchTerm); 

//         if (ciudades.length === 0) {
//             // Si no se encontraron ciudades, devuelve un 404
//             return res.status(404).json({ message: 'No se encontraron ciudades' });
//         }

//         // Si hay resultados, devuelve las ciudades con un código 200
//         res.status(200).json(ciudades);
//     } catch (error) {
//         console.error('ERROR al buscar la ciudad:', error);
//         // Devuelve un error 500 para errores internos del servidor
//         res.status(500).json({ message: 'Error interno del servidor' });
//     }
// };

export const searchCargo = async (req, res) => {
    try {
        const searchTerm = req.query.term; 
        const cargos = await cargoServices.buscarCargo(searchTerm); 

        if (cargos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cargos' });
        }

        res.status(200).json(cargos);
    } catch (error) {
        console.error('ERROR al buscar el cargo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};