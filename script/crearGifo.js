var stream = { audio: false, video: { width: 1280, height: 720 } };
var video = document.querySelector('video');

botonCrearGifo.onclick = async ()=>{
    if (botonCrearGifo.textContent === "COMENZAR")
    {
        CrearGifoTextoAzul1.textContent = "¿Nos das acceso";
        CrearGifoTextoAzul2.textContent = "a tu cámara?";
        CrearGifoTextoNegro1.textContent = "El acceso a tu cámara será válido sólo";
        CrearGifoTextoNegro2.textContent = "por el tiempo en el que éstes creando el GIFO.";
        CrearGifoCirculo1.style.backgroundColor = "Blue";
        CrearGifoCirculo1.style.color = "white";
        abrirCamara();
    }else{
        if (botonCrearGifo.textContent === "GRABAR")
        {
            Grabar();
            tiempoVideo.style.display = "flex";
            start();
            botonCrearGifo.textContent = "FINALIZAR";
        }else{
            if (botonCrearGifo.textContent === "FINALIZAR")
            {
                try
                {
                    stop();
                    await recorder.stopRecording();
                    tiempoVideo.textContent = "REPETIR CAPTURA";
                    tiempoVideo.style.textDecoration = "underline gray";
                    
                    botonCrearGifo.textContent = "SUBIR GIFO";
                    // CrearGifoVideo.style.display = "none";
                    // crearGifoRecuadro.style.display = "flex";
                }catch (e){
                    console.error(e);
                    botonCrearGifo.textContent = "COMENZAR";
                    CrearGifoVideo.style.display = "none";
                    crearGifoRecuadro.style.display = "flex";
                }
            }else{
                if (botonCrearGifo.textContent === "SUBIR GIFO")
                {
                    CrearGifoCirculo1.style.backgroundColor = "white";
                    CrearGifoCirculo1.style.color = "blue";
                    CrearGifoCirculo2.style.backgroundColor = "white";
                    CrearGifoCirculo2.style.color = "blue";
                    CrearGifoCirculo3.style.backgroundColor = "Blue";
                    CrearGifoCirculo3.style.color = "white";
                    
                    CrearGifoVideo.style.display = "none";
                    crearGifoRecuadro.style.display = "none";
                    crearGifoRecuadroSubido.style.display = "flex";

                    botonCrearGifo.textContent = "NUEVO GIFO";
                    tiempoVideo.textContent = "";
                    tiempoVideo.style.display = "none";
                    
                    let blob = await recorder.getBlob();
                    guardarGIFO(blob);
                }else{
                    CrearGifoCirculo1.style.backgroundColor = "white";
                    CrearGifoCirculo1.style.color = "blue";
                    CrearGifoCirculo2.style.backgroundColor = "Blue";
                    CrearGifoCirculo2.style.color = "white";
                    CrearGifoCirculo3.style.backgroundColor = "white";
                    CrearGifoCirculo3.style.color = "blue";

                    botonCrearGifo.textContent = "COMENZAR";
                    CrearGifoVideo.style.display = "none";
                    crearGifoRecuadroSubido.style.display = "none";
                    crearGifoRecuadro.style.display = "flex";

                    abrirCamara();
                }
            }
        }
    }
}


tiempoVideo.onclick = async ()=>{
    if (tiempoVideo.textContent === "REPETIR CAPTURA")
    {
        botonCrearGifo.textContent = "GRABAR";
        abrirCamara();
        tiempoVideo.style.display = "none";
        CrearGifoVideo.style.display = "none";
        crearGifoRecuadro.style.display = "flex";
    }
}

async function guardarGIFO(blob)
{
    let formData = new FormData();
    const usuario = "andresalzateg";
    formData.append('api_key', APIKey);
    formData.append('username', usuario);
    formData.append('file', blob, 'myGif.gif');
    formData.append('tags', 'mygifo');
    // invokeSaveAsDialog(blob);

    const queryCargarGifo = `https://upload.giphy.com/v1/gifs`;
    await fetch(encodeURI(queryCargarGifo), {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>
        {
            // console.log('Success:', response);
            MisGifos.push(response.data.id);
            localStorage.setItem('MisGifos', JSON.stringify(MisGifos));
            this.video.srcObject.getTracks()[0].stop();
        });
}


async function abrirCamara ()
{
    await navigator.mediaDevices.getUserMedia(stream)
    .then(function(stream) {
        CrearGifoVideo.style.display = "flex";
        crearGifoRecuadro.style.display = "none";
        botonCrearGifo.textContent = "GRABAR";

        CrearGifoCirculo1.style.backgroundColor = "white";
        CrearGifoCirculo1.style.color = "blue";
        CrearGifoCirculo2.style.backgroundColor = "Blue";
        CrearGifoCirculo2.style.color = "white";

        video.srcObject = stream;
        video.onloadedmetadata = async function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.log(err.name + ": " + err.message); 
    }); // always check for errors at the end.
}


function Grabar ()
{
    // var stream = { audio: false, video: { width: 1280, height: 720 } };
    navigator.mediaDevices.getUserMedia(stream)
    .then(function(stream) {
    video.srcObject = stream;
    video.onloadedmetadata = async function(e) {
        video.play();
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
             console.log('started')
           },
          });
        recorder.startRecording();
        // const sleep = m => new Promise  (r => setTimeout(r, m));
        // await sleep(3000);

        // await recorder.stopRecording();
        // let blob = await recorder.getBlob();
        // invokeSaveAsDialog(blob);
        // video.pause();
    };
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
}