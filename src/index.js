import express from 'express';
import morgan from 'morgan'
import cors from 'cors';

/*Rutas de las entidades que tienen CRUD */
import ciudadRoutes from './routes/ciudadRoutes.js'
import empleadoRoutes from './routes/empleadosRoutes.js'
import cargoRoutes from './routes/cargoRoutes.js'
import empleado_cargo from './routes/empleado_cargoRoutes.js'
import medicamentoRoutes from './routes/medicamentoRoutes.js'
import monodroga from './routes/monodrogaRoutes.js'
import laboratorio from './routes/laboratorioRoutes.js'
import AccionTerapeutica from './routes/accion_tRoutes.js'
import medicinaAccion from './routes/medicina_accionRoutes.js'
import medicinaMono from './routes/medicina_monoRoutes.js'
import medicamentoSucursal from './routes/medicamento_SucursalRoutes.js'
import medicamentoLaboratorio from './routes/medicamento_labRoutes.js'

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());


app.use('/api',
 ciudadRoutes,cargoRoutes,
 empleadoRoutes,empleado_cargo,
 medicamentoRoutes,monodroga,
 laboratorio,AccionTerapeutica,medicinaMono,
 medicinaAccion, medicamentoSucursal,
 medicamentoLaboratorio
      )

 /*Ayuda a ver la velocidad y cuando se realiza una consulta por la terminal */
app.use(morgan('dev'))

/* se conecta al puerto del servideor local */
app.listen(PORT, () =>{
    console.log('yes')
});

