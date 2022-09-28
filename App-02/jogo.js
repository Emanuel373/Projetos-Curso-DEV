var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 5;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'Normal'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'Dificil'){
    criaMosquitoTempo = 1000;
}else{
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() { 
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval( function(){
    
    tempo -= 1;

    if(tempo < 0){
        clearInterval('tempo_jogo')
        clearInterval('CriaMosca')
        window.location.href = 'winner.html'
    }else{
        document.getElementById('tempo_jogo').innerHTML = tempo;
    }
}, 120000)

function posicaoRadomica() {

    //remover mosquito anterior (Caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();
        
        if(vidas > 3){
            window.location.href = 'game_over.html';

        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY);

    //Criar elemento HTML

    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca';
    mosca.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosca);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() *6);
    
    switch(classe){
        case 0:
            return 'mosca1';

        case 1:
            return 'mosca2';

        case 2:
            return 'mosca3';

        case 3:
            return 'mosca4';

        case 4:
            return 'mosca5';

        case 5:
            return 'mosca6';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() *2);

    switch(classe){
        case 0: 
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
