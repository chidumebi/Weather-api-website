
//getting my api key
const apiKey = "f851178f4184be778a83bc6d83d25e6b";
const weatherImg = document.getElementById("weatherimg");
const bgImg = document.getElementById("bgImg");
const weatherInfo = document.querySelector(".weatherInfo");
const card = document.querySelector(".weatherCard");


//assigning values to the html values
let cityName = document.querySelector(".city");
let weatherTemp = document.querySelector(".temp");
let weatherDesc = document.querySelector(".desc");

async function checkWeather(event)
{
   event.preventDefault();

  
   // const response = await fetch(apiUrl + city + '&appid=${apiKey}');

   const citySearch = document.getElementById("cityInput").value;
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citySearch}&appid=${apiKey}`;

  //fetching the api and catching errors
   try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
     //updating the html values
    cityName.innerHTML = data.name;
    weatherTemp.innerHTML = Math.round((data.main.temp)*(9/5)+(32))+ "°F";
    weatherDesc.innerHTML = data.weather[0].description;

    //conditional statement to change the displayed image
  if(data.weather[0].main == "Clouds")
  {
    weatherImg.src = "clouds.png";
    bgImg.style.backgroundImage = "url(CloudyPic.jpg)";
  } 
  else if(data.weather[0].main == "Clear")
  {
    weatherImg.src = "clear.png";
    bgImg.style.backgroundImage = "url(sunnyPic.jpg)";
  } 
  else if(data.weather[0].main == "Rain")
  {
    weatherImg.src = "rain.png";
    bgImg.style.backgroundImage = "url(rainyPic.jpg)";
  }
  else if(data.weather[0].main == "Drizzle")
  {
    weatherImg.src = "drizzle.png";
    bgImg.style.backgroundImage = "url(drizzlePic.jpg)"
  }
  else if(data.weather[0].main == "Mist")
  {
    weatherImg.src = "mist.png";
    bgImg.style.backgroundImage = "url(mistPic.jpg)"
  }
  else if(data.weather[0].main == "Snow")
  {
    weatherImg.src = "snow.png";
    bgImg.style.backgroundImage = "url(snowyPic.jpg)"
  }

    console.log(data);

    //display the info
    if(weatherInfo.style.display="none")
    {
        
        weatherInfo.style.display="flex";
    }

    //resize the card
    if(card.style.height = "100px")
    {
        card.classList.add('fadeIn');
        card.style.height = "620px";
    }

} catch (error) {
    console.error('Error fetching data:', error);
  }

  
}

//submitting the user's input for info
let weatherForm = document.querySelector(".weatherForm");

weatherForm.addEventListener("submit", checkWeather);