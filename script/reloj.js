var isMarch = false; 
var acumularTime = 0;

function start () {
    if (isMarch == false) { 
       timeInicial = new Date();
       control = setInterval(cronometro,10);
       isMarch = true;
    }
}

function stop () { 
    if (isMarch == true) {
       clearInterval(control);
       isMarch = false;
    }     
}

function cronometro () 
{ 
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime); 
    cc = Math.round(acumularTime2.getMilliseconds()/10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    
    if (cc < 10) {cc = "0"+cc;}
    if (ss < 10) {ss = "0"+ss;} 
    if (mm < 10) {mm = "0"+mm;}
    
    tiempoVideo.innerHTML = mm+" : "+ss+" : "+cc;
    
}