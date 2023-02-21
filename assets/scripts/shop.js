import { pintarCarrito } from "./module/functions.js";

const bodytable = document.querySelector('.bodyTable')
const totalTabla = document.querySelector('.totalTabla')


let productosSelec = JSON.parse(localStorage.getItem('Productos Seleccionados'))

pintarCarrito(productosSelec,bodytable)


