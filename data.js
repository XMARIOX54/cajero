let saldo = 1000; //el saldo inicial :D
let inicioDeUsuario = false //usuario
let usuario1 = 'sebitas123'
let musica_perro = new Audio('/cajero-automatico/soucurces/Undertale OST 021   Dogson[1].mp3')
let sonido_deposito = new Audio('/cajero-automatico/soucurces/Descargar sonido de moneda Mario bros    Download Mario Bros Coin sound.mp3')
//algunas funciones 

function contenidoDelForm(){
    document.getElementById('form1').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}
function mostrarSaldo(){
    document.getElementById('money').style.display = 'block';
    actualizarSaldo();
}




function  inicioDeSecion(){
    let usuario1 = document.getElementById('usuario1').value;
    let contraseña1 = document.getElementById('contraseña1').value;

    if (usuario1 === 'sebitas123' && contraseña1 === 'gaelito777'){
        contenidoDelForm();
        inicioDeUsuario = true;
        alert("buenas " + usuario1);
        
    }
    else { 
        alert("hay un error")
        inicioDeUsuario = false;
        
    }
    

}
//divicion// 


function actualizarSaldo(){
    event.preventDefault();
    document.getElementById('money').textContent ="tu plata es:"+ saldo;
}

function extraer(){
    event.preventDefault();
    let cantidad = parseFloat(document.getElementById('monto').value);
    
    
    

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("NO SEA HACI Y NO PONGA NEGATIVOS NI 0 :^");
        return;
    }
    if(cantidad > saldo){
        alert("yo no hago milagros no soy la rosa de guadalupe D:");
        return;
    }
    saldo -= cantidad; 
    actualizarSaldo();

}
function depositar(){
    event.preventDefault();
    let cantidad = parseFloat(document.getElementById('monto').value);
    sonido_deposito.play();
    if (isNaN(cantidad) || cantidad <= 0){
        alert("ya no sea flojo y ponga algo :U");
        return;
    }
    saldo += cantidad;
    actualizarSaldo();
}
function cerrarSecion() {
    inicioDeUsuario = false;
    alert("asta luego tenga un lindo dia :D")

}

function donacion(){
    event.preventDefault();
    document.getElementById('donar');
    let proceso_de_donar = prompt("ingresa cuanto quieres donar? :D")
    
    proceso_de_donar = parseFloat(proceso_de_donar);
    

    

    if(proceso_de_donar === null){
        alert(("no querias donarme no? :¨|"))
        
    }
    else if(proceso_de_donar > saldo ){
        alert("me gusatria ese monto para mi uni pero no la tienes ;-;")
        actualizarSaldo() 
         
    }
    else if(isNaN(proceso_de_donar) || proceso_de_donar <= 0){
        alert("ay ya no juegue conmigo")
        
    }
    else{
       alert("gracias es pa mi uni :3")  
       musica_perro.play()
       saldo -= proceso_de_donar;
       actualizarSaldo();
       var animacionPerro = setInterval(moverPerro, 5 );


    }
}
        function moverPerro() {
        var perro = document.getElementById('perro-caminando');
        var posicionActual = parseInt(perro.style.marginRight) || 0;
        var velocidad = 2
        var nuevaPosicion = posicionActual + velocidad;
        perro.style.marginLeft = nuevaPosicion + 'px'}
        

