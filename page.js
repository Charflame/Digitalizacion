let boton = document.getElementById("boton");
let numero_cuadros = 0;
let contenedor = document.getElementById("contenedor")

function sumar_cuadro(){
    let nuevoDiv = document.createElement("div");
    numero_cuadros = numero_cuadros+1;
    nuevoDiv.textContent = "cuadro nº " + numero_cuadros;
    let nuevoImg = document.createElement("img");
    nuevoImg.src= "https://i.pinimg.com/236x/91/2c/65/912c6562d1c47e6d386139624af4b717.jpg"
    nuevoDiv.appendChild(nuevoImg)
    nuevoDiv.classList.add("cuadro")
    nuevoImg.classList.add("imagen")

    contenedor.appendChild(nuevoDiv);
}

for(let contador = 0; contador < 16; contador = contador + 1){
    sumar_cuadro()
}

boton.addEventListener("click", sumar_cuadro)