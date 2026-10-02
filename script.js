const form = document.getElementById("formtarefa");
const inputDescricao = document.getElementById("descricao");
const selCategoria = document.getElementById("categoria");
const selPrioridade = document.getElementById("prioridade");
const inputData = document.getElementById("data");
const mensagemErro = document.getElementById("mensagem_erro");
 
const filtroSituacao = document.getElementById("filtro_situacao");
const filtroCategoria = document.getElementById("filtro_categoria");
 
const spanTotal = document.getElementById("total");
const spanPendentes = document.getElementById("pendentes");
const spanConcluidas = document.getElementById("concluidas");
 
const listaTarefas = document.getElementById("lista_tarefas");

let tarefas = [];
function salvarTarefas () {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
