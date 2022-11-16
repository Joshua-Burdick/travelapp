<template>
    <div id="app">
<main>
    <div class="search-box">
        <input 
            type="text" 
            class="search-bar" 
            placeholder="Search..."
            v-model="query"
            @keyup.enter="fetchWeather()"
        />   

    </div>
    <div class="weather-wrap" v-if="typeof weather.main !='undefined'">
        <div class="location-box">
            <div class="location">{{weather.name}}, {{weather.sys.state}} {{weather.sys.country}}</div>
            <div class="date">{{dateBuilder()}}</div>
            <div class="weather-box">
                <div class="temp">{{Math.round(weather.main.temp)}} °F</div>
                <div class="weather"> {{ weather }} </div>
            </div>
        </div>
    </div>

    

 
</main>
    </div>
</template>

<script>
export default {
    data () {
        return {
            api_key: '8b81c25b4594c01f9e7d4caec4793f7a',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {}
        }
    },
    methods: {
        fetchWeather(){
            fetch(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then(this.setResults);
        },
        setResults(results){
            this.weather = results;
        },
        dateBuilder () {
            let date = new Date();
            let months = ["January", "Feburary", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday"];

            return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        }
    }
}
</script>

<style>
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;  
}
body 
{
    font-family: 'montserrat', sans-serif;
}


.search-box{
    width: 100%;
    margin-bottom: 30px;
}
.search-box .search-bar{
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    background-color: rgba(168, 168, 168, 0.783);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;

}
.search-box .search-bar:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(206, 206, 206, 0.648);
    border-radius: 16px 0 16px 0px;
}

.location-box .location{
    color: black;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, .25);

}

.location-box .date {
    color: black;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}
.weather-box{
    text-align: center;
}
.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: black;
  font-size: 102px;
  font-weight: 900;
  
  text-shadow: 2px 6px rgba(0, 0, 0, .25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, .25);
}

.weather-box .weather {
    color: black;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 3px rgba(0, 0, 0, .25);
}

</style>