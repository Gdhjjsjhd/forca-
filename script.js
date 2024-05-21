const palavras = ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr.', 'Robert Lewandowski','Kevin De Bruyne','Sergio Ramos','Kylian Mbappé','Mohamed Salah','Virgil van Dijk','Harry Kane','Luka Modric','Sadio Mané','Karim Benzema','Raheem Sterling','Manuel Neuer','Joshua Kimmich','Trent Alexander-Arnold','Alisson Becker','Eden Hazard','Paul Pogba','Son Heung-min','Bruno Fernandes','Marc-André ter Stegen','Roberto Firmino','Jan Oblak','Andrew Robertson','Matthijs de Ligt','Jadon Sancho','Luis Suárez','Antoine Griezmann','Thomas Müller','Paulo Dybala','Lautaro Martínez','Gareth Bale','Romelu Lukaku','Marco Reus','Nicolas Pepe','Erling Haaland','Hakim Ziyech','Thiago Alcântara','Fabinho','Casemiro','Marquinhos','João Félix','Ángel Di María','Jamie Vardy','Memphis Depay', 'Gianluigi Donnarumma', 'Zlatan Ibrahimovic', 'Giovanni Reyna', 'Jorginho', 'Casemiro', 'Raphaël Varane', 'Kalidou Koulibaly', 'Frenkie de Jong', 'Aymeric Laporte', 'Alex Sandro', 'Thiago Silva', 'Lucas Hernández', 'Jordan Henderson', 'Riyad Mahrez', 'Kasper Schmeichel', 'Wilfred Ndidi', 'Ferran Torres', 'Rodri', 'Gianluigi Donnarumma', 'João Cancelo', 'Leon Goretzka', 'Thomas Partey', 'Jack Grealish', 'Jules Koundé', 'Matteo Pessina', 'Luis Díaz', 'Rúben Dias', 'David Alaba', 'Éder Militão', 'Denis Zakaria', 'David Brooks', 'Youri Tielemans', 'Eduardo Camavinga', 'Sergej Milinković-Savić', 'Leonardo Bonucci', 'Caglar Söyüncü', 'Nicolò Barella', 'Donyell Malen', 'Ivan Perišić', 'Bukayo Saka', 'Dominik Szoboszlai', 'Dejan Kulusevski', 'Emiliano Martínez', 'Ciro Immobile', 'Chris Wood', 'Jamie Vardy', 'Kai Havertz', 'Jude Bellingham', 'Declan Rice', 'Yuri Tielemans', 'Giovani Lo Celso', 'Tammy Abraham', 'Ben Chilwell', 'Harvey Barnes', 'Ezri Konsa', 'Danny Ings', 'Nathan Aké', 'Jarrod Bowen', 'Conor Gallagher', 'Callum Hudson-Odoi', 'Aaron Ramsdale', 'Kalvin Phillips', 'Bukayo Saka', 'Emile Smith Rowe', 'Mason Mount', 'Reece James', 'Mikel Arteta', 'Yan Couto', 'Gabriel Martinelli', 'Raheem Sterling', 'João Pedro', 'Dele Alli', 'Joe Gomez', 'Ben White', 'Ben Godfrey', 'Todd Cantwell', 'Kieran Trippier', 'Jude Bellingham', 'Dean Henderson', 'James Maddison', 'Japhet Tanganga', 'Ryan Sessegnon', 'Ollie Watkins', 'Kyle Walker-Peters', 'Reiss Nelson', 'Fikayo Tomori', 'Brandon Williams', 'Eddie Nketiah', 'Michael Keane', 'Alex Oxlade-Chamberlain', 'James Ward-Prowse', 'Kortney Hause', 'Conor Coady', 'Ben Davies', 'James Tarkowski','Leandro Paredes', 'Giovanni Di Lorenzo'].map(palavra => palavra.toLowerCase());

const letrasDisponiveis = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' '].map(palavra => palavra.toLowerCase());

let palavra = ''
let letrasSelecionadas = [];
let tentativasErradas = 0;

function escolherPalavra(){
    return palavras[Math.floor(Math.random () * palavras.length)]
}

function verificarLetras(letra){
    return palavra.includes(letra)
}

function handleLetraClick(letra) {
    if (!letrasSelecionadas.includes(letra)) {
      const novaLista = [...letrasSelecionadas, letra];
      letrasSelecionadas = novaLista;
      document.getElementById("letras-selecionadas").textContent = letrasSelecionadas.join(', ');
      if (!verificarLetras(letra)) {
        tentativasErradas++;
        document.getElementById("tentativas").textContent = `Tentativas erradas: ${tentativasErradas} de 6`;
      }
    }
    document.getElementById("palavra").textContent = `Palavra: ${palavraOculta()}`;
  }
  

function palavraOculta(){
    return palavra.split('').map(letra => (letrasSelecionadas.includes(letra) ? letra : '_ ')).join('');
}

function reiniciarJogo(){
    palavra = escolherPalavra();
    letrasSelecionadas = [];
    tentativasErradas = 0;

    document.getElementById('palavra').textContent = '';
    document.getElementById('letras-selecionadas').textContent = '';
    document.getElementById('tentativas').textContent = `Tentativas erradas: ${tentativasErradas} de 6`
}

function verificarFimdeJogo(){
    if(palavra && palavra.split('').every(letra => letrasSelecionadas.includes(letra))){
        setTimeout(() => {
            alert(`Parabens, você ganhou! 🦍 A palavra era ${palavra},`)

        }, 100)
    }
    
    if(tentativasErradas >= 6){
        setTimeout(() =>{
            alert(`Gamer ober. A palavra era "${palavra}".`);
            reiniciarJogo();

        }, 100);
    }
    
}


reiniciarJogo();


const letrasDiv = document.getElementById('letras');
letrasDisponiveis.forEach(letra => {
    const button = document.createElement('button');
    button.textContent = letra;
    button.addEventListener('click', () => handleLetraClick(letra));
    letrasDiv.appendChild(button);

});

setInterval(verificarFimdeJogo, 500);