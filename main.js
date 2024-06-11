  // Seleciona o botão pelo ID
  var button = document.getElementById('changeColorButton');

  // Adiciona um event listener para 'click'
  button.addEventListener('click', function() {
    // Gera uma cor aleatória
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Muda a cor de fundo do body
    document.body.style.backgroundColor = randomColor;
  });