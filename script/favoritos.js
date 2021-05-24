// *******************************************************************
// ************************* IconosFavoritos *************************
// *******************************************************************
iconoFav1.onclick = ()=>{
  if (iconoFav1.style.color === "black")
  {
    iconoFav1.style.color = "blue";
    var nuevoGifo = new Gifos(tituloGifo1.textContent, usuarioGifo1.textContent, div1.src);
    MisFavoritos[desdeTrending] = nuevoGifo;
    localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    console.log(MisFavoritos);
  }else
  {
    iconoFav1.style.color = "black";
    if(MisFavoritos[desdeTrending] != "undefined")
    {
      MisFavoritos[desdeTrending] = null;
      localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    }
  }
}

iconoFav2.onclick = ()=>{
  if (iconoFav2.style.color == "black")
  {
    iconoFav2.style.color = "blue";
    var nuevoGifo = new Gifos(tituloGifo2.textContent, usuarioGifo2.textContent, div2.src);
    MisFavoritos[desdeTrending+1] = nuevoGifo;
    localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    console.log(MisFavoritos);
  }else
  {
    iconoFav2.style.color = "black";
    if(MisFavoritos[desdeTrending+1] != "undefined")
    {
      MisFavoritos[desdeTrending+1] = null;
      localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    }
  }
}

iconoFav3.onclick = ()=>{
  if (iconoFav3.style.color == "black")
  {
    iconoFav3.style.color = "blue";
    var nuevoGifo = new Gifos(tituloGifo3.textContent, usuarioGifo3.textContent, div3.src);
    MisFavoritos[desdeTrending+2] = nuevoGifo;
    localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    console.log(MisFavoritos);
  }else
  {
    iconoFav3.style.color = "black";
    if(MisFavoritos[desdeTrending+2] != "undefined")
    {
      MisFavoritos[desdeTrending+2] = null;
      localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    }
  }
}



// *******************************************************************
// **************************** Menús ********************************
// *******************************************************************

menuFav.onclick = ()=>{
  
  contenedor_busqueda.style.display = "none";
  resultadoBusqueda.style.display = "none";
  contenedorBotonVerMas.style.display = "none";
  contenedorTextoTrending.style.display = "none";
  contTrending.style.display = "flex";
  crearGifoContenedor.style.display = "none";

  contenedorMisFavoritos.style.display = "flex";
  tituloFavoritos.textContent = "Favoritos";
  textoFavoritosSinContenido.textContent = "¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!";
  imagenCorazonFav.src = "./images/icon-favoritos.svg";

  console.log(MisFavoritos.length);
  if(MisFavoritos.length == 0 || MisFavoritos.length == null)
  {
    gifosFavoritos.style.display = "none";
    textoFavoritosSinContenido.style.display = "flex";
    imagenCorazonSinContenido.src = "./images/icon-fav-sin-contenido.svg";
    textoFavoritosSinContenido.style.fontSize = "22px";
    imagenCorazonSinContenido.style.display = "flex";
    
  }else{
    const sw = cargarFavoritos(true, MisFavoritos);
    if(!sw)
    {
      gifosFavoritos.style.display = "flex";
      textoFavoritosSinContenido.style.display = "none";
      imagenCorazonSinContenido.style.display = "none";
      // alert("No es vacío")
    }else{
      gifosFavoritos.style.display = "none";
      textoFavoritosSinContenido.style.display = "flex";
      imagenCorazonSinContenido.src = "./images/icon-fav-sin-contenido.svg";
      textoFavoritosSinContenido.style.fontSize = "22px";
      imagenCorazonSinContenido.style.display = "flex";
    }
  }
}

function cargarFavoritos (esVacio, gifoFavorito)
{
  Array.from(gifoResultadoFavoritos).forEach((elementoBusqueda) => {
    gifosFavoritos.removeChild(elementoBusqueda);
    });
  for(const prop in gifoFavorito)
  {
    const imgGifoFav = docum.createElement("img");
    imgGifoFav.className = "gifoResultadoFavoritos";
    if(gifoFavorito[prop] != null)
    {
      esVacio=false;
      imgGifoFav.src = gifoFavorito[prop].url;
      gifosFavoritos.appendChild(imgGifoFav);
    }
  }
  return esVacio;
}

// *******************************************************************
// **********************  Función Leer GIFO *************************
// *******************************************************************

function Gifos(titulo, usuario, link) 
{
  this.tittle = titulo;
  this.username = usuario;
  this.url = link;
}

function leerGifo (gifin)
{
  console.log("VECTOR DE GIFOS FAVORITOS")
  for(const prop in gifin)
  {
    // console.log(`gifin.${prop}`);
    console.log(gifin[prop].tittle + ", " + gifin[prop].username + ", " + gifin[prop].url);
  }
  // console.log(gifin.lengt  h);
}