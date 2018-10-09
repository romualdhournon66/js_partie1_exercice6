function show() {
  var firstNumber= document.getElementById('firstNumber').value;
  var secondNumber= document.getElementById('secondNumber').value;
  var result= firstNumber % secondNumber;
  if (isNaN(result)==true) {
    alert('Erreur, ceci n\'est pas un nombre');
  }
  else {
    alert('Le resultat est :'+ result);
  }
}
