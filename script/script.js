//  *********************************************************************
//  ************************** Variables DOM ****************************
//  *********************************************************************
const docum = document;
const APIKey = "rSG92FlrEhdkKNTfCOLwv7wl76VZpUqi";

const imagenLogo = docum.getElementById("imagenLogo");
const logo = docum.getElementById("logo");
const div1 = docum.getElementById("div1");
const divImagenesTrending = docum.getElementsByClassName("gifos_trending_gifos");
const divTextos1 = docum.getElementById("textosGifos1");
const div2 = docum.getElementById("div2");
const divTextos2 = docum.getElementById("textosGifos2");
const div3 = docum.getElementById("div3");
const divTextos3 = docum.getElementById("textosGifos3");
const usuarioGifo1 = docum.getElementById("usuarioGifo1");
const titiloGifo1 = docum.getElementById("tituloGifo1");
const usuarioGifo2 = docum.getElementById("usuarioGifo2");
const titiloGifo2 = docum.getElementById("tituloGifo2");
const usuarioGifo3 = docum.getElementById("usuarioGifo3");
const titiloGifo3 = docum.getElementById("tituloGifo3");

//  *********************************************************************
//  ************************* API Trending ******************************
//  *********************************************************************
const botonAnt = docum.getElementById("boton_anterior");
const botonSig = docum.getElementById("boton_siguiente");
const divGifos = docum.getElementById("gifos_trending");
let desdeTrending = 0;
let hastaTrending = 2;
let dataJsonTrending;

//  *********************************************************************
//  ***************************** Buscar ********************************
//  *********************************************************************
const contenedorBuscar = docum.getElementById("input_buscar");
const contenedor_buscar = docum.getElementById("contenedor_buscar");
const divBusqueda = docum.getElementsByClassName("divBusqueda");
const gifoResultadoBusqueda = docum.getElementsByClassName("gifoResultadoBusqueda");
const divBusqueda1 = docum.getElementById("divBusqueda1");
const divBusqueda2 = docum.getElementById("divBusqueda2");
const divBusqueda3 = docum.getElementById("divBusqueda3");
const textoLinea1 = docum.getElementById("textoLinea1");
const textoLinea2 = docum.getElementById("textoLinea2");
const textoLinea3 = docum.getElementById("textoLinea3");
const contenedorTextoTrending = docum.getElementById("contenedor_texto_trending");
const resultadoBusqueda = docum.getElementById("resultadoBusqueda");
const tituloBusqueda = docum.getElementById("tituloBusqueda");
const contenedor_busqueda = docum.getElementById("contenedor_busqueda");
const contenedorBotonVerMas = docum.getElementById("contenedorBotonVerMas");
const contenedorBusquedaSinResultado = docum.getElementById("contenedorBusquedaSinResultado");
var offsetBuscar = 0;

//  *********************************************************************
//  **************************** Descargar ******************************
//  *********************************************************************
const iconDesc1 = docum.getElementById("iconodescarga1");
const iconDesc2 = docum.getElementById("iconodescarga2");
const iconDesc3 = docum.getElementById("iconodescarga3");
const iconodescargaGifoSelect1 = docum.getElementById("iconodescargaGifoSelect1");

//  *********************************************************************
//  **************************** Favoritos ******************************
//  *********************************************************************
const iconoFav1 = docum.getElementById("iconoFav1");
const iconoFav2 = docum.getElementById("iconoFav2");
const iconoFav3 = docum.getElementById("iconoFav3");
const tituloFavoritos = docum.getElementById("tituloFavoritos");
const imagenCorazonFav = docum.getElementById("imagenCorazonFav");
const contenedorMisFavoritos = docum.getElementById("contenedorMisFavoritos");
const imagenCorazonSinContenido = docum.getElementById("imagenCorazonSinContenido");
const gifosFavoritos = docum.getElementById("gifosFavoritos");
const textoFavoritosSinContenido = docum.getElementById("textoFavoritosSinContenido");
const gifoResultadoFavoritos = docum.getElementsByClassName("gifoResultadoFavoritos");
var MisFavoritos = new Array();

if(localStorage.getItem('Favoritos') != "[null]" && localStorage.getItem('Favoritos') != null)
{
    MisFavoritos = JSON.parse(localStorage.getItem('Favoritos'));
    console.log("no es null");
}

//  *********************************************************************
//  **************************** Crear Gifo *****************************
//  *********************************************************************
var MisGifos = new Array();
if(localStorage.getItem('MisGifos') != "[null]" && localStorage.getItem('MisGifos') != null)
{
    MisGifos = JSON.parse(localStorage.getItem('MisGifos'));
}

const botonCrearGifo = docum.getElementById("botonCrearGifo");
const CrearGifoVideo = docum.getElementById("CrearGifoVideo");
const crearGifoRecuadro = docum.getElementById("crearGifoRecuadro");
const textoOculto = docum.getElementById("textoOculto");
const crearGifoContenedor = docum.getElementById("crearGifoContenedor");
const addLogo = docum.getElementById("add-logo");
const imagenCamara = docum.getElementById("imagenCamara");
const imagenPelicula = docum.getElementById("imagenPelicula");
const crearGifoTextoRecuadro = docum.getElementById("crearGifoTextoRecuadro");
const CrearGifosTextoNegro = docum.querySelectorAll(".CrearGifosTextoNegro");
const CrearGifoCirculo = docum.querySelectorAll(".CrearGifoCirculo");
const crearGifoLineaAzul = docum.getElementById("crearGifoLineaAzul");
const CrearGifoTextoAzul1 = docum.getElementById("CrearGifoTextoAzul1");
const CrearGifoTextoAzul2 = docum.getElementById("CrearGifoTextoAzul2");
const CrearGifoTextoNegro1 = docum.getElementById("CrearGifoTextoNegro1");
const CrearGifoTextoNegro2 = docum.getElementById("CrearGifoTextoNegro2");
const tiempoVideo = docum.getElementById("tiempoVideo");
const fuenteOk = docum.getElementById("fuenteOk");
const crearGifoRecuadroSubido = docum.getElementById("crearGifoRecuadroSubido");

//  *********************************************************************
//  ***************************** Modal *********************************
//  *********************************************************************
var modal = docum.getElementById("myModal");
var span = docum.getElementsByClassName("close")[0];
var desdeUnoaUno = 0;
var hastaUnoaUno = 1;
const textoModal = docum.getElementById("textoModal");
const divGifoExtend = docum.getElementById("GifoExtend");
const imgGifoSelect = docum.getElementById("imgGifoSelect");
const usuarioGifoSelect = docum.getElementById("textoGifoUsuario");
const tituloGifoSelect = docum.getElementById("textoGifoTitulo");
const iconoFavGifoSelect = docum.getElementById("iconoFav1GifoSelect1");
const tituloGifo1 = docum.getElementById("tituloGifo1");
const iconoFavGifo1 = docum.getElementById("iconoFav1");
const tituloGifo2 = docum.getElementById("tituloGifo2");
const iconoFavGifo2 = docum.getElementById("iconoFav2");
const tituloGifo3 = docum.getElementById("tituloGifo3");
const iconoFavGifo3 = docum.getElementById("iconoFav3");
const boton_anterior_modal = docum.getElementById("boton_anterior_modal");
const boton_siguiente_modal = docum.getElementById("boton_siguiente_modal");

//  *********************************************************************
//  ************************** Modo Nocturno ****************************
//  *********************************************************************
const menuModoNocturno = docum.getElementById("idModoNocturno");
const headerLinea = docum.getElementById("header_lineaAzul");
const footerLinea = docum.getElementById("footer_lineaAzul");
const textoBusqueda = docum.getElementById("texto_busqueda");
const menu = docum.getElementById("menu");
const itemA = docum.querySelectorAll(".itemA"); 
const itemLI1 = docum.getElementById("itemLI1"); 
const itemLI2 = docum.getElementById("itemLI2"); 
const itemLI3 = docum.getElementById("itemLI3"); 
const listaItems = docum.getElementById("listaItems");
const menuHeader = docum.getElementById("header");
const menuModo = docum.getElementById("idModoNocturno");
const menuFav = docum.getElementById("idFavoritos");
const menuGif = docum.getElementById("idMisGifos");
const divBuscar = docum.getElementById("contenedor_buscar");
const inputBuscar = docum.getElementById("input_buscar");
const iconoBuscar = docum.getElementById("iconoBuscar");
const botonBuscar = docum.getElementById("botonBuscar");
const contTrending = docum.getElementById("contenedor_trending_gifos");
const tituloTrendingGifos = docum.getElementById("titulo_trending_gifos");
const textoTrendingGifos = docum.getElementById("texto_trending_gifos");
const tituloTrending = docum.getElementById("titulo_trending");
const textoTrending = docum.getElementById("texto_trending");
const contGifos = docum.getElementById('contenedor_gifos');
const botonSiguiente = docum.getElementById('boton_siguiente');
const botonAnterior = docum.getElementById('boton_anterior');
const footer = docum.getElementById('footer');
const face = docum.getElementById('facebook');
const twtt = docum.getElementById('twitter');
const inst = docum.getElementById('instagram');

