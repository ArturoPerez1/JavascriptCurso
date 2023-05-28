var boton = document.getElementById("botoncito");
boton.addEventListener("click", empezarOperacion);
var resultado = document.getElementById("resultado");
var operacion;
   

  function empezarOperacion()
   {
    
    var opciones = parseInt(prompt("(Escoja una opcion). 1: Suma, 2: Resta, 3: Multiplicación, 4: División"));
     if(opciones == 1)
      {
       var y = parseInt(prompt("Introduzca el valor de y"));
       var x = parseInt(prompt("Introduzca el valor de x"));
       operacion = x + y;
       resultado.innerHTML = "El resultado de la suma es: " + operacion;
      } 

     else if(opciones == 2)
      {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));
       operacion = x - y;
       resultado.innerHTML = "El resultado de la resta es: " + operacion;
      } 

     else if(opciones == 3)
      {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));
       operacion = x * y;
       resultado.innerHTML= "El resultado de la multiplicación es: " + operacion;
      } 
      

     else if(opciones == 4)
      {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));     
       operacion = parseInt(x / y);
       resultado.innerHTML = "El resultado de la división es: " + operacion;
      } 
     else
      {
         alert("Esta opción no existe");
      } 
    
   }

  