const API_URL = 'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term';
const formavalandom = document.getElementById("valandine-forma");
const vdata = document.getElementById("datos-vieta");
const temperat = document.getElementById("temperatura");
const dienunav = document.getElementById("list-item");
let vieta,
    masyvas = [],
    laikasvalandos,
    temperatura,
    vejospeed,
    vejas,
    vejokryptis,
    debesuotumas,
    kodicija;

fetchAsync()
.then (kurk);
// .then (navigation);

async function fetchAsync(){
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    vieta = data.place.name;
    masyvas = data.forecastTimestamps;
    laikasvalandos = masyvas.forecastTimeUtc;
    temperatura = masyvas.airTemperature;
    vejospeed = masyvas.windSpeed;
    vejas = masyvas.windGust;
    vejokryptis = masyvas.windDirection;
    debesuotumas = masyvas.cloudCover;
    kondicija = masyvas.conditionCode;
    document.getElementById('vietove').innerHTML = vieta;
    return masyvas;
}

// function navigation(){
//     for(let i=sk; i<masyvas.length; i++){
//         if(masyvas[sk].forecastTimeUtc.slice(0,10) === masyvas[i].forecastTimeUtc.slice(0,10)){
//             const listitem = document.createElement('li');
//             const listitemdiv = document.createElement('div');
//             listitemdiv.className = 'card card2';
//             listitemdiv.innerHTML = (masyvas[i].forecastTimeUtc.slice(0,10));
//             dienunav.appendChild(listitem);
//             listitem.appendChild(listitemdiv);
//         }
//     }
// }

function kurk(){
    console.log(masyvas)
    for(let i=0; i<masyvas.length; i++){
    if(masyvas[0].forecastTimeUtc.slice(0,10) === masyvas[i].forecastTimeUtc.slice(0,10)){
        vdata.innerHTML = "Today";
        temperat.innerHTML = masyvas[0].airTemperature;
        const elementas = document.createElement('div');
        let valandos = 'card card3';
        elementas.className = valandos;
        elementas.innerHTML = (masyvas[i].forecastTimeUtc.slice(10,16));
        formavalandom.appendChild(elementas);
        const temperaturap = document.createElement('p');
        temperaturap.innerHTML = (masyvas[i].airTemperature);
        elementas.appendChild(temperaturap);
        console.log(masyvas[i].conditionCode)
        if(masyvas[i].conditionCode === "clear"){
            const condicija = document.createElement('i');
            let klase = 'fas fa-cloud-meatball';
            condicija.className = klase;
            condicija.innerHTML = ("aaa");
            elementas.appendChild(condicija);
            }
            else if(masyvas[i].conditionCode === "isolated-clouds"){
                const condicija = document.createElement('i');
                let klase = 'fas fa-cloud-meatball';
                condicija.className = klase;
                condicija.innerHTML = ("aa");
                elementas.appendChild(condicija);
                }
            else if(masyvas[i].conditionCode === "light-rain"){
                const condicija = document.createElement('i');
                let klase = 'fas fa-cloud-meatball';
                condicija.className = klase;
                condicija.innerHTML = ("aa");
                elementas.appendChild(condicija);
                }
        }
    }
}


// scatter - <i class="fas fa-cloud-meatball"></i>
// clear - <i class="fas fa-sun"></i>
// isolaed-clouds - <i class="fas fa-smog"></i> 
// overcast - <i class="fas fa-cloud-sun"></i>
// lightrain - <i class="fas fa-cloud-sun-rain"></i>
// moderaterain - <i class="fas fa-cloud-showers-heavy"></i>