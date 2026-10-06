import { solicitar } from "./solicitudes.js";

let identificador = 8;

let usuario = await solicitar (`https://jsonplaceholder.typicode.com/users/${identificador}`);

let post = await solicitar (`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);

console.log(`-${usuario.name}`);
console.log(post);