menuModoNocturno.onclick = ()=>{
    if (menuModo.textContent == "MODO DIURNO"){
// *********************************************************************************
// ********************************** Modo Diurno **********************************
// *********************************************************************************
        menuModo.textContent = "MODO NOCTURNO";
        docum.getElementsByTagName("BODY")[0].style.backgroundColor = "#FFF";
        logo.src = "./images/logo-desktop.svg";
        headerLinea.style.backgroundColor = "blue";
        footerLinea.style.backgroundColor = "blue";
        
        console.log(window.matchMedia("(max-width: 1330px)").matches);
        if(window.matchMedia("(max-width: 930px)").matches) {
            itemA.forEach(function(element) {
                element.style.background = "blue";
                element.style.color = "white";
            });
        }else{
            itemA.forEach(function(element) {
                element.style.background = "white";
            });
        }
        
        itemLI1.onmouseover = function(){
            itemLI1.style.borderBottom= "5px solid blue";
        }
        itemLI1.onmouseout = function(){
            itemLI1.style.borderBottom= "none";
        }

        itemLI2.onmouseover = function(){
            itemLI2.style.borderBottom= "5px solid blue";
        }
        itemLI2.onmouseout = function(){
            itemLI2.style.borderBottom= "none";
        }

        itemLI3.onmouseover = function(){
            itemLI3.style.borderBottom= "5px solid blue";
        }
        itemLI3.onmouseout = function(){
            itemLI3.style.borderBottom= "none";
        }

        spanMenu.forEach(function(element) {
            element.style.background = "blue";
        });

        menuHeader.style.background = "white";
        if(!window.matchMedia("(max-width: 1330px)").matches) 
        {
            menuModo.style.color = "blue";
            menuFav.style.color = "blue";
            menuGif.style.color = "blue";
            
        }else
        {
            menuModo.style.color = "white";
            menuFav.style.color = "white";
            menuGif.style.color = "white";
        }
        divBuscar.style.border = "1px solid blue";
        inputBuscar.style.backgroundColor = "white";
        inputBuscar.style.color = "blue";
        botonBuscar.style.backgroundColor = "white";
        iconoBuscar.style.color = "blue";
        textoBusqueda.style.color = "blue";
        contTrending.style.backgroundColor = "#F4F5F9";
        tituloTrendingGifos.style.backgroundColor = "#F4F5F9";
        tituloTrendingGifos.style.color = "blue";
        textoTrendingGifos.style.backgroundColor = "#F4F5F9";
        textoTrendingGifos.style.color = "black";
        tituloTrending.style.color = "#0000FF";
        textoTrending.style.color = "#0000FF";
        contGifos.style.backgroundColor = "#F4F5F9";
        divGifos.style.backgroundColor = "#F4F5F9";
        botonSiguiente.style.backgroundColor = "#F4F5F9";
        botonSiguiente.style.color = "#0000FF";
        botonSiguiente.style.border = "1px solid #0000FF";
        botonAnterior.style.backgroundColor = "#F4F5F9";
        botonAnterior.style.color = "#0000FF";
        botonAnterior.style.border = "1px solid #0000FF";
        tituloFavoritos.style.color = "blue";

        imagenCamara.src = "./images/camara.svg";
        imagenPelicula.src = "./images/pelicula.svg";
        crearGifoTextoRecuadro.style.color = "blue";
        crearGifoRecuadro.style.border = "1px solid blue";
        crearGifoRecuadro.style.border = "1px solid blue";
        botonCrearGifo.style.border = "1px solid blue";
        crearGifoLineaAzul.style.backgroundColor = "blue";
        
        CrearGifosTextoNegro.forEach(function(element) {
            element.style.color = "black";
        });

        CrearGifoCirculo.forEach(function(element) {
            element.style.border = "1px solid blue";
            element.style.color = "blue";
        });
        
        footer.style.color = "black";
        face.style.color = "#0000FF";
        twtt.style.color = "#0000FF";
        inst.style.color = "#0000FF";
        
    }else{
// *********************************************************************************
// ********************************** Modo Nocturno*********************************
// *********************************************************************************

    docum.getElementsByTagName("BODY")[0].style.backgroundColor = "#37383C";
    logo.src = "./images/logo-desktop-modo-noct.svg";
    headerLinea.style.backgroundColor = "black";
    footerLinea.style.backgroundColor = "black";

    itemA.forEach(function(element) {
        element.style.background = "black";
        // element.style.color = "white";
    });

    itemLI1.onmouseover = function(){
        itemLI1.style.borderBottom= "5px solid white";
    }
    itemLI1.onmouseout = function(){
        itemLI1.style.borderBottom= "none";
    }

    itemLI2.onmouseover = function(){
        itemLI2.style.borderBottom= "5px solid white";
    }
    itemLI2.onmouseout = function(){
        itemLI2.style.borderBottom= "none";
    }

    itemLI3.onmouseover = function(){
        itemLI3.style.borderBottom= "5px solid white";
    }
    itemLI3.onmouseout = function(){
        itemLI3.style.borderBottom= "none";
    }

    spanMenu.forEach(function(element) {
        element.style.background = "white";
    });
    
    menuHeader.style.backgroundColor = "#37383C";
    menuModo.style.color = "white";
    menuModo.textContent = "MODO DIURNO";
    menuFav.style.color = "white";
    menuGif.style.color = "white";
    divBuscar.style.border = "1px solid white";
    inputBuscar.style.backgroundColor = "#37383C";
    inputBuscar.style.color = "white";
    botonBuscar.style.backgroundColor = "#37383C";
    iconoBuscar.style.color = "white";
    textoBusqueda.style.color = "white";
    contTrending.style.backgroundColor = "#222327";
    tituloTrendingGifos.style.backgroundColor = "#222327";
    tituloTrendingGifos.style.color = "white";
    textoTrendingGifos.style.backgroundColor = "#222327";
    textoTrendingGifos.style.color = "white";
    tituloTrending.style.color = "white";
    textoTrending.style.color = "white";
    contGifos.style.backgroundColor = "#222327";
    divGifos.style.backgroundColor = "#222327";
    botonSiguiente.style.backgroundColor = "#222327";
    botonSiguiente.style.color = "white";
    botonSiguiente.style.border = "1px solid white";
    botonAnterior.style.backgroundColor = "#222327";
    botonAnterior.style.color = "white";
    botonAnterior.style.border = "1px solid white";
    tituloFavoritos.style.color = "white";

    imagenCamara.src = "./images/camara-modo-noc.svg";
    imagenPelicula.src = "./images/pelicula-modo-noc.svg";
    crearGifoTextoRecuadro.style.color = "white";
    crearGifoRecuadro.style.border = "1px solid white";
    crearGifoRecuadro.style.border = "1px solid white";
    botonCrearGifo.style.border = "1px solid white";
    crearGifoLineaAzul.style.backgroundColor = "white";
    
    CrearGifosTextoNegro.forEach(function(element) {
        element.style.color = "white";
    });

    CrearGifoCirculo.forEach(function(element) {
        element.style.border = "1px solid white";
        element.style.color = "white";
    });
    

    
    footer.style.color = "white";
    face.style.color = "white";
    twtt.style.color = "white";
    inst.style.color = "white";
    }
}
