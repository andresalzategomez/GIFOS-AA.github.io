//  *********************************************************************
//  **************************** MOUSEOVER ******************************
//  *********************************************************************

div1.onmouseover = ()=>{
  divTextos1.style.display = "inline";
}
div1.onmouseout = ()=>{
  divTextos1.style.display = "none";
}

div2.onmouseover = ()=>{
  divTextos2.style.display = "inline";
}
div2.onmouseout = ()=>{
  divTextos2.style.display = "none";
}

div3.onmouseover = ()=>{
  divTextos3.style.display = "inline";
}
div3.onmouseout = ()=>{
  divTextos3.style.display = "none";
}


//  *********************************************************************
//  ****************************** ON CLICK *****************************
//  *********************************************************************

div1.onclick = function() {
  expandir(div1.src, desdeTrending, usuarioGifo1.textContent, tituloGifo1.textContent, iconoFavGifo1.style.color);
}
iconoexpandir1.onclick = function() {
  expandir(div1.src, desdeTrending, usuarioGifo1.textContent, tituloGifo1.textContent, iconoFavGifo1.style.color);
}


docum.addEventListener("click", function(evt){
  // console.log(evt);
  // console.log(evt.target);
  // console.log(evt.target.src);
  // console.log(evt.target.id);
  if(evt.target.className === "gifos_trending_gifos" && evt.target.id == "")
  {
    var gifoMobile = BuscarGifo(evt.target.src);
    // console.log(gifoMobile);
    expandir(evt.target.src, gifoMobile[2], gifoMobile[0], gifoMobile[1], gifoMobile[3]);
  }
});

div2.onclick = function() {
  expandir(div2.src, (desdeTrending + 1), usuarioGifo2.textContent, tituloGifo2.textContent, iconoFavGifo2.style.color);
}
iconoexpandir2.onclick = function() {
  expandir(div2.src, (desdeTrending + 1), usuarioGifo2.textContent, tituloGifo2.textContent, iconoFavGifo2.style.color);
}

div3.onclick = function() {
  expandir(div3.src, (desdeTrending + 2), usuarioGifo3.textContent, tituloGifo3.textContent, iconoFavGifo3.style.color);
}
iconoexpandir3.onclick = function() {
  expandir(div3.src, (desdeTrending + 2), usuarioGifo3.textContent, tituloGifo3.textContent, iconoFavGifo3.style.color);
}



span.onclick = function() {
  modal.style.display = "none";
  // location.reload();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // location.reload();
  }
}


iconoFavGifoSelect.onclick = ()=>{
  if (iconoFavGifoSelect.style.color === "black")
  {
    iconoFavGifoSelect.style.color = "blue";
    var nuevoGifo = new Gifos(textoGifoTitulo.textContent, textoGifoUsuario.textContent, imgGifoSelect.src);
    MisFavoritos[desdeUnoaUno] = nuevoGifo;
    localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
  }else
  {
    iconoFavGifoSelect.style.color = "black";
    if(MisFavoritos[desdeUnoaUno] != "undefined")
    {
      MisFavoritos[desdeUnoaUno] = null;
      localStorage.setItem('Favoritos', JSON.stringify(MisFavoritos));
    }
  }
  
}




iconodescargaGifoSelect1.onclick = ()=>{
  Descargar(imgGifoSelect.src, usuarioGifoSelect.textContent);
}

boton_anterior_modal.onclick = ()=>{
  if (desdeUnoaUno <= 0)
  {
    boton_anterior_modal.disabled = true;
  }else
  {
    desdeUnoaUno = desdeUnoaUno - 1;
    cargarGifoUnoaUno(dataJsonTrending.data, desdeUnoaUno);
    
    validarFavoritosUnoaUno(desdeUnoaUno);
  
  }
  boton_siguiente_modal.disabled = false;
}

boton_siguiente_modal.onclick = async ()=>{
  desdeUnoaUno = desdeUnoaUno + 1;
  await cargarGifoUnoaUno(dataJsonTrending.data, desdeUnoaUno);
  validarFavoritosUnoaUno(desdeUnoaUno);
  
  if(desdeUnoaUno == 24)
  {
    boton_siguiente_modal.disabled = true;
  }
  boton_anterior_modal.disabled = false;
}

function cargarGifoUnoaUno (data, desde)
{
  iconoFavGifoSelect.style.color = "black";
  imgGifoSelect.src = data[desde].images.original.url;
  imgGifoSelect.setAttribute("alt", "Gifo");
  imgGifoSelect.className = "gifos_trending_gifos";
  textoGifoUsuario.textContent = data[desde].username;
  textoGifoTitulo.textContent = data[desde].title;
}

function validarFavoritosUnoaUno (desde)
{
  if(MisFavoritos[desde] != null) iconoFavGifoSelect.style.color = "blue";
}


function expandir (srcDiv, desdeDiv, usuarioDiv, tituloDiv, colorDiv)
{
  modal.style.display = "flex";
  imgGifoSelect.src = srcDiv;

  desdeUnoaUno = desdeDiv;
  
  usuarioGifoSelect.textContent = usuarioDiv;
  tituloGifoSelect.textContent = tituloDiv;
  iconoFavGifoSelect.style.color = colorDiv;
}

function BuscarGifo(srcBuscar)
{
  var gifo=null;
  var vectorGifo = new Array();
  for (let index = 0; index < dataJsonTrending.data.length; index++) {
    if(dataJsonTrending.data[index].images.original.url === srcBuscar)
    {
      // gifo = dataJsonTrending.data[index];
      vectorGifo[0] = dataJsonTrending.data[index].username;
      vectorGifo[1] = dataJsonTrending.data[index].title;
      vectorGifo[2] = index;
      if(MisFavoritos[index] != null)
      {
        vectorGifo[3] = "blue";
      }else{
        vectorGifo[3] = "black";
      }
      break;
    }
  }
  
  return vectorGifo;
}