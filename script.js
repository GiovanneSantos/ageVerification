function check() {
  var data = new Date()
  var year = data.getFullYear()
  var fyear = document.getElementById('txtyear')
  var res = document.getElementById('res')
  if (fyear.value.length == 0 || Number(fyear.value) > year) {
    alert('[REEOR] Check the data and try again!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var age = year - Number(fyear.value)
    var genere = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'photo')
    if (fsex[0].checked) {
      genere = 'Man'
      if (age >= 0 && age < 10) {
        // children
        img.setAttribute('src', 'imagens/criancaMenino.png')
      } else if (age < 21) {
        // teen
        img.setAttribute('src', 'imagens/jovemHomen.png')
      } else if (age < 50) {
        //Adult
        img.setAttribute('src', 'imagens/adultoHomen.png')
      } else if (age < 100) {
        //elderly
        img.setAttribute('src', 'imagens/idoso.png')
      } else {
        // Elder...
        img.setAttribute('src', 'imagens/elderMan.png')
      }
    } else if (fsex[1].checked) {
      genere = 'Woman'
      if (age >= 0 && age < 10) {
        // children
        img.setAttribute('src', 'imagens/criancaMenina.png')
      } else if (age < 21) {
        // teen
        img.setAttribute('src', 'imagens/jovemMenina.png')
      } else if (age < 50) {
        //Adult
        img.setAttribute('src', 'imagens/adultoMulher.png')
      } else if (age < 100) {
        //elderly
        img.setAttribute('src', 'imagens/idosa.png')
      } else {
        // Elder...
        img.setAttribute('src', 'imagens/elderFam.png')
      }
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `<p>Detected a ${genere} ${age} year old</p>`
  res.appendChild(img)
}
