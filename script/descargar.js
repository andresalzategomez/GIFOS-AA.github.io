iconDesc1.onclick = ()=>{
  Descargar(div1.src, usuarioGifo1.textContent);
}
iconDesc2.onclick = ()=>{
  Descargar(div2.src, usuarioGifo2.textContent);
}

iconDesc3.onclick = ()=>{
  Descargar(div3.src, usuarioGifo3.textContent);
}

async function Descargar(urlDescargar, nombreDescarga) {
    let a = document.createElement('a');
    let response = await fetch(urlDescargar);
    let file = await response.blob();
    a.download = nombreDescarga;
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
  }

imagenLogo.onclick = ()=>{
  contenedor_busqueda.style.display = "flex";
  contenedor_texto_trending.style.display = "flex";
  contTrending.style.display = "flex";
  contenedorMisFavoritos.style.display = "none";
  crearGifoContenedor.style.display = "none";
  
}