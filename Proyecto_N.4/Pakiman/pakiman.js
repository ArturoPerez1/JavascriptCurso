var imagenes = [];
imagenes ["cauchin"] = "vaca.png";
imagenes ["pokacho"] = "pollo.png";
imagenes ["tocinauro"] = "cerdo.png";
 
var coleccion = [];
coleccion.push( new Pakiman("cauchin", 100,30, "tierra") )
coleccion.push( new Pakiman("pokacho", 80, 50, "volador") );
coleccion.push( new Pakiman("tocinauro", 120, 40, "mágico") );

for(var pakin of coleccion)
  {
    pakin.mostrar();
  }