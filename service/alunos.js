import { alunos } from "../data/data.js";

export const listar = ()=>{
    return alunos;
}

export const consultarPorId = (id)=>{
    return alunos.find(aluno => aluno.id == id);
}