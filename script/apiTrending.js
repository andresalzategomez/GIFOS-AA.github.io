//  *********************************************************************
//  ************************ OBTENER API TRENDING ***********************
//  *********************************************************************

const checkStatusAndParse = (res) => {
    if (!res.ok) {
      throw new Error(`Status code error: ${res.status}`);
    }
  
    return res.json();
  };

async function getTrending ()
{
    
    const queryTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=26`;
    const respuestaTrending = await fetch(encodeURI(queryTrending));
    const trendingData = await checkStatusAndParse(respuestaTrending);
    dataJsonTrending = trendingData;
    
    if(window.matchMedia("(max-width: 1330px)").matches) {
      cargarGifoTrendingMobile(dataJsonTrending.data, 0, 25);
      validarFavoritos(0);
    } else {
      cargarGifoTrending(dataJsonTrending.data, 0, 2);
      validarFavoritos(0);
    }
}


var mediaqueryList = window.matchMedia("(max-width: 1330px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    cargarGifoTrendingMobile(dataJsonTrending.data, 0, 25);
    validarFavoritos(0);
  } else {
    cargarGifoTrending(dataJsonTrending.data, 0, 2);
    validarFavoritos(0);
    location.reload();
  }
});





function cargarGifoTrending (data, desde, hasta)
{
    iconoFav1.style.color = "black";
    iconoFav2.style.color = "black";
    iconoFav3.style.color = "black";
    const imgGifo1 = div1;
    const imgGifo2 = div2;
    const imgGifo3 = div3;
      
    imgGifo1.src = data[desde].images.original.url;
    imgGifo1.setAttribute("alt", "Gifo");
    imgGifo1.className = "gifos_trending_gifos";
    usuarioGifo1.textContent = data[desde].username;
    titiloGifo1.textContent = data[desde].title;
    divGifos.append(imgGifo1);
  
    imgGifo2.src = data[desde+1].images.original.url;
    imgGifo2.setAttribute("alt", "Gifo");
    imgGifo2.className = "gifos_trending_gifos";
    usuarioGifo2.textContent = data[desde+1].username;
    titiloGifo2.textContent = data[desde+1].title;
    divGifos.append(imgGifo2);
  
    imgGifo3.src = data[hasta].images.original.url;
    imgGifo3.setAttribute("alt", "Gifo");
    imgGifo3.className = "gifos_trending_gifos";
    usuarioGifo3.textContent = data[hasta].username;
    titiloGifo3.textContent = data[hasta].title;
    divGifos.append(imgGifo3);
}


function cargarGifoTrendingMobile (data, desde, hasta)
{
  // Array.from(divImagenesTrending).forEach((elementoBusqueda) => {
  //   divGifos.removeChild(elementoBusqueda);
  //   });

  div1.remove();
  div2.remove();
  div3.remove();

  for (let index = desde; index <= hasta; index++) {
    
    const imgGifo = docum.createElement("img");
    imgGifo.src = data[index].images.original.url;
    imgGifo.setAttribute("alt", "Gifo");
    imgGifo.className = "gifos_trending_gifos";
    usuarioGifo1.textContent = data[index].username;
    titiloGifo1.textContent = data[index].title;
    divGifos.append(imgGifo);
  }
    // iconoFav1.style.color = "black";
    // iconoFav2.style.color = "black";
    // iconoFav3.style.color = "black";
    // const imgGifo1 = div1;
    // const imgGifo2 = div2;
    // const imgGifo3 = div3;
      
    // imgGifo1.src = data[desde].images.original.url;
    // imgGifo1.setAttribute("alt", "Gifo");
    // imgGifo1.className = "gifos_trending_gifos";
    // usuarioGifo1.textContent = data[desde].username;
    // titiloGifo1.textContent = data[desde].title;
    // divGifos.append(imgGifo1);
  
    // imgGifo2.src = data[desde+1].images.original.url;
    // imgGifo2.setAttribute("alt", "Gifo");
    // imgGifo2.className = "gifos_trending_gifos";
    // usuarioGifo2.textContent = data[desde+1].username;
    // titiloGifo2.textContent = data[desde+1].title;
    // divGifos.append(imgGifo2);
  
    // imgGifo3.src = data[hasta].images.original.url;
    // imgGifo3.setAttribute("alt", "Gifo");
    // imgGifo3.className = "gifos_trending_gifos";
    // usuarioGifo3.textContent = data[hasta].username;
    // titiloGifo3.textContent = data[hasta].title;
    // divGifos.append(imgGifo3);
}

botonAnt.onclick = ()=>{
  desdeTrending = desdeTrending - 3;
  hastaTrending = hastaTrending - 3;
  cargarGifoTrending(dataJsonTrending.data, desdeTrending, hastaTrending);
  
  validarFavoritos(desdeTrending);
  
  if (desdeTrending <= 1)
  {
    botonAnt.disabled = true;
  }
  botonSig.disabled = false;
  console.log(hastaTrending);
}

botonSig.onclick = ()=>{
  desdeTrending = desdeTrending + 3;
  hastaTrending = hastaTrending + 3;
  cargarGifoTrending(dataJsonTrending.data, desdeTrending, hastaTrending);
  validarFavoritos(desdeTrending);
  
  if(hastaTrending >= 23)
  {
    botonSig.disabled = true;
  }
  botonAnt.disabled = false;
  console.log(hastaTrending);
}


function validarFavoritos (desde)
{
  if(MisFavoritos[desde] != null) iconoFav1.style.color = "blue"; 
  if(MisFavoritos[desde+1] != null) iconoFav2.style.color = "blue";
  if(MisFavoritos[desde+2] != null) iconoFav3.style.color = "blue";
}


// *************************** Prueba Código ***********************


