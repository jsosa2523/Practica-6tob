let nombre = prompt("Cual es tu nombre");
let apellido = prompt("Cual es tu apellido");
let añoNacimiento = prompt("En que año naciste");
let edad = 2026 - añoNacimiento;
let esMayorEdad = edad > 18 ? "Eres el mayor de edad" : "Eres menor de edad";

let mensaje = `Hola ${nombre} ${apellido} usted nacio ${añoNacimiento} y tienes ${edad}, y usted es ${esMayorEdad}`;

alert (mensaje);