let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
  let numero = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log("numero generado: " + numero);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento(
      "p",
      "Ya se han sorteado todos los numeros posibles. Reinicia el juego."
    );
  } else {
    if (listaNumerosSorteados.includes(numero)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numero);
      return numero;
    }
  }
}

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

const asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
};

mensajesIniciales();
let intentos = 1;
function verificarIntento() {
  let inputUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (inputUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Felicidades, has adivinado el numero secreto! En ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (inputUsuario < numeroSecreto) {
      asignarTextoElemento(
        "p",
        "El numero secreto es mayor. Intenta de nuevo."
      );
    } else {
      asignarTextoElemento(
        "p",
        "El numero secreto es menor. Intenta de nuevo."
      );
    }
    intentos++;
    limpiarCaja();
  }
}

const limpiarCaja = () => {
  document.getElementById("valorUsuario").value = "";
  document.getElementById("valorUsuario").focus();
};

const reiniciarJuego = () => {
  //Limpiamos la caja
  limpiarCaja();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  mensajesIniciales();
  //Asignamos el numero nuevo
  numeroSecreto = generarNumeroSecreto();
  console.log("nuevo numero secreto: " + numeroSecreto);
  intentos = 1;
};

function mensajesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
}

/*
function saludar() {
 console.log("Hola mundo!");
}

const saludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`);
}

function doble(numero) {
    return numero * 2;
}

const promedio = (a, b, c) => return (a + b +c) / 3;

function numMayor(a, b) {
    let mayor = a > b ? a : b;
    return mayor;
}

const multiplicar = (a) => return a * a;

const imc = (peso, altura) => {
    return peso / (altura * altura);
}

const factorial = (n) => {
    if (n === 0) {
    return 1;
    }
    return n * factorial(n -1);    
}

const cambioAGuaranies = (dolares) => {
    const valorDolar = 7000;
    return dolares * valorDolar;
}

const areaRectangulo = (base, altura) => {
    alert(`El area del rectangulo es ${base * altura}`);
    alert(`El perimetro del rectangulo es ${2 * (base + altura)}`);    
}

const tablaMultiplicar = (numero) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }    
}

let listaGenerica = [];

let lenguajes = ["Javascript", "Python", "Java"];

lenguajes.push("C#"); //Agrega un elemento al final del array
lenguajes.pop(); //Elimina el ultimo elemento del array

let mostrarLenguajes = () => {
    lenguajes.forEach( (lenguaje) => {
        console.log(lenguaje);
    } );    
}

let inversoLenguaje = () => {
    lenguajes.reverse();
    mostrarLenguajes();
}

const miArray = [10, 20, 30, 40, 50];
const n = miArray.length;

// Usamos dos índices en el bucle 'for'
for (let i = 0, j = n - 1; i < j; i++, j--) {
  // Paso 1: Guardar el valor inicial (miArray[i])
  let temp = miArray[i]; 
  
  // Paso 2: Mover el valor final (miArray[j]) al inicio (miArray[i])
  miArray[i] = miArray[j];
  
  // Paso 3: Mover el valor guardado (temp) al final (miArray[j])
  miArray[j] = temp;
}

console.log(miArray); // Salida: [50, 40, 30, 20, 10]

let promedioArray = (Array) => {
    let suma = 0;
    Array.forEach( (numero) => {
        suma += numero;
    } );
    return suma / Array.length;
}

let promedioArrayReduce = (Array) => {
    // .reduce() aplica un acumulador y devuelve el valor final (la suma)
    const suma = Array.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / Array.length;
}

// Ejemplo:
console.log(promedioArrayReduce([10, 20, 30])); // Salida: 20

const numMayoryMenor = (Array) => {
    let mayor = Math.max(...Array);
    let menor = Math.min(...Array);
    return {mayor, menor};
}

const numMayoryMenorManual = (Array) => {
    if (Array.length === 0) {
        return { mayor: undefined, menor: undefined };
    }
    
    let mayor = Array[0];
    let menor = Array[0];
    
    // Recorremos el array desde el segundo elemento (índice 1)
    for (let i = 1; i < Array.length; i++) {
        if (Array[i] > mayor) {
            mayor = Array[i];
        }
        if (Array[i] < menor) {
            menor = Array[i];
        }
    }
    
    return { mayor, menor };
}

let sumaElementosArray = (Array) => {
    let suma = 0;
    Array.forEach( (numero) => {
        suma += numero;
    });
    return suma; 
}

 * Busca manualmente un elemento en un array (sin .indexOf()).
 * @param {Array<any>} Array - El array a buscar.
 * @param {any} elemento - El elemento a encontrar.
 * @returns {number} La posición (índice) del elemento, o -1 si no se encuentra.

const encontrarElementoManual = (Array, elemento) => {
    // 1. Recorrer el array desde el primer elemento (índice i = 0)
    for (let i = 0; i < Array.length; i++) {
        
        // 2. Comprobar si el elemento actual (Array[i]) coincide con el buscado
        if (Array[i] === elemento) {
            
            // 3. Si hay coincidencia, DEVOLVER inmediatamente el índice y detener el bucle
            return i;
        }
    }

    // 4. Si el bucle termina sin encontrar el elemento (la función nunca retornó i),
    //    devolvemos -1 para indicar que no se encontró.
    return -1;
};

 * Busca un elemento en el array y devuelve su índice.
 * @param {Array<any>} Array - El array a buscar.
 * @param {any} elemento - El elemento a encontrar.
 * @returns {number} La posición (índice) del elemento, o -1 si no se encuentra.
const encontrarElementoNumerico = (Array, elemento) => {
    // El método .indexOf() ya devuelve el índice del elemento
    // o -1 si no lo encuentra.
    return Array.indexOf(elemento);
};


 * Suma los elementos de dos arrays posición por posición.
 * @param {Array<number>} array1 - El primer array de números.
 * @param {Array<number>} array2 - El segundo array de números.
 * @returns {Array<number>} Un nuevo array con la suma de los elementos correspondientes.
const sumarArrays = (array1, array2) => {
    // 1. Inicializar el nuevo array donde guardaremos los resultados.
    const resultado = [];

    // 2. Usar un bucle para recorrer los arrays. 
    //    Usamos la longitud de array1 (que debe ser igual a array2).
    for (let i = 0; i < array1.length; i++) {
        
        // 3. Sumar el elemento de array1 en el índice 'i' con el elemento de array2 en el mismo índice 'i'.
        const suma = array1[i] + array2[i];
        
        // 4. Añadir el resultado de la suma a nuestro nuevo array.
        resultado.push(suma);
    }

    // 5. Devolver el array con las sumas.
    return resultado;
};

const sumarArraysMap = (array1, array2) => {
    // Itera sobre array1 y utiliza el índice para acceder a array2
    return array1.map((valor, i) => {
        return valor + array2[i]; // Retorna la suma de los valores en la misma posición (i)
    });
};

const listaSumadaMap = sumarArraysMap(listaA, listaB);
console.log(listaSumadaMap); // Salida: [6, 12, 18, 24]

const array1 = [5, 10];
const array2 = [1, 2];

const resultado = []; // <--- 1. Tienes que crear el array de destino manualmente

array1.forEach((valor, i) => {
    const suma = valor + array2[i];
    resultado.push(suma); // <--- 2. Tienes que usar push manualmente
});

console.log(resultado); // Salida: [6, 12]

let dobleDelArray = (Array) => {
    // Usamos .map() para crear un nuevo array con el doble de cada elemento
    return Array.map( (numero) => numero * 2 );    
}
*/
