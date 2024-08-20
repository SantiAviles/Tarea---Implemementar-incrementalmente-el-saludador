const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#resultado-div");
const espButton = document.querySelector("#esp-button");
const ingButton = document.querySelector("#ing-button");

let idioma = 'es'; // Por defecto en español

// Evento para el botón de español
espButton.addEventListener("click", () => {
  idioma = 'es';
  espButton.classList.add("active");
  ingButton.classList.remove("active");
});

// Evento para el botón de inglés
ingButton.addEventListener("click", () => {
  idioma = 'en';
  ingButton.classList.add("active");
  espButton.classList.remove("active");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "";
  const nombreValue = nombre.value;
  const generoValue = genero.value.toLowerCase();
  const edadValue = Number(edad.value);

  if (idioma === 'es') {
    // Saludos en español
    if (generoValue === "masculino") {
      if (edadValue <= 15) {
        saludo = "Hola niño ";
      } else if (edadValue > 15 && edadValue <= 30) {
        saludo = "Hola joven ";
      } else if (edadValue > 30) {
        saludo = "Hola señor ";
      }
    } else if (generoValue === "femenino") {
      if (edadValue <= 15) {
        saludo = "Hola niña ";
      } else if (edadValue > 15 && edadValue <= 30) {
        saludo = "Hola señorita ";
      } else if (edadValue > 30) {
        saludo = "Hola señora ";
      }
    } else {
      saludo = "Hola ";
    }
  } else if (idioma === 'en') {
    // Saludos en inglés
    if (generoValue === "masculino") {
      if (edadValue <= 15) {
        saludo = "Hello boy ";
      } else if (edadValue > 15 && edadValue <= 30) {
        saludo = "Hello young man ";
      } else if (edadValue > 30) {
        saludo = "Hello man ";
      }
    } else if (generoValue === "femenino") {
      if (edadValue <= 15) {
        saludo = "Hello girl ";
      } else if (edadValue > 15 && edadValue <= 30) {
        saludo = "Hello young lady ";
      } else if (edadValue > 30) {
        saludo = "Hello lady ";
      }
    } else {
      saludo = "Hello ";
    }
  }

  div.innerHTML = "<p>" + saludo + nombreValue + "</p>";
});
