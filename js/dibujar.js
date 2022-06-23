const canvas = document.getElementById("canvas");
const contexto = canvas.getContext("2d");
function dibujarBase() {
  //Base
  contexto.moveTo(150, 500);
  contexto.lineTo(650, 500);
}

function dibujarSoporte() {
  //Soporte
  contexto.moveTo(200, 500);
  contexto.lineTo(200, 150);
}

function dibujarBaseSup() {
  //Base superior
  contexto.moveTo(200, 150);
  contexto.lineTo(450, 150);
}

function dibujarSoporteMu() {
  //soporte muñeco
  contexto.moveTo(450, 150);
  contexto.lineTo(450, 200);
}

function dibujarCabeza() {
  //cabeza
  contexto.arc(450, 250, 50, -1.5, Math.PI * 2);
}

function dibujarCuello() {
  //cuello
  contexto.moveTo(450, 300);
  contexto.lineTo(450, 330);
}

function dibujarBrazoIzq() {
  //brazo Izquierdo
  contexto.moveTo(450, 330);
  contexto.lineTo(390, 350);
}

function dibujarBrazoDer() {
  //brazo derecho
  contexto.moveTo(450, 330);
  contexto.lineTo(510, 350);
}

function dibujarTronco() {
  //tronco del muñeco
  contexto.moveTo(450, 330);
  contexto.lineTo(450, 420);
}

function dibujarPieIzq() {
  //pie izquierdo
  contexto.moveTo(450, 420);
  contexto.lineTo(400, 450);
}

function dibujarPieDer() {
  //pie derecho
  contexto.moveTo(450, 420);
  contexto.lineTo(500, 450);
}

function dibujarAhorcado() {
  dibujarBase();
  dibujarSoporte();
  dibujarBaseSup();

  contexto.strokeStyle = "#fff";
  contexto.lineWidth = 3;
  contexto.stroke();
}

function elegirDibujo(err) {
  switch (err) {
    case 1:
      dibujarSoporteMu();
      break;
    case 2:
      dibujarCabeza();
      break;
    case 3:
      dibujarCuello();
      break;
    case 4:
      dibujarBrazoIzq();
      break;
    case 5:
      dibujarBrazoDer();
      break;
    case 6:
      dibujarTronco();
      break;
    case 7:
      dibujarPieIzq();
      break;
    case 8:
      dibujarPieDer();
      break;
  }
  contexto.strokeStyle = "#fff";
  contexto.lineWidth = 3;
  contexto.stroke();
}
