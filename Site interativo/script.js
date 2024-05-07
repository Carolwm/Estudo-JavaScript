function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12;
    msg.innerHTML = `agora sao ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = "#c29d57"
    } 
    else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#517EDB'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = '#201F33'
    }
}
