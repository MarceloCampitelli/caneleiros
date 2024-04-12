const jogador01 = {
    "id":"1",
    "nome": "Marcelo",
    "posicao1": "Goleiro",
    "posicao2": "Goleiro",
    "habilidade": "3",
    "resistencia": "3",
    "ataque": "3",
    "defesa": "3",
    "numero": "28"
    };

const jogador02 = {
    "id":"2",
    "nome": "Campitelli",
    "posicao1": "Goleiro",
    "posicao2": "Goleiro",
    "habilidade": "3",
    "resistencia": "3",
    "ataque": "3",
    "defesa": "3",
    "numero": "28"
    };

const jogador03 = {
    "id":"3",
    "nome": "Junior",
    "posicao1": "Goleiro",
    "posicao2": "Goleiro",
    "habilidade": "3",
    "resistencia": "3",
    "ataque": "3",
    "defesa": "3",
    "numero": "28"
};

var jogadores = [];

var escalacao = [];
  
document.addEventListener("DOMContentLoaded", inicializarVariavel);

function inicializarVariavel() {
    jogadores.push(jogador01);
    jogadores.push(jogador02);
    jogadores.push(jogador03);
    //jogadores.push(jogador04);

    listNomes();
}

function listNomes() {
    jogadores.forEach( jogador => addList(jogador, "addNome"))
}

function addList(jogador, local) {
    const option = document.createElement("option");
    const select = document.getElementById(local);
    option.id = jogador.id;
    option.classList.add(local + jogador.id);
    option.text = jogador.nome;

    select.add(option);
}

function delList(jogador, local) {
    const cardParaExcluir = document.querySelector('.' + local + jogador.id);
    cardParaExcluir.parentNode.removeChild(cardParaExcluir);
}

function adicionarCampo() {
    var jogadorNovo = {};

    var id = jogadores.length + 1 + 12;
    
    jogadorNovo['id'] = id.toString();

    var nome = document.getElementById('inputNome')
    jogadorNovo['nome'] = nome.value;

    var posicao1 = document.getElementById('inputPosicao1')
    jogadorNovo['posicao1'] = posicao1.options[posicao1.selectedIndex].text;

    var posicao2 = document.getElementById('inputPosicao2')
    jogadorNovo['posicao2'] = posicao2.options[posicao2.selectedIndex].text;

    var habilidade = document.getElementById('inputHabilidade')
    jogadorNovo['habilidade'] = habilidade.options[habilidade.selectedIndex].text;

    var resistencia = document.getElementById('inputResistencia')
    jogadorNovo['resistencia'] = resistencia.options[resistencia.selectedIndex].text;

    var ataque = document.getElementById('inputAtaque')
    jogadorNovo['ataque'] = ataque.options[ataque.selectedIndex].text;

    var defesa = document.getElementById('inputDefesa')
    jogadorNovo['defesa'] = defesa.options[defesa.selectedIndex].text;

    jogadorNovo['numero'] = (id + 100).toString();
    
    jogadores.push(jogadorNovo);

    addList(jogadorNovo, "addNome");

    limparCampos();
}

function limparCampos() {
    var cadJogadores = document.getElementById('cadJogadores');
    
    cadJogadores.reset();
}

function copiarLista() {
    var listJogadores = document.getElementById('listJogadores');
    var script = 'Separe os jogadores a seguir com base nas caracteristicas individuais balanceando os times de modo a deixar equilibrado: \n' + listJogadores.textContent;
    var range = document.createRange();
    var copiarTexto = script;

    var copiarTextArea = document.createElement('textarea');
    copiarTextArea.textContent = copiarTexto;
    document.body.appendChild(copiarTextArea);

    copiarTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(copiarTextArea);

    alert('Lista copiada para a área de transferência.');
}

function limparEscalacao() {
    const cardsParaExcluir = document.querySelectorAll('.card');
    cardsParaExcluir.forEach(function(card) {
        card.parentNode.removeChild(card);
    });
}

function varrerRegistro(registro) {
    const navCards = document.getElementById("cards");

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("jogador" + registro.id);

    const card01 = document.createElement("div");
    card01.classList.add("card-01");
    card.appendChild(card01);

    const card01Img = document.createElement("img");
    card01Img.classList.add("card-01-logo");
    card01Img.src = "caneleiros.jpg";
    card01Img.alt = "";
    card01.appendChild(card01Img);

    const card01Titulo = document.createElement("p");
    card01Titulo.classList.add("card-01-titulo");
    card01Titulo.textContent = "Caneleiros FC";
    card01.appendChild(card01Titulo);

    const card02 = document.createElement("div");
    card02.classList.add("card-02");
    card.appendChild(card02);

    const card02_1 = document.createElement("div");
    card02_1.classList.add("card-02-1");
    card02.appendChild(card02_1);

    const caracTitles = [
        { "Hab": registro.habilidade },
        { "Res": registro.resistencia },
        { "Atq": registro.ataque },
        { "Def": registro.defesa }
    ];

    for (let j = 0; j < caracTitles.length; j++) {
        const carac = caracTitles[j]; // Objeto { chave: valor }
        const chave = Object.keys(carac)[0]; // Chave do objeto
        const valor = carac[chave]; // Valor do objeto
    
        const cardCarac = document.createElement("div");
        cardCarac.classList.add("card-carac");
        card02_1.appendChild(cardCarac);
    
        const cardCaracTitulo = document.createElement("p");
        cardCaracTitulo.classList.add("card-carac-titulo");
        cardCaracTitulo.textContent = chave;
        cardCarac.appendChild(cardCaracTitulo);
    
        const cardCaracValor = document.createElement("p");
        cardCaracValor.classList.add("card-carac-valor");
        cardCaracValor.textContent = valor;
        cardCarac.appendChild(cardCaracValor);
    }

    const card02_2 = document.createElement("div");
    card02_2.classList.add("card-02-2");
    card02.appendChild(card02_2);

    const card02_2Img = document.createElement("img");
    card02_2Img.classList.add("card-02-2-img");
    card02_2Img.src = "marcelo.png";
    card02_2Img.alt = "";
    card02_2.appendChild(card02_2Img);

    const card03 = document.createElement("div");
    card03.classList.add("card-03");
    card.appendChild(card03);

    const card03Nome = document.createElement("div");
    card03Nome.classList.add("card-03-nome");
    card03.appendChild(card03Nome);

    const nomeJogador = document.createElement("p");
    nomeJogador.classList.add("nome-jogador", "margin");
    nomeJogador.textContent = registro.nome;
    card03Nome.appendChild(nomeJogador);

    const card03Atrib = document.createElement("div");
    card03Atrib.classList.add("card-03-atrib");
    card03.appendChild(card03Atrib);

    const card03AtribCarac = document.createElement("div");
    card03AtribCarac.classList.add("card-03-atrib-carac");
    card03Atrib.appendChild(card03AtribCarac);

    const posicoes = [registro.posicao1, registro.posicao2];
    for (let k = 0; k < posicoes.length; k++) {
        const posicao = document.createElement("p");
        posicao.classList.add("posicao-0" + (k + 1), "margin");
        posicao.textContent = posicoes[k];
        card03AtribCarac.appendChild(posicao);
    }

    const card03AtribNum = document.createElement("div");
    card03AtribNum.classList.add("card-03-atrib-num");
    card03Atrib.appendChild(card03AtribNum);

    const caracNum = document.createElement("p");
    caracNum.classList.add("carac-num", "margin");
    caracNum.textContent = registro.numero;
    card03AtribNum.appendChild(caracNum);

    navCards.appendChild(card);

    addList(registro, "delNome");
}

function criarCards() {
    registros.forEach(registro => {
        varrerRegistro(registro);
    });
}

function adicionarJogador() {
    const local = "addNome";
    var select = document.getElementById(local);
    var idJogador = select.options[select.selectedIndex].id;

    for (var i = 0; i < jogadores.length; i++) {
        if (jogadores[i].id === idJogador) {
            varrerRegistro(jogadores[i]);
            delList(jogadores[i], local)
        }
    }
}

function excluirJogador() {
    const local = "delNome";
    var select = document.getElementById(local);
    var idJogador = select.options[select.selectedIndex].id;
    const cardParaExcluir = document.querySelector('.jogador' + idJogador);
    if (cardParaExcluir) {
        cardParaExcluir.parentNode.removeChild(cardParaExcluir);

        for (var i = 0; i < jogadores.length; i++) {
            if (jogadores[i].id === idJogador) {
                delList(jogadores[i], local);
                addList(jogadores[i], "addNome");
            }
        }
    }
}