<template>
  <div id="app" class="bg-gray-800 text-white text-center w-72 m-10 pt-10 pb-10 rounded-3xl">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  
    <HelloWorld />
    <h1  class="text-4xl ml-11 mb-4 text-center">WEATHER BORD</h1>
    <form v-on:submit.prevent="getWeather" >
        <input class="w-72 border-2 ml-11 rounded-3xl p-2  justify-center text-red-700"
          type="text"
          placeholder="Enter City Name?"
          v-model="citySearch"
        />
 </form>  
        
  <div class="bg-blue-700 text-white text-center w-72 m-10 pt-10 pb-10 rounded-3xl">
     <p class="text-transform: uppercase">{{ weather.cityName }}</p>
            <span style="">Current Date : {{ dateBuilder() }}</span> <br>
               <span>Time : {{currentDateTime()}}</span>
            <p class="text-black-500 mb-10 mt-10 text-transform: uppercase">{{ weather.country }}</p>
  
      
                <span class="text-7xl">{{ weather.temperature }}&deg;C</span>
                 <p class="mb-5"> Feels Like <br>  {{ weather.description }}
                </p>
           <div class="flex mb-10">
             <div class="flex-auto ">
                <p>Lower Temp :
                  {{ weather.lowTemp }}&deg;C
                </p>
             </div>
              <div class="flex-auto">
                <p>Higher Temp : 
                  {{ weather.highTemp }}&deg;C
                </p>
              </div>
           </div>
              <div class="flex flex-gap-10">
            
              <div class="flex-auto">
              <p class="text-transform: uppercase">Humidity <br>{{ weather.humidity }}%</p>
              
              </div>
              </div>

  </div>       
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      
      citySearch: "",
      weather: {
        cityName: 'ahmedabad',
        country: "IN ",
        temperature: 12,
        description: "Clouds everywhere",
        lowTemp: "19",
        highTemp: "30",
        feelsLike: "20",
        humidity: "55"
      
    }
  }
},
 methods: {
    getWeather: async function () {
      console.log(this.citySearch);
      const key = "5299e83c9cf2fef510fb8ddaa3206ac8";
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`;
      //  const baseURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
      //fetch weather

        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        this.citySearch="";
       this.weather.cityName = data.name;
       this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);
    },
     dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    },
     currentDateTime() {
      const current = new Date();
      
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime =  time;
      return dateTime;
    }
 }
}
</script>

<style src="./assets/tailwind.css">

