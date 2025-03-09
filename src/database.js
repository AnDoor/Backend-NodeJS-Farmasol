import pg  from 'pg'

// conexiones a la Base de datos
export const pool = new pg.Pool({
    user: "postgres",
    host:"localhost",
    password:"gocha0915",
    database: "farmasol",
    port:"5432"
})

// Verificar la conexión a la base de datos

pool.connect(function(err){
    if (err){
        throw err;
    }else{
        console.log('conexion exitosa')
    }
})

// Exportar la función query
export const query = (text, params) => pool.query(text,params)