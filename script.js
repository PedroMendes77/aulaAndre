function enviar(){
    const nome = document.getElementById("nome").value
    const assunto = document.getElementById("assunto").value
    const menssagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    
    const msg = encodeURIComponent(menssagem)
    window.open(`https://wa.me/5541999344617?text=${msg}`)
}