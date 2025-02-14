let num = document.getElementById('txtNum')
let select = document.getElementById('seltab')
let res = document.getElementById('res')
let numeros = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
    
function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        for (let pos in numeros) {
            if (numeros[pos] > maior) {
                maior = numeros[pos]
            } else {
                menor = numeros[pos]
            }
        }
        soma = numeros.reduce((a, b) => a + b, 0)
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

// No curso a soma foi feita com for, entretanto eu utilizei reduce