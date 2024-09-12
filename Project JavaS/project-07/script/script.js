async function checkCountry() {
    let capital = document.querySelector("#capital").value;
    try {
        let result = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`);
        let countryData = result.data[0];
        document.querySelector("#flagCapital").innerHTML = `
            <img src="${countryData.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">Country: ${countryData.name.common}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Region: ${countryData.region}</li>
                <li class="list-group-item">Languages: ${Object.values(countryData.languages).join(', ')}</li>
                <li class="list-group-item">Population: ${countryData.population}</li>
            </ul>
            <div class="card-body">
                <a href="${countryData.maps.googleMaps}" class="card-link">Google Maps</a>
            </div>
        `;
    } catch (error) {
        console.log(error);
    }
}