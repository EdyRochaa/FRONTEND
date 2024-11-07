let numeroSecreto;
let tentativas = 5;

function iniciarJogo() {
    // Oculta o número e começa a fase de adivinhar
    numeroSecreto = document.getElementById("numeroSecreto").value;
    
    if (numeroSecreto < 0 || numeroSecreto > 100) {
        alert("O número deve estar entre 0 e 100.");
        return;
    }

    // Esconde a fase de escolha do número e mostra a fase de adivinhar
    document.getElementById("fase1").style.display = "none";
    document.getElementById("fase2").style.display = "block";
    document.getElementById("tentativas").textContent = tentativas;
}

function adivinhar() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");
    
    if (isNaN(palpite)) {
        mensagem.textContent = "Por favor, insira um número válido.";
        mensagem.style.color = "red";
        return;
    }
    
    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou o número!";
        mensagem.style.color = "green";
        document.getElementById("fase2").style.display = "none"; // Fim do jogo
        return;
    }

    tentativas--;
    document.getElementById("tentativas").textContent = tentativas;

    if (tentativas <= 0) {
        mensagem.textContent = "Você perdeu! O número era " + numeroSecreto + ".";
        mensagem.style.color = "red";
        document.getElementById("fase2").style.display = "none"; // Fim do jogo
    } else {
        if (palpite > numeroSecreto) {
            mensagem.textContent = "O número é menor! Tente novamente.";
            mensagem.style.color = "yellow";
        } else {
            mensagem.textContent = "O número é maior! Tente novamente.";
            mensagem.style.color = "yellow";
        }
    }
}
