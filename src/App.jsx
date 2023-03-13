import { useState } from 'react'


// Componentes
import { Nav } from './components/Nav';
import { Cards } from './components/Cards';


// APIKEY
const APIKEY = '4ae2636d8dfbdc3044bede63951a019b';

import './App.css'



export function App() {

  const [city, setCity] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCity(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }




  const onClose = (id) => {
    setCity(oldCities => oldCities.filter(c => c.id != id));
  }


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} city={city} className="container-cards" />
    </div>
  )
}


