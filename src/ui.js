import { getObject } from "./api";
import { getPhoto } from "./api";

const titleUp = document.querySelector('.small-name');
const titleDown = document.querySelector('.big-name');
const search = document.querySelector('input');
const temp = document.querySelector('.temp');
const status = document.querySelector('.status');
const feelsLike = document.querySelector('.feels-like');
const smallValues = document.querySelectorAll(".value");
const updateTime = document.querySelector('.updated')
const background = document.querySelector('#background');

search.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && search.value != '') {
        updateDisplay(search.value)
        search.value = ''
    }
});

export async function updateDisplay(city) {
    let object = await getObject(city);

    titleUp.innerText = object.location.region.toUpperCase();
    titleDown.innerText = object.location.name.toUpperCase();
    temp.innerText = object.current.temp_c + '°';
    status.innerText = object.current.condition.text;
    feelsLike.innerText = `Feels like ${object.current.feelslike_c}°`
    smallValues[0].innerText = `${object.current.wind_dir} ${object.current.wind_kph} kph`;
    smallValues[1].innerText = `${object.current.vis_km} km`;
    smallValues[2].innerText = `${object.current.humidity}%`;
    smallValues[3].innerText = `${object.current.pressure_in} in`
    updateTime.innerText = `Page last update: ${object.current.last_updated}`
    
    await updateBackground(`${titleDown.innerText} ${status.innerText}`);
}

async function updateBackground(query) {
    let photoObj = await getPhoto(query);
    console.log(photoObj);
    background.src = photoObj.results[0].urls.regular;
}