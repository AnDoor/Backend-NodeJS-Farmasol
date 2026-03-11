
import * as medicamentoLabServices from '../services/medicamento_labServices.js';

// Crear una relación medicina-sucursal
export const createMedicamentoLab = async (req, res) => {
    try {
        const { medicamento, laboratorio, stock } = req.body;
        const nuevaRelacion = await medicamentoLabServices.createMedicamentoLab(medicamento, laboratorio, stock);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        console.error('ERROR al crear relación medicina-laboratorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones medicina-sucursal
export const getMedicamentoLab = async (req, res) => {
    try {
        const relaciones = await medicamentoLabServices.getMedicamentoLab();
        res.status(200).json(relaciones);
    } catch (error) {
        console.error('ERROR al obtener relaciones medicina-laboratorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una relación medicina-laboratorio por ID
export const getMedicamentoLabById = async (req, res) => {
    try {
        const { id } = req.params;
        const relacion = await medicamentoLabServices.getMedicamentoLabById(id);

        if (!relacion) {
            return res.status(404).json({ message: 'Relación medicina-laboratorio no encontrada' });
        }

        res.status(200).json(relacion);
    } catch (error) {
        console.error('ERROR al obtener relación medicina-laboratorio por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una relación medicina-laboratorio
export const updateMedicamentoLab = async (req, res) => {
    try {
        const { id } = req.params;
        const { medicamento, laboratorio, stock } = req.body;
        const relacionActualizada = await medicamentoLabServices.updateMedicamentoLab(id, medicamento, laboratorio, stock);

        if (!relacionActualizada) {
            return res.status(404).json({ message: 'Relación medicina-laboratorio no encontrada' });
        }

        res.status(200).json(relacionActualizada);
    } catch (error) {
        console.error('ERROR al actualizar relación medicina-laboratorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una relación medicina-sucursal
export const deleteMedicamentoLab = async (req, res) => {
    try {
        const { id } = req.params;
        const relacionEliminada = await medicamentoLabServices.deleteMedicamentoLab(id);

        if (!relacionEliminada) {
            return res.status(404).json({ message: 'Relación medicina-laboratorio no encontrada' });
        }

        res.status(200).json({ message: 'Relación medicina-laboratorio eliminada correctamente' });
    } catch (error) {
        console.error('ERROR al eliminar relación medicina-laboratorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// export const getMedicamentoLabPorMedicamentoYLaboratorio = async (req, res) => {
//     try {
//         const medicamento = req.query.medicamento;
//         const laboratorio = req.query.laboratorio;

//         // Validación de entradas (opcional)
//         if (!medicamento || !laboratorio) {
//             return res.status(400).json({ message: 'Se requieren los parámetros medicamento y laboratorio' });
//         }

//         const resultados = await medicamentoLabServices.buscarMedicamentoLabPorMedicamentoYLaboratorio(medicamento, laboratorio);

//         if (resultados.length === 0) {
//             return res.status(404).json({ message: 'No se encontraron coincidencias' });
//         }

//         res.status(200).json(resultados);
//     } catch (error) {
//         console.error('Error al obtener medicamento/laboratorio por medicamento y laboratorio:', error);
//         res.status(500).json({ message: 'Error interno del servidor' });
//     }
// };