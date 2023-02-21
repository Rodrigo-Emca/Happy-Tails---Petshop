import{ modal, agregarTarjetas, filtrarCoincidencias} from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")


let productosSelec = JSON.parse(localStorage.getItem('Productos Seleccionados')) || []

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
    .then( data => data.json())
    .then( response => {
        const productos = modal(response)
        const jugueteria = productos.filter( producto => producto.categoria == 'jugueteria')
        // console.log(jugueteria);
        agregarTarjetas(jugueteria,$contenedorTarjetas,productosSelec)

        $keyword.addEventListener("keyup", () => {
            $contenedorTarjetas.innerHTML = ``
            const palabras = ($keyword.value).toLowerCase()
            const filtrados = filtrarCoincidencias(jugueteria,palabras)
            agregarTarjetas(filtrados,$contenedorTarjetas,productosSelec)
        })
        
        $contenedorTarjetas.addEventListener('click',(e) => {
            if( e.target.name === 'carrito')
                if( productosSelec.some( producto => producto._id == e.target.id)){
                    productosSelec = productosSelec.filter( producto => producto._id !== e.target.id)
                    e.target.classList.replace('bg-secondary','bg-white')
                    localStorage.setItem('Productos Seleccionados',JSON.stringify(productosSelec))
                }
                else {
                    productosSelec.push( jugueteria.find( juguete => juguete._id == e.target.id))
                    e.target.classList.replace('bg-white','bg-secondary')
                    localStorage.setItem('Productos Seleccionados',JSON.stringify(productosSelec))
                }
        })
    })
    .catch(error => console.log(error))



