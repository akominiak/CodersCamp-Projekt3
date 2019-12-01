const topCities = ['Warszawa', 'Krak\u00f3w', 'Pozna\u0144', 'Szczecin', 'Lublin'];
let points = [];

export async function getFromApi() {
    let url = `https://danepubliczne.imgw.pl/api/data/synop/`;
    await fetch(url)
        .then(resp => resp.json())
        .then(response => {
            for (let i = 0; i < topCities.length; i++) {
                let city = response.find(x => x.stacja === topCities[i]);
                points.push({
                    name: topCities[i],
                    temperature: city.temperatura
                });
            }
        });
    displayTemperatures();
}

export function displayTemperatures() {
    for (let i = 0; i < points.length; i++) {
        insertTemperature(points[i].name, points[i].temperature);
    }
}

export function insertTemperature(city, temperature) {
    let cityOnMap = document.getElementById(city);
    cityOnMap.innerHTML = temperature;
}

getFromApi();