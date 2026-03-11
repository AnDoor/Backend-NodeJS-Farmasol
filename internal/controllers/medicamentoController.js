import * as medicamentoServices from "../services/medicamentoServices.js";
 
 export const getMedicamento = async (req,res) =>{
    try{
        const medicamento = await medicamentoServices.getMedicamento();
        res.status(200).json(medicamento);
    } catch(err)
        {
            console.error('ERROR ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const createMedicamento= async (req,res) =>{
    try{
        const medicamentoData = req.body;
        const  newMedicamento = await medicamentoServices.createMedicamento(medicamentoData);

        res.status(200).json(newMedicamento);
    } catch(err)
        {
            console.error('ERROR adding medicamento: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const updateMedicamento = async (req,res) =>{
    try{
       const idMedicamento = req.params.id;
       const medicamentoData = req.body;
       const updatedMedicamento = await medicamentoServices.updateMedicamento(medicamentoData,idMedicamento);

       if(!updatedMedicamento){
        return res.status(404).json({message: 'Medicamento no encontrada'})
       }
       res.status(200).json(updatedMedicamento);

    } catch(error)
        {
            console.error('ERROR actualizando ciudad: ', error)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const deleteMedicamento= async (req,res) =>{
    try{
        const idMedicamento = req.params.id;
        const deleted = await medicamentoServices.deleteMedicamento(idMedicamento);

        if (!deleted){
            return res.status(404).json({message: 'medicamento  no encontrada'});
        }
       res.status(200).send();

    } catch(err)
        {
            console.error('ERROR eliminando medicamento: ', err)
            res.status(500).json({ message: 'Internal server ERROR'});

        }
 }

 export const searchMedicamento = async (req, res) => {
    try {
        const searchTerm = req.query.term; // Obtén el término de búsqueda desde la query string
        const medicamentos = await medicamentoServices.buscarMedicamento(searchTerm); 

        if (medicamentos.length === 0) {
        
            return res.status(404).json({ message: 'No se encontraron medicamentos' });
        }

      
        res.status(200).json(medicamentos);
    } catch (error) {
        console.error('Error al buscar medicamentos:', error.stack || error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};