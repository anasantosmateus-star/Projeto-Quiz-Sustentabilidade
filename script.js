let pontos = 0;
let respondidas = 0;

function iniciarMissao() {
    let nome = document.getElementById("nomeJogador").value;

    if (nome.trim() === "") {
        alert("Digite seu nome!");
        return;
    }

    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("areaPerguntas").style.display = "block";

    document.getElementById("boasVindas").innerHTML =
        "👨‍🌾 Bem-vindo, " + nome + "!";
}

function responder(id, correta) {

    let campo = document.getElementById(id);

    if (campo.innerHTML !== "") {
        return;
    }

    respondidas++;

    if (correta) {
        pontos += 10;
        campo.innerHTML = "✅ Correto!";
    } else {
        campo.innerHTML = "❌ Incorreto!";
    }

    document.getElementById("pontuacao").innerHTML =
        "⭐ " + pontos + " pontos";

    document.getElementById("progresso").value =
        respondidas;
}

function certificado() {

    let nome =
        document.getElementById("nomeJogador").value;

    document.getElementById("certificadoFinal").innerHTML =
        "<h2>🏆 Certificado</h2>" +
        "<p><strong>" + nome + "</strong></p>" +
        "<p>Pontuação: " + pontos + "/100</p>" +
        "<p>Parabéns por concluir a missão Agro 2050!</p>";
}

function reiniciarMissao() {

    pontos = 0;
    respondidas = 0;

    for (let i = 1; i <= 10; i++) {

        let campo = document.getElementById("r" + i);

        if (campo) {
            campo.innerHTML = "";
        }
    }

    document.getElementById("pontuacao").innerHTML =
        "⭐ 0 pontos";

    document.getElementById("progresso").value = 0;

    document.getElementById("certificadoFinal").innerHTML = "";

    document.getElementById("areaPerguntas").style.display = "none";

    document.getElementById("telaInicial").style.display = "flex";
}
