
let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palo = ["♦", "♥", "♠", "♣"];



function cartaRandom(valor,palo) {
let picaup = document.getElementById("picaup").innerHTML;
let numero = document.getElementById("numero").innerHTML;
let picadown = document.getElementById("picadown").innerHTML;
  
  //alert(picaup + numero + picadown)
  
  let aleatoriovalor = Math.floor(Math.random() * valor.length);
  let aleatoriopalo = Math.floor(Math.random() * palo.length);
  
  document.getElementById("numero").innerHTML = valor[aleatoriovalor];
  document.getElementById("picaup").innerHTML = palo[aleatoriopalo];
  document.getElementById("picadown").innerHTML = palo[aleatoriopalo];
 
    if (aleatoriopalo == 0 || aleatoriopalo == 1 ) {
    document.getElementById("picaup").style.color = "red";
    document.getElementById("numero").style.color = "red";
    document.getElementById("picadown").style.color = "red";
}
}

window.onload = function() {
  let randomNumber = Math.random() ;
  cartaRandom(valor,palo);
  }; 