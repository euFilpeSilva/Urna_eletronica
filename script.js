/* remover elementos da tela com o seletor
 que esta sendo armazenado nas variaveis abaixo.
 VARIAVEIS DE CONTROLE DE INTERFACE*/
let seuVotoPara = document.querySelector('.divisao-1-1 span');
let cargo = document.querySelector('.divisao-1-2 span');
let descricao = document.querySelector('.divisao-1-4');
let aviso = document.querySelector('.divisao-2');
let lateral = document.querySelector('.divisao-1-right');
let numeros = document.querySelector('.divisao-1-3');
/*VARIAVEIS DE CONTROLE DE AMBIENTE */
let etapaAtual = 0;

function comecarEtapa(){
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML ='';
 numeros.innerHTML =  numeroHtml;
}
/*funçoes para dar vida aos botoes, branco,
 corrige e confirma */
function clicou(n){
  alert("clicou em" + n)
}

function branco(){
  alert("clicou BRANCO")
}
function corrige(){
  alert("clicou CORRIGE")
}
function confirma(){
  alert("clicou CONFIRMA")
}
// esta execução de função serve
// pra limpar as informações da tela.
comecarEtapa();