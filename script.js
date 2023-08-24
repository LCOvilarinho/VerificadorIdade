function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')

  }else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - (fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança 
            img.setAttribute('src', 'foto-criança-m.png')  
        } else if (idade < 21) {
            // Jovem
            img.setAttribute("src", "foto-jovem-m.png"); 
        } else if (idade < 50) {
            // Adulto
            img.setAttribute("src", "foto-adulto-m.png"); 
        } else {
            // Idoso
            img.setAttribute("src", "foto-idoso-m.png"); 
        } 
        
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          // Criança
          img.setAttribute("src", "foto-criança-f.png"); 
        } else if (idade < 21) {
          // Jovem
         img.setAttribute("src", "foto-jovem-f.png"); 
        } else if (idade < 50) {
          // Adulta
          img.setAttribute("src", "foto-adulta-f.png"); 
        } else {
          // Idosa
          img.setAttribute("src", "foto-idosa-f.png");
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${gênero}, com ${idade} anos de idade.`
    res.appendChild(img)

  }
}