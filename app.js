const inputvalu = document.getElementById('inputFild');
const nameofcity = document.getElementById('cityname')
const tamparature = document.getElementById('temparature')
const cloudsvalu = document.getElementById('clouds')
const buttonvalu = document.getElementById('button');
buttonvalu.addEventListener('click', function(){

     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalu.value+'&appid=b6680d0974b607ceb7f1f6d711a7efc1')
        .then(res => res.json())
        .then(data => {
    
   const citynamevalu = data['name'];
   const temparaturevalu = data['main']['temp'];
   const temcalculate = temparaturevalu -273 /5*5;
   const convarint = parseInt(temcalculate);
   const clouds = data['weather'][0]['main']
     


   nameofcity.innerText = citynamevalu;
   temparature.innerText = convarint;
   cloudsvalu.innerText = clouds;
})
})
