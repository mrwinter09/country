import axios from 'axios';

async function fetchData() {
    const listUno = document.getElementById('list_u')

    const countryList = document.createElement('li')

    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data);
        console.log(result.data[0]);

        result.data.map((allCountries) => {
            countryList.innerHTML = `
        
            <h3>${allCountries.name}</h3>
            <p>${allCountries.population}</p>
            `

            listUno.appendChild(countryList)
        })





    }
    catch (error) {
        console.error(error)
    }
}

fetchData();

