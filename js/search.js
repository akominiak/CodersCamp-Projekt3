const searching = document.querySelector('.searchCity'); //Pole wyszukiwarki
const suggestions = document.querySelector('.suggestion'); //Pole dopasowanych miast

const cities = []; //tablica, do ktorej wrzucimy dane otrzymane z APi

fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then(resp => resp.json())
    .then(resp => cities.push(...resp));

function findCity(word, city) {
    return city.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.stacja.match(regex);
    })
}

//Funkcja, która w miejsce tekstu wyszukiwarki wstawia klikniete miasto
function insertIntoSearching(parametr) {
    searching.value = parametr.innerHTML;
}


function displayCities() {
    /*
    matchArray to tablica zawierająca miasta, których nazwa zawiera
    znaki wpisane w wyszukiwarce.
    Funkcja findCity to funkcja, która tworzy tą tablicę.
    */
    const matchArray = findCity(this.value, cities);

    //Poniżej następuje tworzenie listy proponowanych miast
    //Na podstawie dopasowania, które nastąpiło wyżej
    const html = matchArray.map(city => {
        return `
        <li>
        <span class ="name" onclick="insertIntoSearching(this)" " >${city.stacja}</span>
        </li>
        `;
    }).join('');
    //Dodawanie listy dopasowanych miast 
    suggestions.innerHTML = html;

    if (searching.value == "") {
        suggestions.innerHTML = `<li><span class ="name">Brak wyników</span></li>`;
    }
}


searching.addEventListener('keyup', displayCities);