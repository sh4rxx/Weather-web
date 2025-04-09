document.getElementById("wsearch").addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        getWeather()
    }
})
let tempera = "neutral"; 
async function getWeather() {
    try{
        const wsearch = document.getElementById("wsearch").value
        const responce = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${wsearch}&appid=7b4aa10f2e9d3c266f18496d6e998ba9`)
        const data = await responce.json()
        console.log(data)
        let latitude = data[0].lat
        let longtitude = data[0].lon
        const responce1 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&appid=7b4aa10f2e9d3c266f18496d6e998ba9&units=metric`)
        const data1 = await responce1.json()
        console.log(data1)
        tempicon = data1.current.weather[0].icon
        document.getElementById("city").innerHTML = `City: ${data[0].name}`
        document.getElementById("temp").src = `https://openweathermap.org/img/wn/${tempicon}@2x.png`
        document.getElementById("temp").style.display = "block"
        let temperature = Math.round(data1.current.temp)
         document.getElementById("temperature").innerHTML = `${temperature}°C`
         console.log(temperature)
        document.getElementById("feels").innerHTML = `Feels like: ${Math.round(data1.current.feels_like)}°C`
        document.getElementById("desc").innerHTML = `Description: ${data1.current.weather[0].description}`
        document.getElementById("humidity").innerHTML = `Humidity: ${data1.current.humidity}%`
        document.getElementById("wind").innerHTML = `Wind speed: ${Math.round(data1.current.wind_speed)} m/s`
        let wind_degree = data1.current.wind_deg
        document.getElementById("wind_degree").innerHTML = `Wind degree: ${wind_degree}°`
        if (wind_degree > 337.5 || wind_degree <= 22.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_0_-128.png`
        }
        else if (wind_degree > 22.5 && wind_degree <= 67.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_45-128.png` 
        }
        else if (wind_degree > 67.5 && wind_degree <= 112.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_90-128.png` 
        }
        else if (wind_degree > 112.5 && wind_degree <= 157.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_135-128.png` 
        }
        else if (wind_degree > 157.5 && wind_degree <= 202.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_180-128.png` 
        }
        else if (wind_degree > 202.5 && wind_degree <= 247.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_225-128.png` 
        }
        else if (wind_degree > 247.5 && wind_degree <= 292.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_270-128.png` 
        }
        else if (wind_degree > 292.5 && wind_degree <= 337.5) {
            document.getElementById("wind_direction").src = `https://cdn1.iconfinder.com/data/icons/what-the-weather/200/WhatTheWeather_v1_artboards_Wind_Direction_337.5-128.png` 
        }
        // document.getElementById("wind_direction").style.display = "block"
        function setBackgroundAnimation(animationName) {
            const body = document.querySelector("body");
            body.style.animationName = animationName;
            body.style.animationDuration = "1s";
        }
        
        
        if (temperature < 10 && tempera === "neutral") {
            tempera = "cold";
            setBackgroundAnimation("changeToCold");
            document.querySelector("body").style.backgroundImage = "url('https://papers.co/wallpaper/papers.co-sj21-blue-dark-sky-soft-night-gradation-blur-36-3840x2400-4k-wallpaper.jpg')"
            console.log(tempera)
        } else if (temperature > 20 && tempera === "neutral") {
            tempera = "hot";
            setBackgroundAnimation("changeToHot");
            document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/premium-photo/blurry-image-yellow-sky-with-reflection-sun-it_792836-10526.jpg')"
            console.log(tempera)
        } else if (temperature >= 10 && temperature <= 20 && tempera === "cold") {
            tempera = "neutral";
            setBackgroundAnimation("changeFromColdToWarm");
            document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8165.jpg')"
            console.log(tempera)
        } else if (temperature > 20 && tempera === "cold") {
            tempera = "hot";
            setBackgroundAnimation("changeFromColdToHot");
            document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/premium-photo/blurry-image-yellow-sky-with-reflection-sun-it_792836-10526.jpg')"
            console.log(tempera)
        } else if (temperature >= 10 && temperature <= 20 && tempera === "hot") {
            tempera = "neutral";
            setBackgroundAnimation("changeFromHotToWarm");
            document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8165.jpg')"
            console.log(tempera)
        } else if (temperature < 10 && tempera === "hot") {
            tempera = "cold";
            setBackgroundAnimation("changeFromHotToCold");
            document.querySelector("body").style.backgroundImage = "url('https://papers.co/wallpaper/papers.co-sj21-blue-dark-sky-soft-night-gradation-blur-36-3840x2400-4k-wallpaper.jpg')"
            console.log(tempera)
        } 
        
        // if (temperature < 10){
        //     document.querySelector("body").style.backgroundImage = "url('https://papers.co/wallpaper/papers.co-sj21-blue-dark-sky-soft-night-gradation-blur-36-3840x2400-4k-wallpaper.jpg')"
        //     // document.querySelector("body").style.animationName = "changeToCold"
        //     // document.querySelector("body").style.animationDuration = "1s"
        // } else if (temperature > 10 && temperature < 20){
        //     document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8165.jpg')"
        //     // document.querySelector("body").style.animationName = "changeToWarm"
        //     // document.querySelector("body").style.animationDuration = "1s"
        // }
        // else if (temperature > 20 ){
        //     document.querySelector("body").style.backgroundImage = "url('https://img.freepik.com/premium-photo/blurry-image-yellow-sky-with-reflection-sun-it_792836-10526.jpg')"
        //     // document.querySelector("body").style.animationName = "changeToHot"
        //     // document.querySelector("body").style.animationDuration = "1s"
        // }
        document.getElementById("result").style.display = "block"
        document.getElementById("extra").style.display = "block"
        
     }
     catch(error){ 
        //  console.error(error)
         alert("Such city doesn't exist")
     }
}