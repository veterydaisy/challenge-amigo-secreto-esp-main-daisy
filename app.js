
let amigo = [];

function agregarAmigo(){

   let inputAmigo = document.getElementById("amigo");
   let nombreAmigo = inputAmigo.value;
  
  

   //hacer validacion para que no se ingrese un nombre vacio 

   if(!nombreAmigo){ //signo de exclamacion es cuando estoy negando algo 
      alert("No hay amigos para sortear!. Debes ingresar nombres a la lista para realizar el sorteo");
      return; //para parar la ejecucion del siguiente codigo
   }
   //aca se agregan los amigos 
   amigo.push(nombreAmigo);
   console.log(amigo);
   inputAmigo.value = ""; //para limpiar una vez que el nombre fue ingresado 
   inputAmigo.focus(); //para que el campo de texto quede limpio despues de ingresar un nombre
   //llamamos la funcion renderizarAmigo , cada vez que agreguemos un amigo
   renderizarAmigos()
}  
   


//para ir mostrando los nombres en lista de forma dinamica a traves del <ul> del html
function renderizarAmigos(){
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = ""; // se limpia la lista de amigos para que al agregar otro no se repita el primero cada vez ue se agrega uno nuevo

   //for comienza en cero , por que los array comienzan en el indice cero

   for(let i = 0; i < amigo.length; i++){
      let item = document.createElement("li");
      item.textContent = amigo[i]; //para que lea el indice del array 
      //lamamos a <ul> y le decimos que agregue como hijo la <li> que llama item
      listaAmigos.appendChild(item);
   }


}

function sortearAmigo(){
   //primero se hace la validacion , si no tengo amigos 
   if (amigo.length === 0 ) {
      alert("No hay amigos para sortear !  Debes ingresar nombres a la lista para realizar el sorteo");
      return;
   }

   //sorttear el amigo
   let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `El ganador es: ${amigoSorteado}`;

   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";
   
}  

