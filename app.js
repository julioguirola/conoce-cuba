import express from "express";
import { getProyecto, getProyectos } from "./db_connect/db.js";

const app = express();

app.use(express.json())
app.use(express.static('./frontend'))
app.use(express.static('./frontend/fotos'))
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/index.html')
})

app.get('/proyectos', (req,res) => {
    res.sendFile(process.cwd() + '/frontend/proyectos.html')
})

app.get('/get_proyectos', async (req,res) => {
    const result = await getProyectos()
    if (result) {
        res.json({succes:true, content:result})
    } else {
        res.json({succes:false})
    }
})

app.get('/proyecto/:id', async (req,res) => {
    const {id} = req.params
    const result = await getProyecto(id)

    res.render("proyecto.ejs", {
        datos:result
    })
})

app.listen(8080 , () => {
    console.log("http://localhost:8080")
})

//token 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
