import { alunos } from "../data/data.js";

//Retorna os alunos
export const listar = ()=>{
    return alunos;
}

//Chama os alunos por ID
export const consultarPorId = (id)=>{
    return alunos.find(aluno => aluno.id == id);
}
