import * as empleadoServices from "../services/empleadosServices.js";
 
 export const getEmpleado = async (req,res) =>{
    try{
        const empleado = await empleadoServices.getEmpleado();
        res.status(200).json(empleado);
    } catch(err)
        {
            console.error('ERROR empleado: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createEmpleado = async (req,res) =>{
    try{
        const empleadoData = req.body;
        const  newEmpleado = await empleadoServices.createEmpleado(empleadoData);

        res.status(200).json(newEmpleado);
    } catch(err)
        {
            console.error('ERROR adding empleado: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateEmpleado = async (req,res) =>{
    try{
       const idempleado = req.params.id;
       const empleadoData = req.body;
       const updatedEmpleado = await empleadoServices.updateEmpleado(idempleado,empleadoData);

       if(!updatedEmpleado){
        return res.status(404).json({message: 'Empleado no encontrada'})
       }
       res.status(200).json(updatedEmpleado);

    } catch(error)
        {
            console.error('ERROR actualizando empleado: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteEmpleado = async (req,res) =>{
    try{
        const idempleado = req.params.id;
        const deleted = await empleadoServices.deleteCiudad(idempleado);

        if (!deleted){
            return res.status(404).json({message: 'empleado  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando empleado: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchEmpleado = async (req, res) => {
    try {
        const searchTerm = req.query.term; // Cambia "id" por "term"
        const empleados = await empleadoServices.buscarEmpleado(searchTerm);

        if (empleados.length === 0) {
            return res.status(404).json({ message: 'No se encontraron empleados' });
        }

        res.status(200).json(empleados);
    } catch (error) {
        console.error('ERROR al buscar el empleado:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};