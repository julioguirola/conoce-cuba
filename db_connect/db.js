// +=======================================================================+
// |location                                                               |
// |                                                                       |
// |id | name | description | foto                                         |
// +=======================================================================+
// |image                                                                  |
// |                                                                       |
// |id | location_id | sub_location_id | url                               |
// +=======================================================================+
// |sublocation                                                            |
// |                                                                       |
// |id | location_id | name | description | foto                           |
// +=======================================================================+
// |comment                                                                |
// |                                                                       |
// |id | proyecto_id | user | content | rating | aproved                   |
// +=======================================================================+
// |proyecto                                                               |
// |                                                                       |
// |id | location_id | fecha | finalizado                                  |
// +=======================================================================+
// |proyecto_sublocation                                                   |
// |                                                                       |
// |proyecto_id | sublocation_id                                           |
// +=======================================================================+
// 
// 
// sueños realizados => SELECT proyecto.id, location.name, location.foto, proyecto.fecha 
//                      FROM locations JOIN proyecto ON proyecto.location_id = location.id
//                      WHERE proyecto.finalizado = 1
//
//
// sueños realizados => SELECT proyecto.id, location.name, location.foto, proyecto.fecha 
//                      FROM locations JOIN proyecto ON proyecto.location_id = location.id
//                      WHERE proyecto.finalizado = 0
//
// sublocalizaciones de un proyecto especifico => select sublocation.name, sublocation.des, sublocation.foto, pa.id from
//			                                      sublocation join pa join proyecto_sublocation 
//                                                on sublocation.id = proyecto_sublocation.sublocation_id and
//				                                  pa.id = proyecto_sublocation.proyecto_id
//                                                where proyecto.id = 1

import postgres from "postgres"

const sql = postgres('postgres://fl0user:********@ep-wispy-tree-86137389.us-east-2.aws.neon.fl0.io:5432/concecubadb?sslmode=require', {
  host                 : 'ep-wispy-tree-86137389.us-east-2.aws.neon.fl0.io',           
  port                 :  5432,          
  database             : 'concecubadb',            
  username             : 'fl0user',           
  password             : 'OWrUA2TBwH4d',
  ssl                  : 'require'
})

export async function getProyectos(finalizados) {

    try {
        const finalizado = finalizados ? 1 : 0
    
        const result = await sql`SELECT proyecto.id, location.name, location.foto, proyecto.fecha 
                        FROM location JOIN proyecto ON proyecto.location_id = location.id
                        WHERE proyecto.finalizado = ${finalizado}`;
    
        return result

    } catch (e) {
       console.log(e)
       return 
    }
}

export async function getProyecto(proyecto_id) {
    
    try {
        const result = await sql`
            select sublocation.id, sublocation.name, sublocation.description, sublocation.foto from sublocation join proyecto_sublocation
            on proyecto_sublocation.sublocation_id = sublocation.id where proyecto_sublocation.proyecto_id = ${proyecto_id}
        `;

        return result

    } catch (e) {
       console.log(e)
       return 
    }
}

// test
// console.log(await getProyecto(1))

