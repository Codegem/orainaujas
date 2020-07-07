const API_URL = 'https://api.meteo.lt/v1/places/vilnius/forecasts/long-term';
const formavalandom = document.getElementById("valandine-forma");
const vdata = document.getElementById("datos-vieta");
const temperat = document.getElementById("temperatura");
const dienunav = document.getElementById("list-item");
const vdata2 = document.getElementById("datos-vieta2");
const vdata3 = document.getElementById("datos-vieta3");
const vdata4 = document.getElementById("datos-vieta4");
const vdata5 = document.getElementById("datos-vieta5");
const vdata6 = document.getElementById("datos-vieta6");
const vdata7 = document.getElementById("datos-vieta7");

let vieta,
    masyvas = [],
    laikasvalandos,
    temperatura,
    vejospeed,
    vejas,
    vejokryptis,
    debesuotumas,
    kodicija;
let sk=0;

fetchAsync()
.then (kurk);

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

function kurk(){
    console.log(masyvas)
    for(let i=0; i<masyvas.length; i++){
        //masyvas i slicina data 2020-07-07
    if(masyvas[0].forecastTimeUtc.slice(0,10) === masyvas[i].forecastTimeUtc.slice(0,10)){
        vdata.innerHTML = "Today";
        temperat.innerHTML = masyvas[0].airTemperature;
        const elementas = document.createElement('div');
        let valandos = 'card card3';
        elementas.className = valandos;
        // slicina valandas pvz 10:00
        elementas.innerHTML = (masyvas[i].forecastTimeUtc.slice(10,16));
        formavalandom.appendChild(elementas);
        const temperaturap = document.createElement('p');
        temperaturap.innerHTML = (masyvas[i].airTemperature);
        elementas.appendChild(temperaturap);
        console.log(masyvas[i].conditionCode)
        sk++;
        console.log(sk)
        if(masyvas[i].conditionCode === "clear"){
            const condicija = document.createElement('i');
            let klase = 'fas fa-cloud-meatball';
            condicija.className = klase;
            condicija.innerHTML = ("");
            elementas.appendChild(condicija);
            }
            else if(masyvas[i].conditionCode === "isolated-clouds"){
                const condicija = document.createElement('i');
                let klase = 'fas fa-cloud-sun';
                condicija.className = klase;
                condicija.innerHTML = ("");
                elementas.appendChild(condicija);
                }
            else if(masyvas[i].conditionCode === "light-rain"){
                const condicija = document.createElement('i');
                let klase = 'fas fa-cloud-sun-rain';
                condicija.className = klase;
                condicija.innerHTML = ("");
                elementas.appendChild(condicija);
                }
    }
        vdata2.innerHTML = masyvas[i].forecastTimeUtc.slice(0,10);
        if(vdata2 != vadata3){

        }
    }
}