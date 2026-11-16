const botoes = document.querySelectorAll(".ver-mais");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        const caixa = botoes[i].nextElementSibling;

        if (caixa.hidden) {
            caixa.hidden = false;
            botoes[i].textContent = "Ver menos";
            botoes[i].setAttribute("aria-expanded", "true");
        } else {
            caixa.hidden = true;
            botoes[i].textContent = "Ver mais";
            botoes[i].setAttribute("aria-expanded", "false");
        }
    });
}
