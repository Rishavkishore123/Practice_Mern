function fetchapi(){
    
    const api ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=JZ8C422VSQCWJMYJVCPPCD77J"
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {  
        renderUI(data);    
        renderTable(data);  
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function renderTable(data){
    const table = document.querySelector('.table');
    table.innerHTML = `
    <tr>
        <th>Day</th>
        <th>Conditions</th>
        <th>Temperature</th> 
        <th>Humidity</th>
        <th>UV Index</th>
        <th>Visibility</th>
    </tr>
    `;
    data.days.forEach(day => {
        table.innerHTML += `
        <tr>
            <td>${day.datetime}</td>
            <td>${day.conditions}</td>
            <td>${day.tempmax}F</td>
            <td>${day.humidity}%</td>
            <td>${day.uvindex}</td>
            <td>${day.visibility}miles</td>
        </tr>
        `;
    });
}




function renderUI(data){
    const weather = document.querySelector('.weather');
    weather.innerHTML = `
    <h1>Weather in Ghaziabad</h1>
    <h2>${data.days[1].conditions}</h2>
    <h3>Temperature: ${data.days[1].tempmax}F</h3>
    <h3>Humidity: ${data.days[1].humidity}%</h3>
    <h3>UV Index: ${data.days[1].uvindex}</h3>
    <h3>Visibility: ${data.days[1].visibility}miles</h3>
    `;
}
fetchapi(); 