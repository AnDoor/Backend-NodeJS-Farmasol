import * as empleadoCargoServices from '../services/empleado_cargoServices.js';

// Crear una relación empleado-cargo
export const createEmpleadoCargo = async (req, res) => {
    try {
        const { empleadoId, cargoId } = req.body;
        const nuevaRelacion = await empleadoCargoServices.createEmpleadoCargo(empleadoId, cargoId);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        console.error('ERROR al crear relación empleado-cargo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todas las relaciones empleado-cargo
export const getEmpleadosCargos = async (req, res) => {
    try {
        const relaciones = await empleadoCargoServices.getEmpleadosCargos();
        res.status(200).json(relaciones);
    } catch (error) {
        console.error('ERROR al obtener relaciones empleado-cargo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una relación empleado-cargo por ID
export const getEmpleadoCargoById = async (req, res) => {
    try {
        const { id } = req.params;
        const relacion = await empleadoCargoServices.getEmpleadoCargoById(id);

        if (!relacion) {
            return res.status(404).json({ message: 'Relación empleado-cargo no encontrada' });
        }

        res.status(200).json(relacion);
    } catch (error) {
        console.error('ERROR al obtener relación empleado-cargo por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una relación empleado-cargo
export const updateEmpleadoCargo = async (req, res) => {
    try {
        const { id } = req.params;
        const { empleadoId, cargoId } = req.body;
        const relacionActualizada = await empleadoCargoServices.updateEmpleadoCargo(id, empleadoId, cargoId);

        if (!relacionActualizada) {
            return res.status(404).json({ message: 'Relación empleado-cargo no encontrada' });
        }

        res.status(200).json(relacionActualizada);
    } catch (error) {
        console.error('ERROR al actualizar relación empleado-cargo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una relación empleado-cargo
export const deleteEmpleadoCargo = async (req, res) => {
    try {
        const { id } = req.params;
        const relacionEliminada = await empleadoCargoServices.deleteEmpleadoCargo(id);

        if (!relacionEliminada) {
            return res.status(404).json({ message: 'Relación empleado-cargo no encontrada' });
        }

        res.status(200).json({ message: 'Relación empleado-cargo eliminada correctamente' });
    } catch (error) {
        console.error('ERROR al eliminar relación empleado-cargo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};