var teclas = {
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGTH: 39 
};

document.addEventListener("mousedown", dibujarTeclado);

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);
dibujarLinea("yellow", 0, 0, 300, 0, papel);
dibujarLinea("yellow", 0, 0, 0, 300 , papel);
dibujarLinea("yellow", 300, 0, 300, 300, papel)
dibujarLinea("yellow", 0, 300, 300, 300, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.lineWidth = 3;
		lienzo.moveTo(xinicial, yinicial);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
  	case teclas.UP:
  	dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
  	y = y - movimiento;
  	break;
   
  	case teclas.DOWN:
  	 dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
  	y = y + movimiento;
  	break;

  	case teclas.LEFT:
  	dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
  	x = x - movimiento;
  	break;

  	case teclas.RIGTH:
  	dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
  	x = x + movimiento;
  	break;

  	default:
     console.log("Otra tecla");
  	break;
  }
}