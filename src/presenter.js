const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "Hola ";  // Cambiado a 'let' para permitir la modificación
  const nombreValue = nombre.value;
  const generoValue = genero.value;

  if (generoValue.toLowerCase() === "masculino") {
    saludo = "Hola Muchacho ";
  } else if (generoValue.toLowerCase() === "femenino") {
    saludo = "Hola Muchacha ";
  }

  div.innerHTML = "<p>" + saludo + nombreValue + "</p>";
});
