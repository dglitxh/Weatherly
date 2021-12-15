import _ from 'lodash'

// UI variables
const form = document.createElement('form')
const search = document.querySelector('.button')
const home = document.getElementById('content')
const butt = document.createElement('button')
const input = document.createElement('input')
form.id = 'form'
butt.className = 'button'
butt.appendChild(document.createTextNode('Search'))
input.className = 'input'
input.required = true
input.placeholder = 'Search City'
butt.type = 'submit'
form.appendChild(input)
form.appendChild(butt)
home.appendChild(form)
const formValue = document.getElementById('form')
let cityVal = document.querySelector('.input')
let container = document.createElement('div')
container.className = 'container'
home.appendChild(container)

// API info
const apiKey = 'ea21c2ee64bf2fd0f38674dc16e62852'
let city = 'Accra'



// Async function for weather data
const getWeather = async (loc) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`,
    {
        mode:'cors'
    });
   if (response.status == 200){
    const data = await response.json()
    const weather = {
        // 'weather': data['weather'][0].main,
        'country': data.sys.country,
        'location': data.name,
        'weatherDesc': data['weather'][0].description,
        'temperature': `${Math.round(data.main.temp - 273.15)}<span>°С</span>`,
        'humidity': `Humidity: ${data['main'].humidity}%`,
        'feel': `Feels like: ${Math.round(data.main.feels_like - 273.15)}°С`,
        'windSpeed': `Wind: ${data.wind.speed}km/h`,
            
    }
    console.log(data)
    console.log(weather)
   let display = displayWeather(weather)
   container.appendChild(display)
   }else{
        alert('There was an error; please try again')
   }
// src=
}

function displayWeather(ob){
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    let obj  = ob
    console.log(obj)
    for (let i of Object.keys(obj)){
        if (i == 'country'){
            let img = document.createElement('img')
            img.className = 'img'
            img.src = `http://openweathermap.org/images/flags/${obj[i].toLowerCase()}.png`
            wrapper.appendChild(img)
        }else{
        let p  = document.createElement('p')
        p.innerHTML = `${obj[i]}`
        p.className = i
        console.log('thats amazing brother')
        wrapper.appendChild(p)
        }
    }return wrapper
}

getWeather(city)

formValue.addEventListener('submit', (e)=>{
    container.innerHTML = ''
    console.log('paapa y3 guy')
    const location = cityVal.value
    console.log(location)
    getWeather(location)
    e.preventDefault()
})


