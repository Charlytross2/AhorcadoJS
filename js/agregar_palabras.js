const textArea = document.getElementById("main-textarea"),
  btnGuardar = document.querySelector(".btn-guardar"),
  validacionRegex = /^[A-Z]{3,8}$/,
  modal = document.querySelector(".modal"),
  closeModal = document.querySelector(".modal__close"),
  resultadoModal = document.querySelector(".modal__resultado");
const localPalabras = JSON.parse(localStorage.getItem("arreglo"));

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textArea.value;
  if (validacionRegex.test(texto)) {
    localPalabras.push(texto);
    localStorage.setItem("arreglo",JSON.stringify(localPalabras));
    modal.classList.add("modal--show");
    resultadoModal.textContent =
      "Palabra agregada correctamente";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show");
      location.href = "../html/juego.html";
    });
  } else {
    modal.classList.add("modal--show");
    resultadoModal.textContent =
      "Solo letras mayusculas y no mas de 8 caracteres";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show");
    });
  }
  textArea.value = null;
});
