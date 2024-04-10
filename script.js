function adicionarCampo() {
    var jsonObject = {};
    
    var nome = document.getElementById('inputNome')
    jsonObject['nome'] = nome.value;

    var posicao1 = document.getElementById('inputPosicao1')
    jsonObject['posicao1'] = posicao1.options[posicao1.selectedIndex].text;

    var posicao2 = document.getElementById('inputPosicao2')
    jsonObject['posicao2'] = posicao2.options[posicao2.selectedIndex].text;

    var habilidade = document.getElementById('inputHabilidade')
    jsonObject['habilidade'] = habilidade.options[habilidade.selectedIndex].text;

    var resistencia = document.getElementById('inputResistencia')
    jsonObject['resistencia'] = resistencia.options[resistencia.selectedIndex].text;

    var ataque = document.getElementById('inputAtaque')
    jsonObject['ataque'] = ataque.options[ataque.selectedIndex].text;

    var defesa = document.getElementById('inputDefesa')
    jsonObject['defesa'] = defesa.options[defesa.selectedIndex].text;
    
    var json = JSON.stringify(jsonObject, null, 2);
    var listJogadores = document.getElementById('listJogadores');
    
    if (listJogadores.textContent) {
        listJogadores.textContent += '\n' + json;
    } else {
        listJogadores.textContent = json;
    }

    limparCampos();

    nome.focus();
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


function limparLista() {
    var listJogadores = document.getElementById('listJogadores');
    
    listJogadores.textContent = '';
}
