const video = document.getElementById("video")
const botaoTrailer = document.querySelector('.botao-trailer');
const elementoModal = document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')
const linkVideo = video.src;


botaoTrailer.addEventListener("click", () => {
    elementoModal.classList.add("aberto")
    video.setAttribute("src", linkVideo)
})


fecharModal.addEventListener("click", () => {
    elementoModal.classList.remove("aberto")
    video.setAttribute("src", "")
})















