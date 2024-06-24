import * as fs from 'node:fs';

const precios: number [] = [300, 210, 1999, 254];
const productos: string []= ["Galletitas",  "Leche",  "Manteca",  "Queso"];

let contPrecios: string = "";
let contProductos: string = "";

for (let i=0;i < precios.length; i++){
    contPrecios += `${precios[i]} `;
    contProductos += `${productos[i]} `;
}

fs.writeFileSync ('./precios.txt', contPrecios);
fs.writeFileSync ('./productos.txt', contProductos);

const datos1: string= fs.readFileSync ('./precios.txt', 'utf8');
const datos2: string= fs.readFileSync ('./productos.txt','utf8');
const datos3: string= datos1.trim();
const datos4: string= datos2.trim ();
const arrayPrecios: string[] = datos3.split(" ");
const arrayProductos: string [] = datos4.split (" ");
console.log("Precios:  ", arrayPrecios);
console.log ("Productos:  ", arrayProductos);