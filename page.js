productos = ["Minecraft", "Doom", "Half-Life", "Portal", "Elden Ring", "Starcraft", "E.T", "Factorio"]
imagenes = ["https://assetsio.gnwcdn.com/co49x5.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
"https://s1.elespanol.com/2017/07/20/actualidad/actualidad_232741836_129966103_1706x1280.jpg",
"https://static.wikia.nocookie.net/halflife7283/images/e/ec/Half-Lifeboxart.jpg/revision/latest?cb=20131211041722&path-prefix=es",
"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Portal_standalonebox.jpg/220px-Portal_standalonebox.jpg",
"https://preview.redd.it/bueqtztxmnj81.png?auto=webp&s=692ee8026d707e035977daf27c5ef6298e019718",
"https://i.3djuegos.com/juegos/2658/starcraft_brood_war/fotos/ficha/starcraft_brood_war-1686850.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Etvideogamecover.jpg/220px-Etvideogamecover.jpg",
"https://preview.redd.it/lvwd7gkc4jy71.png?auto=webp&s=96211f551247a003ad9e7689d77e7c97d5c4220c"]
precios = ["30€", "10€","8€", "10€", "60€", "15€", "40€", "32€"]

let boton = document.getElementById("boton");
let numero_cuadros = 0;
let contenedor = document.getElementById("contenedor")
let numero_productos = 0  
let carrito = document.getElementById("carrito")  
let borrador = document.getElementById("eraser")

function anadir_productos(){

    let nuevoDiv = document.createElement("div");
    let nuevoDivtexto = document.createElement("div");
    let nuevoImg = document.createElement("img");

    

    nuevoDivtexto.textContent = productos[numero_cuadros] + " " + precios[numero_cuadros]; 
    nuevoImg.src = imagenes[numero_cuadros]
    nuevoDiv.appendChild(nuevoImg)
    nuevoDiv.appendChild(nuevoDivtexto)
    
    nuevoDiv.classList.add("cuadro")
    nuevoImg.classList.add("imagen")

    nuevoDiv.addEventListener("click", comprar_productos.bind(null,numero_cuadros))

    contenedor.appendChild(nuevoDiv);
    numero_cuadros = numero_cuadros+1;

}

function comprar_productos(numero){
    let nuevaCompra = document.createElement("div");
    nuevaCompra.textContent= productos[numero] + " " + precios[numero]

    nuevaCompra.classList.add("compra")
    nuevaCompra.id = "compra"

    numero_productos = numero_productos+1
    carrito.appendChild(nuevaCompra)
}

for(let contador = 0; contador < 8; contador = contador + 1){
    anadir_productos()
}



function borrar_productos(){

    let compras = document.getElementsByClassName("compra");

    compras = Array.from(compras);

    compras.forEach(compra => {
        carrito.removeChild(compra);
    });

    numero_productos = 0;
}

borrador.addEventListener("click", borrar_productos)

