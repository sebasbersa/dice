var jugador1 = document.querySelector(".img1");
var jugador2 = document.querySelector(".img2");

var dado1 = "images/dice1.png";
var dado2 = "images/dice2.png";
var dado3 = "images/dice3.png";
var dado4 = "images/dice4.png";
var dado5 = "images/dice5.png";
var dado6 = "images/dice6.png";

var resultado = "";

function rotar_dados(){
  var x = Math.floor(Math.random()*6)+1
  if (x === 1){
    return dado1;
  } else if (x === 2){
    return dado2;
  }else if (x === 3){
    return dado3;
  }else if (x === 4){
    return dado4;
  }else if (x === 5){
    return dado5;
  }else if (x === 6){
    return dado6;
  }
}

function convertir(p){
  if (p.getAttribute("src") === dado1){
    return 1;
  }else if (p.getAttribute("src") === dado2){
    return 2;
  }else if (p.getAttribute("src") === dado3){
    return 3;
  }else if (p.getAttribute("src") === dado4){
    return 4;
  }else if (p.getAttribute("src") === dado5){
    return 5;
  }else if (p.getAttribute("src") === dado6){
    return 6;
  }

}


function evaluar(a,b){
  var m = convertir(a);
  var n = convertir(b);
  if (m>n){
    document.querySelector(".container h1").innerText = "Jugador 1 ha ganado";

  } else if (m<n){
    document.querySelector(".container h1").innerText = "Jugador 2 ha ganado";

  }else if (m === n){
    document.querySelector(".container h1").innerText = "Empate";
  }

}

jugador1.setAttribute("src",rotar_dados());
jugador2.setAttribute("src",rotar_dados());
evaluar(jugador1,jugador2);



/*document.querySelector("a").setAttribute("href","https://facebook.com" )*/
