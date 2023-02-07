function lowestNumber() {
  var n1 = parseInt(prompt("Inserta un número entero: "));
  var n2 = parseInt(prompt("Inserta otro número entero: "));
  var n3 = parseInt(prompt("Inserta un ultimo número entero: "));

  if (n1 < n2 && n1 < n3) {
    alert(`The lowest number is ${n1}`);
  } else {
    if (n2 < n1 && n2 < n3) {
      alert(`The lowest number is ${n2}`);
    } else {
      if (n3 < n1 && n3 < n2) {
        alert(`The lowest number is ${n3}`);
      } else {
        alert("they are the same");
      }
    }
  }
}

// 2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
function letrasEnFrase() {
  var frase = prompt("Inserta una frase.");
  var letra = prompt("Inserta una letra.");

  let numeroLetra = 0;
  for (let i = 0; i < frase.length; i++) {
    //i =< frase.length -1
    if (frase[i] == letra) {
      numeroLetra += 1;
      //numeroLetra = numeroLetra + 1;
      //numeroLetra++;
    }
  }
  alert(numeroLetra);
}

//Suma o resta (según elija el usuario) dos números reales
function sumarORestar() {
  var sumarRestar = prompt("Quieres sumar or restar?");
  var n1 = parseFloat(
    prompt(`inserta el primer numero real del que quieres ${sumarRestar}`)
  );
  var n2 = parseFloat(
    prompt(`inserta el numero real que quieres ${sumarRestar}`)
  );

  if (sumarRestar == "sumar") {
    alert(n1 + n2);
  } else {
    if (sumarRestar == "restar") {
      alert(n1 - n2);
    } else {
      alert("not valid");
    }
  }
}

//validacion de usuario y contraseña
function validacion() {
  const USER = "usuario";
  const PASS = "password";
  let attempts = 3;
  let inputuser;
  let inputpass;

  do {
    inputuser = prompt("Escribe tu usuario");
    inputpass = prompt("Escribe tu contraseña");
    attempts--;
  } while ((inputuser != USER || inputpass != PASS) && attempts > 0);
}

/*Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra*/
function letterToNumber() {
  let letra = prompt("inserta una letra");
  if (letra == "a") {
    alert(7);
  } else {
    if (letra == "b") {
      alert(9);
    } else {
      if (letra == "c") {
        alert(101);
      } else {
        alert("has equivocado de letra");
      }
    }
  }
}

// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
function ordenarPalabras() {
  var palabras = [
    "hola",
    "buenos",
    "como",
    "estas",
    "hoy",
    "hace",
    "mucho",
    "frio",
  ];
  var n, i, k, aux;
  n = palabras.length;
  console.log(palabras); //  la lista desordenada

  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (palabras[i] > palabras[i + 1]) {
        aux = palabras[i];
        palabras[i] = palabras[i + 1];
        palabras[i + 1] = aux;
      }
    }
  }
  return palabras; // la lista ordenada
}
