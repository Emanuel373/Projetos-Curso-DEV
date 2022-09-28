function calcular(tipo, valor){
    console.log(tipo, valor);

    if(tipo === 'acao') {
        if(valor === 'c'){
            //Limpar Visor
            document.getElementById('resultado').value = '';
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor;
        }

        if(valor === '='){
            var valor_campo = eval(document.getElemnetById('resultado').value) = 
            document.getElementById('resultado').value = valor_campo;

        }

    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }
}

