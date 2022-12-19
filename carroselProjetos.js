// acao do slide para passar as imagens 
let cont = 1;
document.getElementById("radio1").checked = true;


setInterval(function () {

  proximaImagem();

}, 4000)



function proximaImagem() {
  cont = cont + 1;

  if (cont > 4) {
    cont = 1;
    //console.log("mensagem olá....")

  }
  document.getElementById("radio" + cont).checked = true;

}