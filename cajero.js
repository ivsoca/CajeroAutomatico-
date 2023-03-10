
class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;     
    }
}


function entregarDinero(){
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(let bi of caja){
        if(dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregados.push(new Billete(bi.valor,papeles));
            dinero = dinero - (bi.valor * papeles)
        }
    }

    if(dinero > 0) {
        resultado.innerHTML = "Soy un cajero pobre y no tengo dinero";
    }else {
        for(let e of entregados) {
            resultado.innerHTML = "Usted retiro:" + "<br>"
            if(e.cantidad > 0 && e.valor == 50){
                // resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + " <br>";
                
                for(let i = 0; i < e.cantidad; i++) {
                    billeteCajero50()
                }
            }else if (e.cantidad > 0 && e.valor == 20){
                for(let i = 0; i < e.cantidad; i++) {
                    billeteCajero20()
                }
            }else if(e.cantidad > 0 && e.valor == 10){            
                for(let i = 0; i < e.cantidad; i++) {
                    billeteCajero10()
                }
            }          
        }
    }
    console.log(entregados)
}

function billeteCajero50(){
    let imagen = document.createElement("img");
    imagen.src = "./50.PNG"
    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(imagen);
}

function billeteCajero20(){
    let imagen = document.createElement("img");
    imagen.src = "./20.PNG"
    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(imagen);
}

function billeteCajero10(){
    let imagen = document.createElement("img");
    imagen.src = "./10.PNG"
    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(imagen);
}



let caja = [];
let entregados = [];
caja.push(new Billete(50,10));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));


let dinero;
let div = 0;
let papeles = 0;


let resultado = document.getElementById("resultado");
let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);



