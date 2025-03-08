import * as medicinaMonoServices from '../services/medicina_monoServices.js';

// Crear una relación medicina-monodroga
export const createMedicinaMono = async (req, res) => {
    try {
        const { medicina, monodroga } = req.body;
        const nuevaRelacion = await medicinaMonoServices.createMedicinaMono(medicina, monodroga);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        console.error('ERROR al crear relación medicina-monodroga:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones medicina-monodroga
export const getMedicinaMono = async (req, res) => {
    try {
        const relaciones = await medicinaMonoServices.getMedicinaMono();
        res.status(200).json(relaciones);
    } catch (error) {
        console.error('ERROR al obtener relaciones medicina-monodroga:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una relación medicina-monodroga por ID
export const getMedicinaMonoById = async (req, res) => {
    try {
        const { id } = req.params;
        const relacion = await medicinaMonoServices.getMedicinaMonoById(id);

        if (!relacion) {
            return res.status(404).json({ message: 'Relación medicina-monodroga no encontrada' });
        }

        res.status(200).json(relacion);
    } catch (error) {
        console.error('ERROR al obtener relación medicina-monodroga por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una relación medicina-monodroga
export const updateMedicinaMono = async (req, res) => {
    try {
        const { id } = req.params;
        const { medicina, monodroga } = req.body;
        const relacionActualizada = await medicinaMonoServices.updateMedicinaMono(id, medicina, monodroga);

        if (!relacionActualizada) {
            return res.status(404).json({ message: 'Relación medicina-monodroga no encontrada' });
        }

        res.status(200).json(relacionActualizada);
    } catch (error) {
        console.error('ERROR al actualizar relación medicina-monodroga:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una relación medicina-monodroga
export const deleteMedicinaMono = async (req, res) => {
    try {
        const { id } = req.params;
        const relacionEliminada = await medicinaMonoServices.deleteMedicinaMono(id);

        if (!relacionEliminada) {
            return res.status(404).json({ message: 'Relación medicina-monodroga no encontrada' });
        }

        res.status(200).json({ message: 'Relación medicina-monodroga eliminada correctamente' });
    } catch (error) {
        console.error('ERROR al eliminar relación medicina-monodroga:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};