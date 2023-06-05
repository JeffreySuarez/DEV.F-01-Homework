/* 

El script deberá:

Solicitar al usuario su peso y su altura a través de prompt.
Calcular el IMC y almacenarlo en una variable.
Crear un objeto que represente a la persona, que contenga propiedades para su peso, altura e IMC.
Mostrar los resultados a través de console.log y document.write.
Requisitos del código:
Deben utilizar comentarios para explicar qué hace cada parte del código.
Deben utilizar variables y constantes según corresponda.
Deben demostrar el uso de los diferentes tipos de datos primitivos en JavaScript (booleano, null, indefinido, número, cadena, y símbolo).
Deben demostrar el uso de objetos.
Deben utilizar operadores matemáticos simples en el cálculo del IMC. 

*/

let nameUser = prompt("Ingrese su nombre:");
let weightUser = parseInt(prompt("Ingrese el peso en kg: "));
let height = parseInt(prompt("Ingrese su altura: "));

let icm = weightUser / Math.pow(height / 100, 2);

document.write(`

<h1>Indice de Masa Corporal</h1> 

<hr>
<h3> Señor ${nameUser} su IMC es el siguiente: </h3>
<p style="color:blue" > <strong> ${icm} </strong> </p>
<hr>
<br>

`);

//  ** se guarda la informacion en un objeto

let user = [
  {
    name: nameUser,
    weight: weightUser,
    height: height,
    icm: icm,
  },
];

const userImc = user.map((e) => {
  return `Su nombre es ${e.name}, su peso es de ${e.weight}, su altura es de ${e.height}, la cual su IMC es el siguiente --> ${e.icm}`;
});

document.write(userImc);
console.log(userImc);
