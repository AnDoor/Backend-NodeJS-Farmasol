import express from 'express';
import morgan from 'morgan'
import cors from 'cors';

/*Rutas de las entidades que tienen CRUD */
import ciudadRoutes from '../internal/routes/ciudadRoutes.js'
import empleadoRoutes from '../internal/routes/empleadosRoutes.js'
import cargoRoutes from '../internal/routes/cargoRoutes.js'
import empleado_cargo from '../internal/routes/empleado_cargoRoutes.js'
import medicamentoRoutes from '../internal/routes/medicamentoRoutes.js'
import monodroga from '../internal/routes/monodrogaRoutes.js'
import laboratorio from '../internal/routes/laboratorioRoutes.js'
import AccionTerapeutica from '../internal/routes/accion_tRoutes.js'
import medicinaAccion from '../internal/routes/medicina_accionRoutes.js'
import medicinaMono from '../internal/routes/medicina_monoRoutes.js'
import medicamentoSucursal from '../internal/routes/medicamento_SucursalRoutes.js'
import medicamentoLaboratorio from '../internal/routes/medicamento_labRoutes.js'
import pedido from '../internal/routes/pedidoRoutes.js'
import cuenta_pagar from "../internal/routes/cuentaPagarRoutes.js"
import compra from '../internal/routes/compraRoutes.js'
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
 medicamentoLaboratorio, pedido,cuenta_pagar,compra
      )

app.use(morgan('dev'))


app.listen(PORT, () =>{
    console.log('yes')
});

