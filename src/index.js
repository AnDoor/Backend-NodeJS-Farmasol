import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import ciudadRoutes from './routes/ciudadRoutes.js'
import empleadoRoutes from './routes/empleadosRoutes.js'
import cargoRoutes from './routes/cargoRoutes.js'
import empleado_cargo from './routes/empleado_cargoRoutes.js'
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());


app.use('/api', ciudadRoutes,cargoRoutes,empleadoRoutes,empleado_cargo)
app.use(morgan('dev'))

app.listen(PORT, () =>{
    console.log('yes')
});

