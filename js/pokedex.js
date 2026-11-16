const botoes = document.querySelectorAll(".ver-mais");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        const texto = botoes[i].nextElementSibling;

        if (texto.hidden) {
            texto.hidden = false;
        } else {
            texto.hidden = true;
        }
    });
}
