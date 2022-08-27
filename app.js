const api = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log(item)
            const section = document.getElementById('section');
            const div = document.createElement('div');
            div.classList.add('box');
            div.innerHTML = `
                <img src="${item.flags.png}">
                <h5>${item.name.common}</h5>
                <h6>Capital: ${item.capital[0]}</h6>
                <h4>population: ${item.population}</h4>
            `
            section.appendChild(div)
        });
    })
}
api()