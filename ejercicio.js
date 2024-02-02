//EJERCICIO 00-SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

//---------------------------------------------------------------
//empezemos con los ejercicios 

//ejercicio numero.1 "Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado."
// JavaScript https://developer.mozilla.org/es/docs/Web/JavaScript

//-----------------------------------------------------------------
//Ejercicio numero.2 "Representa las diferentes sintaxis que existen de crear comentariosen el lenguaje (en una línea, varias...)."

//asi se coloca un comentario en un solo parrafo
/*asi se coloca un 
comentario en
varios parrafos
*/

//------------------------------------------------------------------
//ejercicio numero.3 "Crea una variable (y una constante si el lenguaje lo soporta)."
let variable = "hola"; //asi se almacena la variable como hola.
const constante = "mundo"; //asi se almacena una cosntante 

//ejercicio numero.4 "Crea variables representando todos los tipos de datos primitivos del lenguaje (cadenas de texto, enteros, booleanos...)."

//---------------------------------------------------------------------------------------------------------------------------------
/*string - en javascript, los datos textuales son almacenados como string (cadenas de carecteres)
que puede estar entre comillas simples, dobles (estas mismas son esencialmente lo mismo) y 
backticks (acento grave), estas son diferentes y nos permiten agregar expresiones dentro de string como ${-} y en multiples lineas.
a continuacion ejemplos de estos
*/

//---------------------------------------------------------------------------------------------------------------------------------
let simple ='comillas simple';
let doble = "comillas doble";
//backticks, ejemplos
funcion sum(a,b){
return = a + b;
}
alert(`1 + 2 =${sum(1,2)}`); //1+2=3
let listaDeInvitados = `invitados:
*juan
*daniel
*saul
`;
alert(listaDeInvitados); // asi seria una lista de invitados con multiples lineas 
//---------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//number -  representa numeros enteros como con punto decimal 
let number = 235
let decimal = 256.92
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//BigInt - representa un tipo de number que es demasiado grande para ser representado, la "n" al final lo representa 
let BigInt = 1425362451256335414523142536521854858n;
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// null - representa un valor especial 'nada''vacio''valor desconocido'
let edad= null;
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// undefined- al igual que null  es un valor propio, en este caso es un valor no asignado
let edad;
alert(edad);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// boolean - esta variable tiene dos tipos de de valor true "si, verdadero, correcto" y false "no, falso, incorrecto"
let nombreEnlista ="true";
let edadEnLista = "False";
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//symbol - se utiliza para identificadores unicos para los objetos 
let symbol = symbol(id);
//------------------------------------------------------------------------------

console.log('¡hola,mundo Javascript!');
