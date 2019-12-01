const tableMenu = document.querySelector('.tableForecastMenu');
const mapMenu = document.querySelector('.mapForecastMenu');
const details = document.querySelector('.details');
const weather = document.querySelector('.weather');

tableMenu.addEventListener('click', () => {
    tableMenu.classList.add('active');
    mapMenu.classList.remove('active');
    details.classList.remove('off');
    weather.classList.add('off');
})

mapMenu.addEventListener('click', () => {
    mapMenu.classList.add('active');
    tableMenu.classList.remove('active');
    weather.classList.remove('off');
    details.classList.add('off');

})

