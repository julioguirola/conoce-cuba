import express, { json } from "express";
import { getProyecto, getProyectos } from "./db_connect/db.js";

const app = express();

app.use(express.json())
app.use(express.static('./frontend'))
app.use(express.static('./frontend/fotos'))

app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/index.html')
})

app.get('/terminados', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/terminados.html')
})

app.get('/proyectos', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/proyectos.html')
})

app.post('/get_data', async (req,res) => {
    const {finalizado} = req.body
    const result = await getProyectos(finalizado)
    if (result) {
        res.json({succes:true, content:result})
    } else {
        res.json({succes:false})
    }
})

app.get('/terminados/:id', async (req,res) => {
    const {id} = req.params
    const result = await getProyecto(id)
    res.json(result)
})

app.get('/proyectos/:id', (req,res) => {
    const {id} = req.params
})

app.listen(8080 , () => {
    console.log("http://localhost:8080")
})

//token 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
