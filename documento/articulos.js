var monte = document.getElementById("minuta");
const pantalla = ['imagenes/catura.png', 'imagenes/picador2.png'];

var contador = 0;

var aire = function(){
    
    monte.src = pantalla[contador]; 
    contador++
    setTimeout( aire, 2000);
    if(contador == 2){
       contador = -0
    };
};   

aire()