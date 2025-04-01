let btnEnviarNomes = document.getElementById('btnenviarnome');
let espacoNomes = document.getElementById('listalutadores');
let btnSortear = document.getElementById('btnSortear');
let btnPlay = document.getElementById('btnPlay');
let btnStop = document.getElementById('btnStop');
let btnLimpar = document.getElementById('btnLimpar');
let inputNome = document.getElementById('adicionarnome');
let btnLimparNomesSorteados = document.getElementById('zerar-nomes-sorteados')
let btnVoltarInicio = document.getElementById('voltar-inicio')


btnVoltarInicio.addEventListener('click', voltar)
espacoNomes.style.display = 'flex'
espacoNomes.style.flexDirection = 'column'

let listaNinjas = [];
let = nnomesProibidos = ['PAU', 'MEU PAU', 'BUCETA', 'CHUPA MINHA ROLA', 'SEU CU', 'SEU CÚ', 'BRUNO VIADO', 'BRUNO TROUXA', 'BRUNINHO CATATAU', 'BRUNO FRACO', 'BRUNINHO FRACO', 'BRUNO FRAQUISSIMO', 'BRUNINHO FRAQUÍSSIMO', 'BRUNO GAY', 'BRUNO GAYZÃO', 'BRUNINHO GAY', 'BRUNINHO GAYZAO', 'COMEDOR', 'VOU TE COMER', 'BRUNO BUMBUM GULOSO', 'BRUNINHO BUMBUM GULOSO', 'BUMBUM GULOSO', 'TOMA NO CU', 'TOMAR NO CU', 'VAI TOMAR NO CU', 'VAI TOMA NO CU', 'TOMA NO CÚ', 'TOMAR NO CÚ', 'BRUNO CHUPA', 'BRUNINHO CHUPA', 'CHUPA BRUNINHO', 'CHUPA BRUNO', 'BRUNO VIADO', 'BRUNINHO VIADO', 'MINHA PICA', 'PICA', 'BOIOLA', 'BRUNO BOIOLA', 'BRUNO CATATAU', 'BRUNO PIROCA', 'BRUNINHO PIROCA', 'VOU TE COMER', 'COMEDOR', 'SEU COMEDOR', 'BRUNO UNHAO', 'BRUNO UNHÃO', 'BRUNINHO UNHÃO', 'BRUNO DEDO PODRE', 'BRUNINHO DEDO PODRE', 'FDP', 'PUTA', 'BRUNO PUTA', 'BRUNINHO PUTA', 'PUTA BRUNO', 'PUTA BRUNINHO', 'BRUNO CHUPADOR', 'BRUNINHO CHUPADOR', 'CHUPADOR BRUNO', 'BRUNO MAMADOR', 'BRUNINHO MAMADOR', 'BRUNINHO SUGADOR', 'BRUNO SUGADOR', 'GOZANDO', 'GOZADO', 'GOZA', 'BRUNO MINHA PUTA', 'BRUNINHO MINHA PUTA', 'BUNDA CABELUDA', 'BRUNO VADIA', 'BRUNINHO VADIA', 'BRUNO CADELA', 'VIADO BRUNO', 'BRUNINHO VIADO', 'VIADO BRUNINHO', 'POLTO COMEDOR', 'POLTINHO COMEDOR', 'MATHEUS POLTO COMEDOR']
let musica = new Audio("../audios/narutoaudio.mp3");

// 🎵 Evento para tocar a música
btnPlay.addEventListener("click", () => musica.play());

// 🛑 Evento para parar a música
btnStop.addEventListener("click", () => {
    musica.pause();
    musica.currentTime = 0;
});

// ➕ Adicionar nome à lista
btnEnviarNomes.addEventListener('click', adicionarNome);
inputNome.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarNome();
});

function adicionarNome() {
    let ninja = inputNome.value.trim();
    let maiusculo = ninja.toUpperCase()

    if (!ninja) {
        alert('Por favor, digite um nome.');
        return;
    }

    if (listaNinjas.includes(ninja)) {
        alert('Esse ninja já está na lista.');
        return;
    }

    if(nnomesProibidos.includes(maiusculo)){
        alert('POLTO OU MOE SEUS OTÁRIOS, DIGITA OUTRO NOME SEUS COMÉDIAS \u{1F595}')
        return
    }

    listaNinjas.push(ninja);

    let nome = document.createElement('li');
    nome.style.listStyle = 'none'
    nome.style.fontSize = '12pt'
    nome.style.lineHeight = '1.6'
    nome.style.letterSpacing = '3px'
    nome.textContent = ninja;
    nome.classList.add("ninja-list-item"); // Classe para CSS

    espacoNomes.appendChild(nome);
    inputNome.value = ''; // Limpa o input 

}

// 🎲 Sorteio de confronto e remoção dos sorteados
btnSortear.addEventListener('click', () => {
    let caixaNome1 = document.getElementById('nome1');
    let caixaNome2 = document.getElementById('nome2');

    if (listaNinjas.length < 2) {
        alert("Adicione pelo menos dois ninjas para sortear.");
        return;
    }

    let [ninja1, ninja2] = sortearDiferentes(listaNinjas);

    caixaNome1.style.fontSize = "16pt"
    caixaNome2.style.fontSize = "16pt"
    caixaNome1.style.textAlign = "center"
    caixaNome2.style.textAlign = "center"
    caixaNome1.style.letterSpacing = '3px'
    caixaNome2.style.letterSpacing = '3px'
    caixaNome1.textContent = ninja1;
    caixaNome2.textContent = ninja2;

    // Remover os sorteados da lista de ninjas
    listaNinjas = listaNinjas.filter(ninja => ninja !== ninja1 && ninja !== ninja2);

    // Atualizar a exibição da lista
    atualizarLista();
});

// Função para sortear dois nomes diferentes
function sortearDiferentes(lista) {
    let copiaLista = [...lista]; // Clonar a lista para evitar modificar a original
    let indice1 = Math.floor(Math.random() * copiaLista.length);
    let ninja1 = copiaLista.splice(indice1, 1)[0]; // Remove e retorna

    let indice2 = Math.floor(Math.random() * copiaLista.length);
    let ninja2 = copiaLista[indice2];

    return [ninja1, ninja2];
}

// 🔄 Atualiza a lista visualmente
function atualizarLista() {
    espacoNomes.innerHTML = '';
    listaNinjas.forEach(ninja => {
        let nome = document.createElement('li');
        nome.textContent = ninja;
        nome.classList.add("ninja-list-item");
        espacoNomes.appendChild(nome);
    });
}

// 🔄 Limpar lista e sorteios
btnLimpar.addEventListener('click', () => {
    listaNinjas = [];
    espacoNomes.innerHTML = '';
    
});

btnLimparNomesSorteados.addEventListener('click', zerar)

function zerar(){
    let sorteio1 = document.getElementById('nome1');
    let sorteio2 = document.getElementById('nome2');
    sorteio1.innerHTML = ''
    sorteio2.innerHTML = ''
}

function voltar(){
    window.location.href = 'index.html'
}

