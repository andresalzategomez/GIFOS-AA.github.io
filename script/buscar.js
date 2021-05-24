contenedorBuscar.addEventListener("keyup", async function(tecla) {

  if(tecla.key == "Enter")
  {
    if(contenedorBuscar.value.length != 0)
    {
      eliminarBusqueda();
      iconoBuscar.setAttribute("class", "fa fa-times");
      
      // contenedorBuscar.value = divBusqueda1.textContent.trim();
      CerrarLineasBusqueda();
      Buscar(contenedorBuscar.value, 0);
      contenedorTextoTrending.style.display = "none";
      resultadoBusqueda.style.display = "flex";
      contenedorBotonVerMas.style.display = "flex";
    }
  }else{
    iconoBuscar.setAttribute("class", "fa fa-times");
    const queryAutocomplete = `https://api.giphy.com/v1/gifs/search/tags?api_key=${APIKey}&q=${contenedorBuscar.value}&limit=3`;
    const respuestaAutocomplete = await fetch(encodeURI(queryAutocomplete));

    if(respuestaAutocomplete.status == 404)
    {
      alert("No existen GIFOS");
    }else{
      const autocompleteData = await checkStatusAndParse(respuestaAutocomplete);
      if(!autocompleteData.data.length == 0)
      {
        Array.from(divBusqueda).forEach((elementoBusqueda) => {
          elementoBusqueda.style.display = "flex";
        });
        contenedor_buscar.style.height = "170px";


        if(autocompleteData.pagination.count >= 0 )
        {
          textoLinea1.textContent = await autocompleteData.data[0].name;
        }else{
          CerrarLineasBusqueda();
        }


        if(autocompleteData.pagination.count > 1 )
        {
          textoLinea2.textContent = await autocompleteData.data[1].name;
        }else{
          textoLinea2.textContent = "";
        }


        if(autocompleteData.pagination.count > 2 )
        {
          textoLinea3.textContent = await autocompleteData.data[2].name;
        }else{
          textoLinea3.textContent = "";
        }


      }else{
        CerrarLineasBusqueda();
      }
    }
  }  
});


divBusqueda1.onclick = async ()=>{
  eliminarBusqueda();
  contenedorBuscar.value = divBusqueda1.textContent.trim();
  CerrarLineasBusqueda();
  Buscar(contenedorBuscar.value, 0);
  console.log(contenedorBuscar.value);
  contenedorTextoTrending.style.display = "none";
  resultadoBusqueda.style.display = "flex";
  contenedorBotonVerMas.style.display = "flex";
}
divBusqueda2.onclick = async ()=>{
  eliminarBusqueda();
  contenedorBuscar.value = divBusqueda2.textContent.trim();
  CerrarLineasBusqueda();
  Buscar(contenedorBuscar.value, 0);
  contenedorTextoTrending.style.display = "none";
  resultadoBusqueda.style.display = "flex";
  contenedorBotonVerMas.style.display = "flex";
}
divBusqueda3.onclick = async ()=>{
  eliminarBusqueda();
  contenedorBuscar.value = divBusqueda3.textContent.trim();
  CerrarLineasBusqueda();
  Buscar(contenedorBuscar.value, 0);
  contenedorTextoTrending.style.display = "none";
  resultadoBusqueda.style.display = "flex";
  contenedorBotonVerMas.style.display = "flex";
}

iconoBuscar.onclick = async ()=>{

  eliminarBusqueda();
  if(contenedorBuscar.value.length != 0)
    {
      if(iconoBuscar.className == "fa fa-times")
      {
        contenedorBuscar.value = "";
        CerrarLineasBusqueda();
        tituloBusqueda.textContent = "";
        contenedorBotonVerMas.style.display = "none";
        iconoBuscar.setAttribute("class", "fa fa-search");
        contenedorTextoTrending.style.display = "flex";
        
      }else{
        Buscar(contenedorBuscar.value, 0);
        contenedorTextoTrending.style.display = "none";
        resultadoBusqueda.style.display = "flex";
        contenedorBotonVerMas.style.display = "flex";
      }
    }
}

botonVerMasBuscar.onclick = async ()=>{
  offsetBuscar = offsetBuscar + 12;
  Buscar(contenedorBuscar.value, offsetBuscar);
}




//****************** Funcion Cerra Lineas de Busqueda **********************

function CerrarLineasBusqueda ()
{
  Array.from(divBusqueda).forEach((elementoBusqueda) => {
    elementoBusqueda.style.display = "none";
  });
  contenedor_buscar.style.height = "50px";
}


//************************* Funcion Buscar Gifo *****************************

async function Buscar (valorBusqueda, offset)
{
  const queryBuscar = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${valorBusqueda}&limit=12&offset=${offset}`;
  const respuestaBuscar = await fetch(encodeURI(queryBuscar));
  const BuscarData = await checkStatusAndParse(respuestaBuscar);
  console.log(BuscarData);
  
  if(BuscarData.pagination.count != 0)
  {
    cargarGifoBuscar(BuscarData.data);
    contenedorBusquedaSinResultado.style.display = "none";
    botonVerMasBuscar.style.display = "block";
  }else{
    botonVerMasBuscar.style.display = "none";
    contenedorBusquedaSinResultado.style.display = "flex";
    tituloBusqueda.textContent = contenedorBuscar.value;
  }
}


//************************* Funcion Cargar Gifos Busqueda *****************************

async function cargarGifoBuscar (data)
{
    for (let index = 0; index < data.length; index++) {
      
      const imgGifo = docum.createElement("img");
      imgGifo.className = "gifoResultadoBusqueda";
      imgGifo.src = await data[index].images.original.url;
      resultadoBusqueda.appendChild(imgGifo);
      tituloBusqueda.textContent = contenedorBuscar.value;
    }
}


function eliminarBusqueda()
{
  Array.from(gifoResultadoBusqueda).forEach((elementoBusqueda) => {
    resultadoBusqueda.removeChild(elementoBusqueda);
    });
}