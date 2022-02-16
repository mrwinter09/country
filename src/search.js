import axios from 'axios';
// https://restcountries.com/v2/name/peru// stappenplan voor countries part 2!
// 1.  Dependencies installeren voordat je begint met het schrijven van de code
// 2.  Je gaat dan een async functie schrijven (async / await)
// 3.  Je plaatst dit dan in een try catch constructie
// 4.  Het request zelf (endpoint, type)
//          -   dit is bijvoorbeeld de GET naar
//          -  Voor vlag, naam en currency kijk je naar all GET https://restcountries.com/v2/name/peru// 5.  Je checkt het dan met een console.log
// 5.  Countries.html formulier maken, met een imput en een button - stylen met css

// 6.  Je maakt een search function maken met een if else statement
// 7.  Keyup event listener die moet je halen uit target.value
//          -   Log en check dit dan vervolgens zodat je weet wat erin staat
// 8.   Je maakt dan een event listener die luistert naar een enter of klik (pagina moet niet refreshen = default)
// En een kleine tip: als je wil dat een zoek-functie wordt uitgevoerd op ENTER én op button-klik, kun je het zoekveld en de knop in een form-tag plaatsen. Vervolgens zet je dan een onsubmit event-listener op het gehele formulier!
// 9.   Maak hier een if else statement die je koppeld aan je API 
// 10. Probeer het op de pagina te krijgen (index html container maken en die naar javascript halen)
// 11.  Ga nu bezig met stylen

async function fetchCountriesData() {
    const containerResult = document.getElementById('countriesResult')
    try {
        const result = await axios.get('https://restcountries.com/v2/name/netherlands')
        console.log(result.data);
        console.log(result.data[0].name);
        console.log(result.data[0].flag);
        console.log(result.data[0].currencies[0].name);
        const countries = result.data[0]

        containerResult.innerHTML = `
        <h3><img src="${countries.flag}" width= "100px"/> ${countries.name}</h3>
        <p>${countries.name} is situated in ${countries.subregion}. It has a population of ${countries.population} people.</p>
        <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}.</p> 
        `
    }
    catch (error) {
        console.error(error)
    }
}

fetchCountriesData();

function getCurrencies(currencies) {
    if (currencies.length === 2) {
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}`;
    } else {
        return `and you can pay with ${currencies[0].name}`;
    }

}