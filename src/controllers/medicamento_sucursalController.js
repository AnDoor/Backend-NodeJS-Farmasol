import * as medicinaSucursalServices from '../services/medicamento_sucursalServices.js';

// Crear una relación medicina-sucursal
export const createMedicamentoSucursal = async (req, res) => {
    try {
        const { sucursal, medicina, stock } = req.body;
        const nuevaRelacion = await medicinaSucursalServices.createMedicamentoSucursal(sucursal, medicina, stock);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        console.error('ERROR al crear relación medicina-sucursal:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones medicina-sucursal
export const getMedicamentoSucursal = async (req, res) => {
    try {
        const relaciones = await medicinaSucursalServices.getMedicamentoSucursal();
        res.status(200).json(relaciones);
    } catch (error) {
        console.error('ERROR al obtener relaciones medicina-sucursal:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una relación medicina-sucursal por ID
export const getMedicamentoSucursalById = async (req, res) => {
    try {
        const { id } = req.params;
        const relacion = await medicinaSucursalServices.getMedicamentoSucursalById(id);

        if (!relacion) {
            return res.status(404).json({ message: 'Relación medicina-sucursal no encontrada' });
        }

        res.status(200).json(relacion);
    } catch (error) {
        console.error('ERROR al obtener relación medicina-sucursal por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una relación medicina-sucursal
export const updateMedicamentoSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        const { sucursal, medicina, stock } = req.body;
        const relacionActualizada = await medicinaSucursalServices.updateMedicamentoSucursal(id, sucursal, medicina, stock);

        if (!relacionActualizada) {
            return res.status(404).json({ message: 'Relación medicina-sucursal no encontrada' });
        }

        res.status(200).json(relacionActualizada);
    } catch (error) {
        console.error('ERROR al actualizar relación medicina-sucursal:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una relación medicina-sucursal
export const deleteMedicamentoSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        const relacionEliminada = await medicinaSucursalServices.deleteMedicamentoSucursal(id);

        if (!relacionEliminada) {
            return res.status(404).json({ message: 'Relación medicina-sucursal no encontrada' });
        }

        res.status(200).json({ message: 'Relación medicina-sucursal eliminada correctamente' });
    } catch (error) {
        console.error('ERROR al eliminar relación medicina-sucursal:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
