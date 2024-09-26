document.getElementById('covidForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const country = document.getElementById('country').value;
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = `
                <div><strong> 🌍 Country:</strong> ${data.country}</div>
                <div><strong> 🦠 Cases:</strong> ${data.cases.toLocaleString()}</div>
                <div><strong> ⚰️ Deaths:</strong> ${data.deaths.toLocaleString()}</div>
                <div><strong> 💪 Recovered:</strong> ${data.recovered.toLocaleString()}</div>
            `;
        })
        .catch(() => {
            const results = document.getElementById('results');
            results.innerHTML = `<div>Error fetching data. Please try again. 😞</div>`;
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});