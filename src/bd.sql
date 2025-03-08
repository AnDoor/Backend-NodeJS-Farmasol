CREATE TABLE empleado (
    idEmpleado INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    tlf VARCHAR(15),
    email VARCHAR(100),
    direccion VARCHAR(200)
);

CREATE TABLE cargo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100)
);

INSERT INTO empleado (idempleado, nombre,apellido,telefono,direccion,email)
VALUES(30857308, 'Juan', 'Pérez', '+58 0414-0402034', 'juan.perez@example.com', 'Calle Falsa 123, Ciudad
 A'),
(41234567, 'María', 'Gómez', '+58 0412-3456789', 'maria.gomez@example.com', 'Avenida Siempre Viva 456, C
iudad B'),
(52345678, 'Carlos', 'López', '+58 0424-5678901', 'carlos.lopez@example.com', 'Calle 10 #20-30, Ciudad C
'),
(63456789, 'Ana', 'Martínez', '+58 0416-7890123', 'ana.martinez@example.com', 'Carrera 5 #15-25, Ciudad
D'),
(74567890, 'Luis', 'Rodríguez', '+58 0426-8901234', 'luis.rodriguez@example.com', 'Avenida Libertador 78
9, Ciudad E');


CREATE TABLE empleado_cargo (
    id SERIAL PRIMARY KEY,
    empleado INT,
    cargo INT,
    FOREIGN KEY (empleado) REFERENCES empleado(idEmpleado),
    FOREIGN KEY (cargo) REFERENCES cargo(id)
);

INSERT INTO empleado_cargo (empleado, cargo, diaQueTrabajo) VALUES
(30857308, 1, '2023-10-01'),  -- Juan Pérez (Administrativo) trabajó el 1 de octubre de 2023
(41234567, 2, '2023-10-02'),  -- María Gómez (Farmacéutico) trabajó el 2 de octubre de 2023
(52345678, 3, '2023-10-03'),  -- Carlos López (Auxiliar de Farmacia) trabajó el 3 de octubre de 2023
(63456789, 4, '2023-10-04'),  -- Ana Martínez (Pasante) trabajó el 4 de octubre de 2023
(74567890, 5, '2023-10-05');  -- Luis Rodríguez (Analista de Compra) trabajó el 5 de octubre de 2023