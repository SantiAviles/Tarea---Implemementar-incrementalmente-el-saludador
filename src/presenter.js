const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo; 
  const nombreValue = nombre.value;
  const generoValue = genero.value;
  const edadValue = Number(edad.value);

  if (generoValue.toLowerCase() === "masculino") {
    if (edadValue <= 15){
      saludo = "Hola niño "
    } else if (edadValue > 15 && edadValue <= 30) {
      saludo = "Hola joven "
    } else if (edadValue > 30) {
      saludo = "Hola señor "
    }
  } else if (generoValue.toLowerCase() === "femenino") {
    if (edadValue <= 15){
      saludo = "Hola niña "
    } else if (edadValue > 15 && edadValue <= 30) {
      saludo = "Hola señorita "
    } else if (edadValue > 30) {
      saludo = "Hola señora "
    }
  } else {
    saludo = "Hola";
  }

  div.innerHTML = "<p>" + saludo + nombreValue + "</p>";
});
