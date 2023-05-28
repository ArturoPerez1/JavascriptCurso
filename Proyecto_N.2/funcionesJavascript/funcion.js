var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

dibujarLinea("red", 10, 300, 220, 10);
dibujarLinea("black", 300, 300, 1, 10);

function dibujarLinea(color, xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xi,yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}