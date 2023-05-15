//************************************************************************************************* */
//                                  Programa para jugar picas y fijas                               */
//************************************************************************************************* */

//Crear numeros aleatorios

 function randomNumbers(min, max) {
  const numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}
const numbers = randomNumbers(0, 9);
document.getElementById("salida3").value = numbers; //los numeros aleatorios los muestra en el cuadro salida 3 del HTML
console.log(numbers);  //Imprime los numeros aleeatorios en consola para validar código

//************************************************************************************************* */

//Crear variables

const btn1 = document.querySelector('#btnenter'); //crea la variable btn utilizando el id de HTML (#=id)
const btn2 = document.querySelector('#btnreset');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

//************************************************************************************************* */

    
// Configuracion de botón enter

btn1.addEventListener('click', darclick);

function darclick() {
  
  const a = document.getElementById("picas3") // lo que escribo en el primer cuadro de texto se almacena en a
  const b = document.getElementById("mostrar") // se crea var b para mostrar en cuadro de texto "mostrar"
  const c = Array.from(String(picas3.value), Number); // el numero escrito en picsa3 se convierte a un array de nombre c
  b.innerHTML += c; // escribe el array c en b
  document.getElementById("picas3").value = ''; // borra lo que se escribe en "picas3"
}

//************************************************************************************************* */

// Configuracion de botón reset

// form2.addEventListener('submit', reset1);

// function reset1(event) {
//   event.preventDefault();   //evita que recargue la página
  
  
// }
