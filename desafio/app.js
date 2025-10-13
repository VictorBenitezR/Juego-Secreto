let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function buttonClick() {
  alert("El boton fue clickeado");
}

const promptFunction = () => {
  let userInput = prompt("Ingresa el nombre de la ciudad: ");
  alert(`Estuve por ${userInput}, y me acorde de ti!`);
};

function alertFunction() {
  alert("Yo amo JS! :)");
}

const suma = () => {
  let a = parseInt(prompt("Ingresa el primer numero: "));
  let b = parseInt(prompt("Ingresa el segundo numero: "));
  let result = a + b;
  alert(`El resultado de ${a} + ${b} es ${result}`);
};
