//************************************************************************************************* */
//                                  Programa para jugar picas y fijas                               */
//************************************************************************************************* */

//Crear variables

const btn1 = document.querySelector('#btnenter'); //crea la variable btn utilizando el id de HTML (#=id)
const btn2 = document.querySelector('#btnreset');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const resultado = document.querySelector('.container2'); // se crea la variable resultado para guardar el contenido de la clase container2 inactive de HTML
const input3 = document.querySelector('#picas3'); // se crea input 3 para guardar el contenido de "#picas3"
var matrix = [];
var filas = 0;

//************************************************************************************************* */

//Crear números aleatorios

let numbers = [];
  while(numbers.length < 4){
      let r = Math.floor(Math.random() * 10);
      if(numbers.indexOf(r) === -1) numbers.push(r);
  }
  for(var i=0; i<=filas; i++) {
    matrix[i] = new Array(3);
}

  document.getElementById("salida3").value = numbers; //los numeros aleatorios los muestra en el cuadro salida 3 del HTML
  console.log(numbers); //Imprime los numeros aleeatorios en consola para validar código

//************************************************************************************************* */
   
// Configuracion de botón enter

input3.addEventListener("keypress", function(e){
  if (e.key === "Enter") {
      event.preventDefault(); //Para que no haga reset
      document.getElementById('btnenter').click();
  }
});

//************************************************************************************************* */

// Funcion para activar botón "jugar"

btn1.addEventListener('click', darclick);

function darclick() {
  const c = Array.from(String(picas3.value), Number); // el numero escrito en picas3 se convierte a un array de nombre c
  if(validarRepeticion(c) && c.length ==4){
    compararArrays(c);
    document.getElementById("picas3").value = ''; // borra lo que se escribe en "picas3"
    //let restric = parseInt(c.join(''));  //conviernte el array c en número y lo guarda en restric
      let tblDatos = document.querySelector('.tabla').insertRow(1); //crea la tabla en HTML
      let col1= tblDatos.insertCell(0);
      let col2= tblDatos.insertCell(1);
      let col3= tblDatos.insertCell(2);

      col1.innerHTML +=c;
      col2.innerHTML +=matrix[filas-1][1];
      col3.innerHTML +=matrix[filas-1][2];
    }
  else{
    alert("Por favor escriba únicamente 4 dígitos no repetidos");
  }
 
}
 
//************************************************************************************************* */

// Configuracion de botón reset

// form2.addEventListener('submit', reset1);

// function reset1(event) {
//   event.preventDefault();   //evita que recargue la página
  
  
// }

//************************************************************************************************* */


// comparar los 2 arrays e imprimir resultado

function compararArrays(c) {
  let pica = 0;
  let fija = 0;
  for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === c[i]) {
      fija++;
      
  } else if (c.includes(numbers[i])) {
      pica++;  
      }
          
  }
  matrix[filas][1]= pica;
  matrix[filas][2]= fija;
  filas++;
  matrix[filas] = new Array(3);
  if (fija == 4) {
      alert("ganaste en " + filas + " movimientos - Juega de nuevo " + " \nEl numero es: " + numbers);
      input3.disabled = true;
      
  }
  
}
//************************************************************************************************* */

// funcion que valida los numeros ingresados para que no se repitan

function validarRepeticion(d) {
  for (let f=0; f<d.length; f++){
    for (let a= f+1; a<=d.length; a++){
      if(d[f]==d[a]){
        return false;
      }
    }
  }
  return true;
  }