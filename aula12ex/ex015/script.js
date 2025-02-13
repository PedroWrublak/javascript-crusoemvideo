function verify() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
               // Criança 
               img.setAttribute('src', 'imagem1.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagem1.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagem1.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagem1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'imagem2.png')
             } else if (idade < 21) {
                 // Jovem
                 img.setAttribute('src', 'imagem2.png')
             } else if (idade < 50) {
                 // Adulto
                 img.setAttribute('src', 'imagem2.png')
             } else {
                 // Idoso
                 img.setAttribute('src', 'imagem2.png')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}