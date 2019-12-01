export function weatherData(arr) {
    /*funkcja ktora wyswietla dane o stacji którą podało sie do inputa. Parametrem tej funkcji jest tablica z danymi wszystkich miast*/
    const inputValue = document.getElementById('input').value; /* pobranie wartosci z inputa o id="input" */
    arr.map(data => {
        const regex = new RegExp(inputValue, 'i') /*sprawia ze wpisana stacja z małej litery tez jest rozpoznawana przez warunek if */
        if (data.stacja == data.stacja.match(regex)) {
            const icon = document.querySelector('.icon');
            if (data.temperatura > 20) {
                icon.innerHTML = '<i class="far fa-sun"></i>';
            } else if (data.temperatura <= 20 && data.temperatura > 10) {
                icon.innerHTML = '<i class="fas fa-cloud-sun"></i>';
            } else if (data.temperatura <= 10 && data.temperatura > 0) {
                icon.innerHTML = '<i class="fas fa-cloud"></i>';
            } else {
                icon.innerHTML = '<i class="fas fa-snowflake"></i>';

            }
            document.querySelector('.item1').innerHTML = data.stacja; /*zwraca stacje podaną w inpucie */
            document.querySelector('.item2').innerHTML = "Temperatura: " + data.temperatura + "&#186C"; /*zwraca temperature do podanej stacji w inpucie */
            document.querySelector('.item3').innerHTML = "Ciśnienie: " + data.cisnienie + " hPa"; /*zwraca cisnienie do podanej stacji w inpucie */
            document.querySelector('.item4').innerHTML = data.data_pomiaru + ", " + data.godzina_pomiaru + ":00"; /*zwraca date pomiaru */
        }
    });
}