let num = document.getElementById('txtNum')
let select = document.getElementById('seltab')
let res = document.getElementById('res')
let numeros = []

function adicionar() {
    
    if (num.value.length == 0 || num.value > 100) {
        window.alert('Por favor, adicione um número válido!')
    } else {
        numeros.push(Number(num.value))
        console.log(numeros)   
        let item = document.createElement('option')
        item.text += `Valor ${num.value} adicionado`
        select.appendChild(item)
    }
}

function finalizar() {
    res.innerHTML = `Ao todo temos ${numeros.length} números cadastrados.`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, numeros)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, numeros)}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${numeros.reduce((a, b) => a + b, 0)}.</p>`
}