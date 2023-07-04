const region = document.getElementById('tablaRegion').getAttribute('name');
console.log(region)

async function apiCall(city) { 
  try {
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        .then (resp => resp.json())
        .then (recurso => {
          
          let weatherIcon = "";

          if (recurso.weather[0].main === "Clear" ) {
            weatherIcon = '<i class="fa-solid fa-sun" style="color: #fbf304;"></i>';
          } else if (recurso.weather[0].main === "Clouds") {
            weatherIcon = '<i class="fa-solid fa-cloud" style="color: #0561ff;"></i>'; 
            
          } else if (recurso.weather[0].main === "Rain") {
            weatherIcon = '<i class="fa-solid fa-cloud-rain" style="color: #0561ff;"></i>'; 
            
          } else if (recurso.weather[0].main === "Snow") {
            weatherIcon = '<i class="fa-solid fa-snowflake" style="color: #00babd;"></i>'; 
            
          } else {
            weatherIcon = recurso.weather[0].main;
          }  
          
          const newCity = 
          `<tr>
          <td>${recurso.name}</td>
          <td>${recurso.main.temp_max}</td>
          <td>${recurso.main.temp_min}</td>
          <td>${weatherIcon}</td>
          </tr>`   

          document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
        } );
  
} catch (error) {
  console.log(error)
}
}

if (region === 'cuyo') {
    
    const cities = ['mendoza', 'san juan', 'san luis', 'la rioja'];

    cities.forEach( async city => {
        apiCall(city)
    })
}

if (region === 'patagonia') {
    
    const cities = ['neuquen', 'rio negro', 'rawson', 'santa cruz', 'ushuaia'];

    cities.forEach(async city => {
      apiCall(city)
    })
}

if (region === 'litoral') {
    
    const cities = ['corrientes', 'entre rios', 'misiones', 'santa fe'];

    cities.forEach(async city => {
        
      apiCall(city)
          })
}

if (region === 'pampa') {
    
    const cities = ['la pampa', 'buenos aires', 'cordoba'];

    cities.forEach( async city => {
        
      apiCall(city)
    })
}

if (region === 'norte') {
    
    const cities = ['san salvador', 'salta', 'tucuman', 'catamarca', 'santiago del estero', 'la rioja', 'formosa', 'resistencia'];

    cities.forEach(async city => {
        
      apiCall(city)
    })
}