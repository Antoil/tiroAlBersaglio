let diametro = 400;
let messaggio = document.querySelector("#message");

function setup() {
  createCanvas(600, 600);
  background(220);
  // Disegnamo i cerchi concentrici di un bersaglio
  fill(255, 0, 0);
  circle(width / 2, height / 2, diametro);
  
  fill(255, 255, 255);
  circle(width / 2, height / 2, diametro - 100);

  fill(255, 0, 0);
  circle(width / 2, height / 2, diametro - 200);
  
  fill(255, 255, 255);
  circle(width / 2, height / 2, diametro - 300);

  fill(0, 0, 0);
  circle(width / 2, height / 2, diametro - 350);
}

function draw() {
  
}

function calcDist(x1, y1, x2, y2){

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function mouseClicked() {
  let centroX = width / 2;
  let centroY = height / 2;
  let r = diametro / 2;
  let rCentro = 25
  
  // 1. Calcolare la distanza fra il centro del cerchio e il punto cliccato
  let distanza = calcDist(mouseX, mouseY, centroX, centroY);

  // 2. SE la distanza calcolata è minore o uguale del raggio -> ho cliccato nel cerchio
  if(distanza <= rCentro){
            messaggio.innerHTML = `Hai cliccato il centro del bersaglio coordinate (X: ${mouseX}; Y: ${mouseY})! Hai stra vinto!!!`;
    }
  else if(distanza <= r) {
    messaggio.innerHTML = `Hai cliccato il bersaglio ai punti (X: ${mouseX}; Y: ${mouseY})! Hai vinto`;
  } else {
    messaggio.innerHTML = `Hai cliccato il bersaglio ai punti (X: ${mouseX}; Y: ${mouseY})!Hai perso!`;
  }

  console.log(mouseX, mouseY);
}