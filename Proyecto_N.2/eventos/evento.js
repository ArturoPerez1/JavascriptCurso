var d = document.getElementById("dibujito");

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var ancho = d.width;
var lienzo = d.getContext("2d");

   function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial, yinicial);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

   function dibujoPorClick()
	{
	   var lineas =  parseInt(texto.value);
	   var l = 0;
	   var yi, xf;
	   var colorLinea = "#F28C25";
       var espacio = ancho / lineas;

         while(l < lineas)
	   	  {
 			yi = espacio * l;
 			xf = espacio * (l + 1);
			dibujarLinea(colorLinea, 0, yi, xf, 300);
 		    l= l + 1;
          }

	   dibujarLinea(colorLinea, 1, 1, 1 ,299);
	   dibujarLinea(colorLinea, 299, 299, 1 ,299);
    }
