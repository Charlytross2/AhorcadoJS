let palabras = ["ALURA", "JAVASCRIPT", "AHORCADO"],
  letrasIncorrectas = [],
  palabra = escogerPalabra(),
  regex = /^[A-Z]{1}$/,
  letras = separarLetras(palabra),
  error = 0,
  contador = 0,
  letrasUsadas = [];
const sectionErroneas = document.querySelector(".palabras-erroneas"),
  p = document.createElement("p"),
  modal = document.querySelector(".modal"),
  closeModal = document.querySelector(".modal__close"),
  resultadoModal = document.querySelector(".modal__resultado");

dibujarSoportes();
dibujarAhorcado();
document.addEventListener("keydown", (e) => {
  let nombreTecla = e.key;
  if (regex.test(nombreTecla)) {
    pintarLetras(nombreTecla);
  } else {
    if (nombreTecla !== "CapsLock") {
      modal.classList.add("modal--show");
      resultadoModal.textContent = "Solo letras mayusculas";
      closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal--show");
      });
    }
  }
});

function escogerPalabra() {
  palabras = JSON.parse(localStorage.getItem("arreglo"))
  let indice = Math.floor(Math.random() * (palabras.length - 1 - 0 + 1) + 0);
  return palabras[indice];
}

function separarLetras(palabra) {
  let letras = [];
  for (let i = 0; i < palabra.length; i++) {
    letras.push(palabra[i]);
  }
  return letras;
}

function dibujarSoportes() {
  let x = 0,
    y = 570;
  contexto.font = "32px Victor Mono";
  contexto.fillStyle = "#fff";
  //dibujamos los soportes
  for (let k = 0; k < letras.length; k++) {
    contexto.moveTo(x, y);
    contexto.lineTo(x + 50, y);
    contexto.strokeStyle = "#fff";
    contexto.lineWidth = 3;
    contexto.stroke();
    x += 70;
  }
}

function pintarLetras(letra) {
  if (letras.includes(letra)) {
    dibujarLetrasCanvas(letra);
  } else {
    if (!letrasIncorrectas.includes(letra) && error < 8) {
      letrasIncorrectas.push(letra);
      error++;
      elegirDibujo(error);
      p.textContent = letrasIncorrectas.join(" ");
      sectionErroneas.appendChild(p);
    }
  }
  if (error == 8) {
    modal.classList.add("modal--show");
    resultadoModal.textContent = "PERDISTE";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show");
      location.reload();
    });
  }
}

function dibujarLetrasCanvas(letra) {
  let x = 0,
    y = 570;
  if (!letrasUsadas.includes(letra)) {
    for (let j = 0; j < letras.length; j++) {
      if (letra == letras[j] && contador < letras.length) {
        contexto.fillText(letra, x + 15, y - 5);
        contador++;
        letrasUsadas.push(letra);
      }
      x += 70;
    }
  }
  if (contador == letras.length) {
    modal.classList.add("modal--show");
    resultadoModal.textContent = "GANASTE";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show");
      location.reload();
    });
  }
}