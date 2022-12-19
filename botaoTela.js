

const btn = document.querySelector("#botao-apresentacao")

btn.addEventListener("click", mostratela);


// função para apagar o fundo e mostrar a tela de video
function mostratela() {
  const apresentacao = document.querySelector(".apresentacao_texto")
  apresentacao.textContent = "";

  const telaVideo = document.createElement("video")
  telaVideo.src = '/video/video-apresentacao.mp4'
  telaVideo.controls = true;
  telaVideo.height = 520;
  telaVideo.width = 650;
  telaVideo.autoplay = 1;





  apresentacao.appendChild(telaVideo)


}

