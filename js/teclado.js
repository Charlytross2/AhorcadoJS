const teclas = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "BACKSPACE"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["SPACE"],
];

function cargarTeclado() {
  const teclado = document.querySelector(".teclado__container");
  let vacio = '<div class="tecla-vacia"></div>';
  const capas = teclas.map((capa) => {
    return capa.map((tecla) => {
      if (tecla === "BACKSPACE")
        return `<button class="tecla tecla-delete">${tecla}</button>`;
      if (tecla === "SPACE")
        return `<button class="tecla tecla-space">${tecla}</button>`;
      return `<button class="tecla tecla-normal">${tecla}</button>`;
    });
  });

  capas[1].unshift(vacio);
  capas[2].unshift(vacio);

  const htmlCapas = capas.map((capa) => {
    return capa.join(" ");
  });
  teclado.innerHTML = "";
  htmlCapas.forEach(
    (capa) => (teclado.innerHTML += `<div class="capa">${capa}</div>`)
  );
  const input = document.querySelector(".input");
  document.querySelectorAll(".tecla").forEach((tecla) => {
    tecla.addEventListener("click", () => {
      if (tecla.textContent === "BACKSPACE" && input.value !== null) {
        let contenido = input.value;
        let borrado = contenido.substr(0, contenido.length - 1);
        input.value = borrado;
      } else if (tecla.textContent === "SPACE") input.value += " ";
      else {
        input.value += tecla.textContent;
        tecla.classList.add("presionado");
      }
    });
  });
}
cargarTeclado();
