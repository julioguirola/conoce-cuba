import express, { json } from "express";
import { getProyectos } from "./db_connect/db";

const app = express();

app.use(express.json())
app.use(express.static('./frontend'))
app.use(express.static('./frontend/fotos'))

app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/index.html')
})

app.get('/realizados', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/realizados.html')
})

app.get('/proyectos', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/proyectos.html')
})

app.post('/get_data', async (req,res) => {
    const finalizado = req.body.fin
    const result = await getProyectos(finalizado)
    if (result) {
        res.json({data:true, content:result})
    } else {
        res.json({data:false})
    }
})

app.get('/realizados/:id', (req,res) => {
    const {id} = req.params
})

app.get('/proyectos/:id', (req,res) => {
    const {id} = req.params
})

app.listen(8080 , () => {
    console.log("http://localhost:8080")
})

//token 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
