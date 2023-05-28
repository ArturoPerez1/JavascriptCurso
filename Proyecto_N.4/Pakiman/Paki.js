class Pakiman
  {
     constructor(nombre, vida, ataque, tipo)
        {
          this.imagen = new Image();
          this.nombre = nombre;
          this.vida = vida;
          this.ataque = ataque;
          this.tipo = tipo;

          this.imagen.src = imagenes[this.nombre];
        } 
 
      hablar()
        {
          alert(this.nombre);
        }
 
      mostrar()
        {
          document.body.appendChild(this.imagen);
          document.write("<p>");
          document.write("<strong>" + this.nombre +"</strong><br/>" );
          document.write("Vida: " + this.vida + "<br/>");
          document.write("tipo: " + this.tipo + "<br/>");
          document.write("Ataque: " + this.ataque + "<hr/>");
          document.write("<p/>");
        }
 
  }