//Programa para jugar picas y fijas
//Crear números aleatorios

// function randomNumbers(min, max) {
//     const numbers = [];
//     for (let i = 0; i < 4; i++) {
//       numbers.push(Math.floor(Math.random() * (max - min) + min));
//     }
//     return numbers;
//   }
  
//   const numbers = randomNumbers(0, 9);
//   for (var a in numbers) {
    
//   }
 
//   console.log(numbers);
  
//   //Imprimir el numero que ingresa el usuario
//   b = 1234;
//   let c = Array.from(String(b), Number);
//   console.log(c)

//   /*-----------------------------------------------------------*/

//   function compararArrays(numbers, c) {
//     let pica = 0;
//     let fija = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] === c[i]) {
//         fija++;
//       } else if (c.includes(numbers[i])) {
//         pica++;
//       }
//     }
//     //return {pica, fija};
   
//     console.log("Picas: " + pica + " Fijas: " + fija)
    
//   }
  
  
  //let array1 = [1, 2, 3];
  //let array2 = [3, 2, 1];
  //console.log(compararArrays(numbers, c)); // {pica: 3, fija: 0}

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

 //------------------------------------------------------------------------------------
// crea numeros aleatorios y no se repiten

  // let arr = [];
  // while(arr.length < 4){
  //     let r = Math.floor(Math.random() * 10);
  //     if(arr.indexOf(r) === -1) arr.push(r);
  // }
  // console.log(arr);

//------------------------------------------------------------------------------------
// compara que los numeros ingresados no se repitan

// b = 1111;
// const d = Array.from(String(b), Number);

// console.log(d);
// for (let f=0; f<d.length; f++){
//   for (let a= f+1; a<=d.length; a++){
//     if(d[f]==d[a]){
//       console.log("repetido");
//       a=d+1;
//       f= d.length;
//     }
//   }
// }
// console.log("ok");

// funcion que valida los numeros ingresados para que no se repitan

b = 1111;
const d = Array.from(String(b), Number);

function norepetido(d) {

for (let f=0; f<d.length; f++){
  for (let a= f+1; a<=d.length; a++){
    if(d[f]==d[a]){
      console.log("repetido");
      a=d+1;
      f= d.length;
    }
  }
}
return f;
}


  
  

