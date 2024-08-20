
const Nombre = document.querySelector("#nombre");
const form = document.querySelector("#hola-nombre");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = Nombre.value;

  div.innerHTML = "<p>Hola, " + nombre + "!</p>";
});
