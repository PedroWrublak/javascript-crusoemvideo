function contar() {
    let start = document.getElementById('txtStart');
    let end = document.getElementById('txtEnd');
    let passo = document.getElementById('txtPasso');

    let res = document.getElementById('res');
    
    if (start.value.length == 0 || end.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar!';
        // window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let s = Number(start.value);
        let e = Number(end.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        if (s < e) {
            // Contagem crescente
            for (let c = s; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for (let c = s; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3c1}`;
       
    }



}

