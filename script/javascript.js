//ideato, progettato e testato da Stefano Caiazzo & co.
//Dichiarazione delle variabili
var scelta = -1;
var numindo = Math.floor(Math.random() * 101); 
var t = 0;
var start = 0;
var s = 5;
var tempo = 0;
var stop = 0;
var lv = 1;
var max = 500;
var int;
var perso = new Audio('sound/Super Mario Game Over Sound Effect.mp3');
var gg = new Audio('sound/FF VII victory theme.mp3');
//Pulsanti di start nella home che fanno anche startare il conto alla rovescia dei 5 secondi


function inizio() {
    document.getElementById('home').style.display = "none";
    document.getElementById('gioco').style.display = "initial";
    start = new Date().getTime();
    //Conto alla rovescia dei 5 secondi
  int = setInterval(function(){
    document.getElementById("count").innerHTML = s+" secondi";
    //Tempo scaduto
    if (s<0) {
      lost();
    }
    s = s - 1;
    }, 1000)
}
//Tasto per confermare il numero inserito, ogni volta che viene premuto i tentativi vengono incrementati di 1
//Ad ogni invio controlla se il numero inserito è maggiore, minore o uguale e ressetta il countdown

function conferma() {
    s = 5;
    t = t+1;
    scelta = parseInt(document.getElementById("input").value);
    if (scelta > numindo) {
       document.getElementById("risposta").innerHTML = "Il numero da indovinare e' piu' piccolo";
    } else if ((scelta < numindo)) {
        document.getElementById("risposta").innerHTML = "Il numero da indovinare e' piu' grande";
    } else if ((scelta == numindo)) {
      //Se il numero è uguale a quello da indovinare, porta allo screen della vittoria e mostra le varie info
      clearInterval(int);
      document.getElementById('gioco').style.display = "none";
      document.getElementById('complimenti').style.display = "initial";
      gg.play();
      document.getElementById("info").innerHTML = "Ci hai messo " +t+ " tentativi e "+ (new Date().getTime() - start) / 1000 + " secondi";
    } else {
        document.getElementById("risposta").innerHTML = "NaN";
    }
    document.getElementById("tentativi").innerHTML = t+" tentativi";
    if(t==15) {
      lost();
    }
  };
//Pulsante restart per ricominciare da capo
function retry() {
    clearInterval(int);
    lv = 1;
    s = 5;
    document.getElementById('home').style.display = "initial";
    document.getElementById('gioco').style.display = "none";
    document.getElementById('complimenti').style.display = "none";
    document.getElementById('game_over').style.display = "none";
    numindo =  Math.floor(Math.random() * 101); 
    t = 0;
    start = new Date().getTime();
    document.getElementById("tentativi").innerHTML = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("risposta").innerHTML = "";
    perso.pause();
    perso.currentTime=0;
    gg.pause();
    gg.currentTime=0;
  };

function lost(){
  document.getElementById('gioco').style.display = "none";
  document.getElementById('game_over').style.display = "initial";
  clearInterval(int);
  perso.play();
}
  /*

//Starta e stoppa una musica per il piacere dell'utente
onEvent("startM", "click", function(event) {
  stopSound();
  setTimeout(function() {
    playSound("Professor Layton Theme Song.mp3", false);
  }, 1);
});
onEvent("stopM", "click", function(event) {
  stopSound();
});

//Pulsante per passare al livello successivo, al livello 2 il numero sarà tra 0 e 500 e poi raddoppierà ogni volta
onEvent("next", "click", function(event) {
  lv = lv + 1;
  setText("count", "5");
  setScreen("Gioco");
  if (lv==2) {
    numindo = randomNumber(0, 500);
    setText("max", "0 e 500");
  } else {
    max = max*2;
    numindo = randomNumber(0, max);
    setText("max", "0 e " + max);
  }
  s = 5;
  t = 0;
  start = getTime();
  setText("risposta", "");
  setText("tentativi", "");
  //Restarta il conto alla rovescia
  timedLoop(1000, function() {
    setText("count", s);
    s = s - 1;
    //Tempo scaduto
    if (s<0) {
      stopSound();
      setScreen("persoimage");
      playSound("Super Mario Game Over Sound Effect.mp3", false);
      setTimeout(function() {
        setScreen("gameover");
      }, 4000);
      stopTimedLoop();
    }
  });
  stopSound();
});

//Pulsante per andare alla schermata dei beta-tester
onEvent("thank", "click", function(event) {
  setScreen("Beta");
});
//Pulsante per tornare alla home dalla schermata dei beta-tester
onEvent("back", "click", function(event) {
  setScreen("home");
  stopSound();
});
//Easteregg del beta-tester masamune
onEvent("masa", "click", function(event) {
  stopSound();
  setTimeout(function() {
    playSound("Tuturu_.mp3");
  }, 10);
});
//Easteregg della beta-tester frigo
onEvent("frigio", "click", function(event) {
  stopSound();
  setTimeout(function() {
    playSound("Akasaka Ryuunosuke - Self introduction.mp3");
  }, 10);
});
*/