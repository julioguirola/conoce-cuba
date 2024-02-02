// +=======================================================================+
// |punto                                                                  |
// |                                                                       |
// |id | proyecto_id | lugar | des | foto                                  |
// +=======================================================================+
// |proyecto                                                               |
// |                                                                       |
// |id | lugar | des | foto | fecha | disponible                           |
// +=======================================================================+


import postgres from "postgres"

const sql = postgres('postgres://fl0user:WvZe7iId9jXc@ep-curly-block-a5mkmb2z.us-east-2.aws.neon.fl0.io:5432/conocecubadb?sslmode=require', {
  host                 : 'ep-curly-block-a5mkmb2z.us-east-2.aws.neon.fl0.io',           
  port                 :  5432,          
  database             : 'conocecubadb',            
  username             : 'fl0user',           
  password             : 'WvZe7iId9jXc',
  ssl                  : 'require'
})

export async function getProyectos() {
    const result = await sql`select id, lugar, des, foto, fecha, disponible from proyecto`;
    return result
}

export async function getProyecto(id) {
    const proyecto = await sql`select lugar, des, foto, fecha, disponible from proyecto where id = ${id}`
    const ruta = await sql`select lugar, des, foto from punto where proyecto_id = ${id}`

    return {proyecto:proyecto, ruta:ruta}
}

// console.log(await getProyecto(1))
