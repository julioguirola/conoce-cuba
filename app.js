import express, { json } from "express";

const app = express();

app.use(express.json())
app.use(express.static('./frontend'))

app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/index2.html')
})

app.get('/realizados', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/realizados.html')
})

app.get('/proyectos', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/proyectos.html')
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
