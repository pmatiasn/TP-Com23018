const region = document.getElementById('tablaRegion').getAttribute('name');
console.log(region)
if (region === 'cuyo') {
    
    const cities = ['mendoza', 'san juan', 'san luis', 'la rioja'];

    cities.forEach( async city => {
        try {
          await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
                .then (resp => resp.json())
                .then (recurso => {
          
                  const newCity = 
                  `<tr>
                  <td>${recurso.name}</td>
                  <td>${recurso.main.temp_max}</td>
                  <td>${recurso.main.temp_min}</td>
                  <td>${recurso.weather[0].main}</td>
                  </tr>`   
  
                  document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
                } );
          
        } catch (error) {
          console.log(error)
        }
    })
}

if (region === 'patagonia') {
    
    const cities = ['neuquen', 'rio negro', 'rawson', 'santa cruz', 'ushuaia'];

    cities.forEach(async city => {
        try {
          
          await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
                .then (resp => resp.json())
                .then (recurso => {
          
                  const newCity = 
                  `<tr>
                  <td>${recurso.name}</td>
                  <td>${recurso.main.temp_max}</td>
                  <td>${recurso.main.temp_min}</td>
                  <td>${recurso.weather[0].main}</td>
                  </tr>`   
  
                  document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
                } );
        } catch (error) {
          console.log(error)
        }
    })
}

if (region === 'litoral') {
    
    const cities = ['corrientes', 'entre rios', 'misiones', 'santa fe'];

    cities.forEach(async city => {
        
      try {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
              .then (resp => resp.json())
              .then (recurso => {
        
                const newCity = 
                `<tr>
                <td>${recurso.name}</td>
                <td>${recurso.main.temp_max}</td>
                <td>${recurso.main.temp_min}</td>
                <td>${recurso.weather[0].main}</td>
                </tr>`   

                document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
              } );
            } catch (error) {
            console.log(error)           
            }
          })
}

if (region === 'pampa') {
    
    const cities = ['la pampa', 'buenos aires', 'cordoba'];

    cities.forEach( async city => {
        
      try {
        
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
               .then (resp => resp.json())
               .then (recurso => {
         
                 const newCity = 
                 `<tr>
                 <td>${recurso.name}</td>
                 <td>${recurso.main.temp_max}</td>
                 <td>${recurso.main.temp_min}</td>
                 <td>${recurso.weather[0].main}</td>
                 </tr>`   
 
                 document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
               } );
      } catch (error) {
        console.log(error)
      }
    })
}

if (region === 'norte') {
    
    const cities = ['san salvador', 'salta', 'tucuman', 'catamarca', 'santiago del estero', 'la rioja', 'formosa', 'chaco'];

    cities.forEach(async city => {
        
      try {
        
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
               .then (resp => resp.json())
               .then (recurso => {

                console.log(recurso)
         
                 const newCity = 
                 `<tr>
                 <td>${recurso.name}</td>
                 <td>${recurso.main.temp_max}</td>
                 <td>${recurso.main.temp_min}</td>
                 <td>${recurso.weather[0].main}</td>
                 </tr>`   
 
                 document.getElementById('tablaRegion').insertAdjacentHTML('beforeend', newCity);
               } );
      } catch (error) {
        console.log(error)
      }
    })
}