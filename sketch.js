 
 let estaDibujando = false;
let anteriorX, anteriorY;

let tiempo = 0;
let velocidad = 0.5;
let factor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(79, 250, 68);
  strokeCap(ROUND); 
  strokeJoin(ROUND); 
  
}

function draw() { //dibujo linea
  if (estaDibujando) {
    let r = 139 + (mouseX / width) * 116;
    let g = 69 + (mouseY / height) * 85;
    let b = 19 + ((mouseX + mouseY) / (width + height)) * 216;


    strokeWeight(40); 
      stroke(r * factor, g * factor, b * factor );
      line(anteriorX, anteriorY, mouseX, mouseY);
  
      // Línea más delgada para degradado
      strokeWeight(10); 
      stroke(r * (factor * 2), g * (factor / 2), b * (factor / 2), 15);
      line(anteriorX, anteriorY, mouseX, mouseY);
  
      // Actualizar el factor y la posición anterior del ratón
      factor -= velocidad;
      anteriorX = mouseX;
      anteriorY = mouseY;
    





    tiempo += deltaTime / 10000 * velocidad;//tiempo y velocida que cambia el color
    if (tiempo >= 1 || tiempo <= 0) {
      velocidad *= -1;
    }
    factor = abs(sin(tiempo * velocidad));
    // factor1 = abs(sin(tiempo * velocidad));

    // Dibujar la curva
    noFill();
    let tamCurva = 2; // tamaño de la irregularidad de la curva, lo que hace al circulo
    let curvatura = 0.9; // ajuste la curvatura de la curva
    curveTightness(curvatura);
    stroke(r * factor, g * factor, b * factor);
    beginShape();
    curveVertex(anteriorX, anteriorY);
    let curva = 100;
    for (let i = 0; i < curva; i++) {
      let x = map(i, 0, curva - 1, anteriorX, mouseX) + random(-tamCurva, tamCurva);
      let y = map(i, 0, curva - 1, anteriorY, mouseY) + random(-tamCurva, tamCurva);
      curveVertex(x, y);
    }
    curveVertex(mouseX, mouseY);
    endShape();

  }
  anteriorX = mouseX;
  anteriorY = mouseY;
}
// cuando el mouse se arrastra, pinta
function mouseReleased() {
  estaDibujando = true;
}

// function mouseReleased() {
//   estaDibujando = false;
// }








