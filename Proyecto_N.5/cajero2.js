class billetes 
{
    constructor(valor, cantidad) 
    {
        this.cantidad = cantidad;
        this.valor = valor;
    }
}


function entregarDinero() 
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    var nose = caja;

        absoluto.innerHTML = "";
        billete.innerHTML = "";
        operacion.innerHTML = "";


        for (var bi of caja) 
        {

                if (dinero > 0) 
                {
                    div = Math.floor(dinero / bi.valor);


                    if (div > bi.cantidad) 
                    {
                        papeles = bi.cantidad;


                    } 
                    else if(div <= bi.cantidad)
                    {
                        papeles = div;


                    }
                    else
                    {
                        papeles = papeles;

                    }

                    dinero = dinero - (bi.valor * papeles);

                    if ((bi.valor * bi.cantidad) > (dinero))
                    {

                      bi.cantidad = bi.cantidad - papeles;   
                    }
                   
                     else if(bi.valor <= dinero)
                    {

                      absoluto.innerHTML = "Lo siento el monto introducido excede los fondos del cajero";
                    }
                }
                   
             operacion.innerHTML = operacion.innerHTML + "Quedan " + bi.cantidad + " billetes de " + bi.valor + "<br/>";  
              
        }
}