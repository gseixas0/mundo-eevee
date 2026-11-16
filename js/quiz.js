const pokemons = [
    { id: "vaporeon", nome: "Vaporeon", img: "imagens/vaporeon.png", descricao: "Calma, adaptável e acolhedora. Você flui com as situações e ajuda os outros a se acalmarem." },
    { id: "jolteon",  nome: "Jolteon",  img: "imagens/jolteon.png",  descricao: "Rápida e cheia de energia. Você age primeiro, pensa depois e ninguém consegue te acompanhar." },
    { id: "flareon",  nome: "Flareon",  img: "imagens/flareon.png",  descricao: "Leal, corajosa e calorosa. Você aquece o ambiente e defende quem ama até o fim." },
    { id: "espeon",   nome: "Espeon",   img: "imagens/espeon.png",   descricao: "Inteligente e intuitiva. Você enxerga longe, planeja com cuidado e está sempre um passo à frente." },
    { id: "umbreon",  nome: "Umbreon",  img: "imagens/umbreon.png",  descricao: "Reservada e observadora. Você prefere o silêncio, pensa bastante e age na hora certa." },
    { id: "leafeon",  nome: "Leafeon",  img: "imagens/leafeon.png",  descricao: "Paciente e tranquila. Você cresce no seu ritmo e se sente em casa em contato com a natureza." },
    { id: "glaceon",  nome: "Glaceon",  img: "imagens/glaceon.png",  descricao: "Elegante e independente. Você mantém a calma sob pressão e não precisa da aprovação de ninguém." },
    { id: "sylveon",  nome: "Sylveon",  img: "imagens/sylveon.png",  descricao: "Carinhosa e sociável. Você valoriza a amizade e faz todo mundo se sentir querido." }
];

const formulario = document.getElementById("form-quiz");
const campoNome = document.getElementById("campo-nome");
const botaoResultado = document.getElementById("btn-resultado");
const botaoRefazer = document.getElementById("btn-refazer");
const aviso = document.getElementById("aviso");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("titulo-resultado");
const imagem = document.getElementById("img-resultado");
const descricao = document.getElementById("desc-resultado");
const listaPontos = document.getElementById("lista-pontos");

function mostrarResultado() {
    const nome = campoNome.value.trim();
    const totalPerguntas = document.querySelectorAll(".pergunta").length;
    const respostas = document.querySelectorAll("input[type='radio']:checked");

    if (nome === "") {
        aviso.textContent = "Digite seu nome.";
        return;
    }
    if (respostas.length < totalPerguntas) {
        aviso.textContent = "Responda todas as perguntas.";
        return;
    }
    aviso.textContent = "";

    let vencedor = pokemons[0];
    let maior = -1;
    listaPontos.innerHTML = "";

    for (let i = 0; i < pokemons.length; i++) {
        let pontos = 0;
        for (let j = 0; j < respostas.length; j++) {
            if (respostas[j].value === pokemons[i].id) {
                pontos++;
            }
        }

        const item = document.createElement("li");
        item.textContent = pokemons[i].nome + ": " + pontos + " ponto(s)";
        listaPontos.appendChild(item);

        if (pontos > maior) {
            maior = pontos;
            vencedor = pokemons[i];
        }
    }

    titulo.textContent = nome + ", você é o " + vencedor.nome + "!";
    imagem.src = vencedor.img;
    imagem.alt = vencedor.nome;
    descricao.textContent = vencedor.descricao;
    resultado.hidden = false;
}

function refazer() {
    formulario.reset();
    resultado.hidden = true;
    aviso.textContent = "";
}

botaoResultado.addEventListener("click", mostrarResultado);
botaoRefazer.addEventListener("click", refazer);
