// 16.76, -3.00
// weather

const lat = 16.76;
const lon = -3.00
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const high = document.querySelector('#high-temp');
const low = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#rise');
const sunset = document.querySelector('#set');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=a0f30ea67e532ff6a629572abff3a968`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
    high.innerHTML = `${data.main.temp_max}&deg;F`;
    low.innerHTML = `${data.main.temp_min}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    const riseTime = data.sys.sunrise;
    const riseUTC = new Date(riseTime * 1000)
    sunrise.innerHTML = `${Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Bamako',
        hour: '2-digit',
        minute: '2-digit'
    }).format(riseUTC)}`
    const setTime = data.sys.sunset;
    const setUTC = new Date(setTime * 1000)
    sunset.innerHTML = `${Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Bamako',
        hour: '2-digit',
        minute: '2-digit'
    }).format(setUTC)}`
}

apiFetch();

// forecast

const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=a0f30ea67e532ff6a629572abff3a968`

const tommorow = document.querySelector('#future-temp');
const dayAfter = document.querySelector('#day-after');
const threeDays = document.querySelector('#three-days') 
const date = new Date();

async function apiForecastFetch() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            forecastTommorow(forecastData);
            forecastDayAfter(forecastData);
            forecastThree(forecastData)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function forecastTommorow(forecastData) {
    tommorow.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long' })}: ${forecastData.list[1].main.temp}&deg;F`
}


function forecastDayAfter(forecastData) {
    date.setDate(date.getDate() + 1);
    date.setDate(date.getDate());
    dayAfter.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long' })}: ${forecastData.list[2].main.temp}&deg;F`
}

date.setDate(date.getDate() + 1);
function forecastThree(forecastData) {
    date.setDate(date.getDate() + 2);
    threeDays.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long' })}: ${forecastData.list[3].main.temp}&deg;F`
}



apiForecastFetch();

// spotlight

const jsonUrl = "json/members.json";
const cards = document.querySelector("#spotlight");

const getCompanyData = async () => {
    try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        console.table(data.companies);
        data.companies.sort(() => Math.random() - 0.5);
        data.companies.splice(0,2)
        displayCompany(data.companies);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayCompany = (companies) => {
    companies.forEach(company => {
        if (company.membership > 1) {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let portrait = document.createElement('img');
            let phoneNum = document.createElement("p");
            let compUrl = document.createElement("p");
            let compAddress = document.createElement("p");
            let membershipLevel = document.createElement("p");
            let content = document.createElement("div");

            content.setAttribute('class', 'compInfo');

            name.textContent = `${company.name}`;
            compAddress.innerHTML = `Address ${company.address}`;
            phoneNum.innerHTML = `Phone: ${company.phone}`;
            compUrl.innerHTML = `<a href="${company.url}">Site</a>`;
            
            if (company.membership == 2) {
                membershipLevel.innerHTML = `Member Level: Silver`;
            }
            if (company.membership == 3) {
                membershipLevel.innerHTML = `Member level: Gold`
            }

            portrait.setAttribute('src', company.imageUrl);
            portrait.setAttribute('alt', `company image`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            card.appendChild(name);
            card.appendChild(portrait);
            content.appendChild(phoneNum);
            content.appendChild(compUrl);
            content.appendChild(compAddress);
            content.append(membershipLevel);
            card.append(content);
            cards.appendChild(card);
        }
});
}

getCompanyData();

// footer content
const year = document.querySelector("#year")

const today = new Date();
const short = document.querySelector("#short");

currentyear.innerHTML = `<span class="highlight">\u00A9${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<p id="lastModified">Last Modified: ${new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(nLastModif)}</p>`;

// hamburger

const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});