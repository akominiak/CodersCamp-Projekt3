function WeatherData(arr) {/*funkcja ktora wyswietla dane o stacji którą podało sie do inputa. Parametrem tej funkcji jest tablica z danymi wszystkich miast*/
         const inputValue=document.getElementById('input').value;/* pobranie wartosci z inputa o id="input" */
         arr.map(data => {
         const regex= new RegExp(inputValue,'i') /*sprawia ze wpisana stacja z małej litery tez jest rozpoznawana przez warunek if */
         if(data.stacja==data.stacja.match(regex)){
         document.querySelector('.item1').innerHTML=data.stacja; /*zwraca stacje podaną w inpucie */
         document.querySelector('.item2').innerHTML=data.temperatura;/*zwraca temperature do podanej stacji w inpucie */
         document.querySelector('.item3').innerHTML=data.cisnienie; /*zwraca cisnienie do podanej stacji w inpucie */
         document.querySelector('.item4').innerHTML=data.data_pomiaru; /*zwraca date pomiaru */
     }
 });
 }