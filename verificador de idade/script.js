function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade <18) {
                //jovem
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }


        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe.jpg')
                //criança
            } else if (idade <18) {
                img.setAttribute('src', 'menina.jpg')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'idosa.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero} || Idade: ${idade}`
        res.appendChild(img)
    }
}