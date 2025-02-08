let diametro = 400
let messaggio = document.querySelector("#message")

function setup() {
  createCanvas(600, 600);
  background(220);
  // da qui disegnamo i cerchi concentrici di un bersaglio
  fill(255, 0, 0)
  circle(width/2, height/2, diametro)
  
  fill(255, 255, 255)
  circle(width/2, height/2, diametro - 100)

  fill(255, 0, 0)
  circle(width/2, height/2, diametro - 200)
  
  fill(255, 255, 255)
  circle(width/2, height/2, diametro - 300)

  fill(0, 0, 0)
  circle(width/2, height/2, diametro - 350)
  
  
}

function draw() {
  
}

function mouseClicked(event){
  // width/2, height/2
  console.log("EEEEEEEEEEEEEEE")
  let r = diametro / 2
  // 1. Calcolare la distanza fra il centro del cerchio e il punto cliccato
  // 2. SE la distanza calcolata è minore o uguale del raggio -> ho cliccato nel cerchio
  let centroX = width/2
  let centroY = height/2
  let distanzaX = mouseX
  let distanzaY = mouseY

  let puntoX = centroX - distanzaX
  let puntoY = centroY - distanzaY

  if((puntoX <= r)& (puntoY <= r)){
    messaggio.innerHTML(`Hai cliccato il bersaglio! Hai vinto`)
  }
  else{
    messaggio.innerHTML(`Hai perso!`)
  }


  
  
  console.log(mouseX, mouseY)


  
}

addEventListener("mouseClicked", mouseClicked())
    