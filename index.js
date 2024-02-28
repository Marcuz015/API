import express from 'express';
import { listar, consultarPorId } from './service/alunos.js';

const app = express();

app.get('/alunos',(req,res)=>{
    res.status(200).json(listar());
});

app.get('/alunos/:id',(req,res)=>{
    let id = req.params.id;
    let resultConsulta = consultarPorId(id);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
})

app.listen(80);