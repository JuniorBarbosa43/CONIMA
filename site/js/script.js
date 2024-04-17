
/* Script do Calendário */
var conteudo20 = document.getElementById("d20");
var conteudo21 = document.getElementById("d21");
var conteudo22 = document.getElementById("d22"); // Corrigido para d22
var botao20 = document.getElementById("b20");
var botao21 = document.getElementById("b21");
var botao22 = document.getElementById("b22");

// Função para mostrar o conteúdo e definir o botão padrão
function mostrarConteudo(botaoClicado, conteudoMostrar) {
  // Esconder todos os conteúdos
  conteudo20.style.display = "none";
  conteudo21.style.display = "none";
  conteudo22.style.display = "none";

  // Mostrar o conteúdo clicado
  conteudoMostrar.style.display = "block";

  // Definir o botão padrão (adicionando uma classe)
  botao20.classList.remove("botao-padrao");
  botao21.classList.remove("botao-padrao");
  botao22.classList.remove("botao-padrao");
  botaoClicado.classList.add("botao-padrao");
}

// Adicionar eventos de clique aos botões
botao20.addEventListener("click", function() {
  mostrarConteudo(botao20, conteudo20);
});

botao21.addEventListener("click", function() {
  mostrarConteudo(botao21, conteudo21);
});

botao22.addEventListener("click", function() {
  mostrarConteudo(botao22, conteudo22);
});

// Definir o botão 20 como padrão inicialmente (adicionando uma classe)
botao20.classList.add("botao-padrao");

//Contador

 // Data final da contagem regressiva (formato: ano, mês - 1, dia, hora, minuto, segundo)
 var endDate = new Date(2024, 4, 20, 0, 0, 0);
          
 function updateCountdown() {
   var now = new Date();
   var timeDiff = endDate - now;
 
   if (timeDiff <= 0) {
     document.getElementById('contador').innerHTML = 'Contagem finalizada!';
   } else {
     var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
     var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
 
     document.getElementById('contador').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
   }
 }
 
 // Contagem regressiva a cada segundo
 setInterval(updateCountdown, 1000);
