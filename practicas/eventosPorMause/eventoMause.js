var pantalla = document.getElementById("dibujito");
var lapiz = document.getElementById("botonDibujar");
var borrador = document.getElementById("botonBorrador");
var texto = document.getElementById("colorcito");
var colores = document.getElementById("colores");
var grueso = document.getElementById("grueso");
var tamaño = document.getElementById("tamaño");
var papel = pantalla.getContext("2d");

var grosor;
var cambiar;
var mouse = 0;
var x;
var y;


lapiz.addEventListener("click", dibujar );
borrador.addEventListener("click", borrar);
colores.addEventListener("click", cambiarColor);
tamaño.addEventListener("click", cambiarTamaño)


dibujarLinea("black",0, 0, 0, 500, papel);
dibujarLinea("black",0, 0, 1500, 0, papel); 
dibujarLinea("black",1500, 0, 1500, 500, papel);
dibujarLinea("black",0, 500, 1500, 500, papel);


  function cambiarTamaño()
  {
    grosor = parseInt(grueso.value);
    console.log(grosor);
  }

  function cambiarColor()
   {
     cambiar = texto.value;
     console.log(cambiar);
   }

  function borrar(eventos)
   {
    papel.clearRect(0, 0, 1500,700);
   }

  function dibujar(eventos)
   {
      document.addEventListener("mousemove", hacerLinea);
      document.addEventListener("mouseup", haciaArriba);
      document.addEventListener("mousedown", haciaAbajo);
      console.log(eventos);

      function hacerLinea(eventos)
    
      {
        if(mouse == 1 )
          {
            dibujarLinea(cambiar, x, y, eventos.offsetX, eventos.offsetY, papel);
          }
        x = eventos.offsetX;

        y = eventos.offsetY;
      }
 
      function haciaArriba(eventos)
    
      {
        mouse = 0;
        x = eventos.offsetX;
        y = eventos.offsetY;
      }
    
      function haciaAbajo(eventos)

      {
        mouse = 1;
        x = eventos.offsetX;
        y = eventos.offsetY;
      }

      console.log(eventos);

   }
	


  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
    {
      lienzo.beginPath();
      lienzo.strokeStyle = cambiar;
      lienzo.lineWidth = grosor;
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }



