menuGif.onclick =  async ()=>{
    contenedor_busqueda.style.display = "none";
    resultadoBusqueda.style.display = "none";
    contenedorBotonVerMas.style.display = "none";
    contenedorTextoTrending.style.display = "none";
    imagenCorazonSinContenido.style.src = "./images/icon-fav-sin-contenido.svg";
    contenedorMisFavoritos.style.display = "flex";
    contTrending.style.display = "flex";
    crearGifoContenedor.style.display = "none";
  
    tituloFavoritos.textContent = "Mis Gifos";
    imagenCorazonFav.src = "./images/icon-mis-gifos.svg";
    textoFavoritosSinContenido.textContent = "¡Anímate a crar tu primer GIFO!";

    // console.log(MisGifos.length);
    if(MisGifos.length == 0)
    {
        gifosFavoritos.style.display = "none";
        textoFavoritosSinContenido.style.display = "flex";
        textoFavoritosSinContenido.style.fontSize = "38px";
        textoFavoritosSinContenido.style.width = "600px";
        imagenCorazonSinContenido.src = "./images/icon-mis-gifos-sin-contenido.svg";
        imagenCorazonSinContenido.style.display = "flex";
        
    }else{
        gifosFavoritos.style.display = "flex";
        textoFavoritosSinContenido.style.display = "none";
        imagenCorazonSinContenido.style.display = "none";
        if (!localStorage.getItem('MisGifos').length == 0)
        {
            await cargarMisGifos();
        }
    }
}

addLogo.onclick = ()=>{
    contenedor_busqueda.style.display = "none";
    resultadoBusqueda.style.display = "none";
    contenedorBotonVerMas.style.display = "none";
    contenedorTextoTrending.style.display = "none";
    contTrending.style.display = "none";
    contenedorMisFavoritos.style.display = "none";
    crearGifoContenedor.style.display = "flex";
}






async function cargarMisGifos ()
{
    Array.from(gifoResultadoFavoritos).forEach((elementoBusqueda) => {
    gifosFavoritos.removeChild(elementoBusqueda);
    });

    for (let index = 0; index < MisGifos.length; index++)
    {
        const imgGifoFav = docum.createElement("img");
        imgGifoFav.className = "gifoResultadoFavoritos";
        const queryMyGifo = `https://api.giphy.com/v1/gifs/${MisGifos[index]}?api_key=${APIKey}`;
        const respuestaMyGifo = await fetch(encodeURI(queryMyGifo));
        const myGifoData = await checkStatusAndParse(respuestaMyGifo);
        // console.log(myGifoData.data.url);
                        
        imgGifoFav.src = myGifoData.data.images.original.url;
        gifosFavoritos.appendChild(imgGifoFav);
    }
}