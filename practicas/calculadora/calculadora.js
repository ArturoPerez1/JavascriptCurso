var resultado = document.getElementById("resultado");     
var opciones = parseInt(prompt("Elija su opcion. 1: Suma , 2: Resta , 3: Multiplicacion , 4: Division "));
var operacion;

 	
  if (opciones == 1)
    {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));
       operacion = x + y;
       resultado.innerHTML = "<p>El valor de la Suma es:  <strong> " + operacion + "</strong></p>";
 	  }
 	    
  else if(opciones == 2)
 	  {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));    
 		   operacion = x - y;
 		   resultado.innerHTML = "<p>El valor de la Resta es: <strong> " + operacion + "</strong></p>";
 	  }
 	    
  else if (opciones == 3)
 	  {
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));        
 	     operacion = x * y;
 	     resultado.innerHTML = "<p>El valor de la Multiplicacion es: <strong> " + operacion + "</strong></p>";	
 	  }

 	else if (opciones == 4)
    { 
       var x = parseInt(prompt("Introduzca el valor de x"));
       var y = parseInt(prompt("Introduzca el valor de y"));   
    	 operacion =  parseInt(x / y );
 		   resultado.innerHTML = "<p>El valor de la Division es: <strong> " + operacion + "<strong></p>";
    }

  else
    {
    	 alert("La opcion tomada no existe");
    }