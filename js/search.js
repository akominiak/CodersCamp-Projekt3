import {
    weatherData
} from './display';

const searching = document.querySelector('input.searchCity'); //Pole wyszukiwarki
const suggestions = document.querySelector('.suggestion'); //Pole dopasowanych miast

const cities = []; //tablica, do ktorej wrzucimy dane otrzymane z APi

fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then(resp => resp.json())
    .then(resp => cities.push(...resp));


export function findCity(word, city) {
    return city.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.stacja.match(regex);
    })
}


export function displayCities() {
    /*
    matchArray to tablica zawierająca miasta, których nazwa zawiera
    znaki wpisane w wyszukiwarce.
    Funkcja findCity to funkcja, która tworzy tą tablicę.
    */
    const matchArray = findCity(searching.value, cities);

    //Poniżej następuje tworzenie listy proponowanych miast
    //Na podstawie dopasowania, które nastąpiło wyżej
    const html = matchArray.map(city => {
        return `
        <li>
        <span class ="name">${city.stacja}</span>
        </li>
        `;
    }).join('');
    //Dodawanie listy dopasowanych miast 
    suggestions.innerHTML = html;

    if (searching.value == "") {
        suggestions.innerHTML = `<li><span class ="name">Brak wyników</span></li>`;
    }

    const li = [...document.querySelectorAll('ul.suggestion li span')];
    console.log(li)
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            searching.value = this.innerHTML;
            suggestions.innerHTML = "";
            weatherData(cities);
        })
    }
}

searching.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        weatherData(cities);
    }
});