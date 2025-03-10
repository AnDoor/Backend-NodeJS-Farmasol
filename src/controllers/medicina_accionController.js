import * as medicinaAccionServices from '../services/medicina_accionServices.js';

// Crear una relación medicina-monodroga
export const createMedicinaAccion = async (req, res) => {
    try {
        const { medicina, accion } = req.body;
        const nuevaRelacion = await medicinaAccionServices.createMedicinaAccion(medicina, accion);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        console.error('ERROR al crear relación medicina-accion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones medicina-monodroga
export const getMedicinaAccion = async (req, res) => {
    try {
        const relaciones = await medicinaAccionServices.getMedicinaAccion();
        res.status(200).json(relaciones);
    } catch (error) {
        console.error('ERROR al obtener relaciones medicina-accion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una relación medicina-monodroga por ID
export const getMedicinaAccionById = async (req, res) => {
    try {
        const { id } = req.params;
        const relacion = await medicinaAccionServices.getMedicinaAccionById(id);

        if (!relacion) {
            return res.status(404).json({ message: 'Relación medicina-monodroga no encontrada' });
        }

        res.status(200).json(relacion);
    } catch (error) {
        console.error('ERROR al obtener relación medicina-accion por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una relación medicina-monodroga
export const updateMedicinaAccion = async (req, res) => {
    try {
        const { id } = req.params;
        const { medicina, accion } = req.body;
        const relacionActualizada = await medicinaAccionServices.updateMedicinaAccion(id, medicina, accion);

        if (!relacionActualizada) {
            return res.status(404).json({ message: 'Relación medicina-accion no encontrada' });
        }

        res.status(200).json(relacionActualizada);
    } catch (error) {
        console.error('ERROR al actualizar relación medicina-accion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una relación medicina-monodroga
export const deleteMedicinaAccion = async (req, res) => {
    try {
        const { id } = req.params;
        const relacionEliminada = await medicinaAccionServices.deleteMedicinaAccion(id);

        if (!relacionEliminada) {
            return res.status(404).json({ message: 'Relación medicina-accion no encontrada' });
        }

        res.status(200).json({ message: 'Relación medicina-accion eliminada correctamente' });
    } catch (error) {
        console.error('ERROR al eliminar relación medicina-accion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};