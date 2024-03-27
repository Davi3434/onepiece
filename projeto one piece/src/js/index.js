const botoes = document.querySelectorAll(".botao");
const perso = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarForma();

        botao.classList.add("selecionado");
        perso[indice].classList.add("selecionado");
    });
});

function desselecionarForma()  {
    const formaSelecionada = document.querySelector(".personagem.selecionado");
    formaSelecionada.classList.remove("selecionado");
}

function desselecionarBotao () {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
