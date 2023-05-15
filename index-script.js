//Programa para jugar picas y fijas
//Crear números aleatorios

function randomNumbers(min, max) {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
      numbers.push(Math.floor(Math.random() * (max - min) + min));
    }
    return numbers;
  }
  
  const numbers = randomNumbers(0, 9);
  for (var a in numbers) {
    
  }
 
  console.log(numbers);
  
  //Imprimir el numero que ingresa el usuario
  b = 1234;
  let c = Array.from(String(b), Number);
  console.log(c)

  //
/*
  // extrae los numeros del array numbers
for (let extrae in numbers){
console.log(numbers[extrae]);
}
console.log(" ");
for (let extraec in numbers){
  console.log(c[extraec]);
  }
  */


  
  

