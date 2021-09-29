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
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa(){
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';
  numero = '';
  votoBranco = false;

  for(let i =0;i < etapa.numeros;i++){
    if(i === 0){
      numeroHtml += '<div class="numero pisca"></div>';
    }else{
    numeroHtml += '<div class="numero"></div>';
    }
  }
  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML ='';
 numeros.innerHTML =  numeroHtml;
}
// impressão dos numeros na tela
function atualizainterface(){
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item)=>{
if(item.numero === numero){
       return true;
     }else{
       return false;
     }
  });
  // INFORMAÇÕES A SEREM EXIBIDAS APÓS A SELEÇÃO DO CANDIDATO
if(candidato.length > 0){
  candidato = candidato[0];
  seuVotoPara.style.display = 'block';
  aviso.style.display = 'block';
  descricao.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}`
  
  let fotosHtml ='';
for(let i in candidato.fotos){
  fotosHtml += `<div class="divisao-1-image"> <img src="images/${candidato.fotos[i].url}"/>${candidato.fotos[i].legenda}</div>`;
}
  lateral.innerHTML = fotosHtml;
}else{
  seuVotoPara.style.display = 'block';
  aviso.style.display = 'block';
  // CRIANDO DIV DO VOTO NULO
  descricao.innerHTML = '<div class= "aviso--grande pisca">VOTO NULO</div>';
  }
}

/*funçoes para dar vida aos botoes, branco,
 corrige e confirma */
function clicou(n){
 let elNumero= document.querySelector('.numero.pisca');
 if(elNumero !== null){
   elNumero.innerHTML = n;
   numero = `${numero}${n}`;

   elNumero.classList.remove('pisca');
   if(elNumero.nextElementSibling !== null){
   elNumero.nextElementSibling.classList.add('pisca');
   }else{
    atualizainterface();
   }
 }
}

function branco(){
  if(numero === ''){
    votoBranco= true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class= "aviso--grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';
  }else{
    alert('Para votar em branco é preciso corrigir/zerar a interface!')
  }
}
function corrige(){
  comecarEtapa();
}
function confirma(){
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if(votoBranco === true){
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco'
    });
  }else if(numero.length === etapa.numeros){
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    });
  }
  if(votoConfirmado){
    etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
      comecarEtapa();
    }else{
      document.querySelector('.tela').innerHTML = '<div class= "aviso--gigante pisca">FIM</div>';
      console.log(votos);
    }
   
  }
}
// esta execução de função serve
// pra limpar as informações da tela.
comecarEtapa();