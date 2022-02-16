import axios from 'axios';

async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data);
        console.log(result.data[0]);

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data)

    }
    catch (error) {
        console.error(error)
    }
}

fetchData();

function getAllCountries(countries) {
    const listUno = document.getElementById('list_u');

    countries.map((allCountries) => {

        const countryList = document.createElement('li');

        countryList.innerHTML = `
        
        <h3 class="${allCountries.region}"><img src="${allCountries.flag}" class="flag"/> ${allCountries.name}</h3>
        <p>Has a population of ${allCountries.population} people</p>
        `

        listUno.appendChild(countryList)
    })

}

