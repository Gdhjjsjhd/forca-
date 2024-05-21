const palavras = ['gato', 'cachorro', 'elefante', 'girafa', 'macaco'];

const letrasDisponiveis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let palavra = '';
let letrasSelecionadas = [];
let tentativasErradas = 0;

function escolherPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

function verificarLetra(letra) {
  return palavra.includes(letra);
}

function handleLetraClick(letra) {
  if (!letrasSelecionadas.includes(letra)) {
    const novaLista = [...letrasSelecionadas, letra];
    letrasSelecionadas = novaLista;
    document.getElementById("letras-selecionadas").textContent = letrasSelecionadas.join(', ');
    if (!verificarLetra(letra)) {
      tentativasErradas++;
      document.getElementById("tentativas").textContent = `Tentativas erradas: ${tentativasErradas} de 6`;
    }
  }
  document.getElementById("palavra").textContent = `Palavra: ${palavraOculta()}`;
}
,
function palavraOculta() {
  return palavra.split('').map(letra => (letrasSelecionadas.includes(letra) ? letra : '_ ')).join(' ');
}

function reiniciarJogo() {
  palavra = escolherPalavra();
  letrasSelecionadas = [];
  tentativasErradas = 0;
  document.getElementById("palavra").textContent = `Palavra: ${palavraOculta()}`;
  document.getElementById("letras-selecionadas").textContent = '';
  document.getElementById("tentativas").textContent = `Tentativas erradas: ${tentativasErradas} de 6`;
}

function verificarFimDeJogo() {
  if (palavra && palavra.split('').every(letra => letrasSelecionadas.includes(letra))) {
    setTimeout(() => {
      alert(`Parabéns, você ganhou! A palavra era "${palavra}".`);
      reiniciarJogo();
    }, 100);
  }
  if (tentativasErradas >= 6) {
    setTimeout(() => {
      alert(`Game Over. A palavra era "${palavra}".`);
      reiniciarJogo();
    }, 100);
  }
}

reiniciarJogo();

const letrasDiv = document.getElementById("letras");
letrasDisponiveis.forEach(letra => {
  const button = document.createElement('button');
  button.textContent = letra;
  button.addEventListener('click', () => handleLetraClick(letra));
  letrasDiv.appendChild(button);
});

setInterval(verificarFimDeJogo, 500); // Verifica o fim de jogo periodicamente