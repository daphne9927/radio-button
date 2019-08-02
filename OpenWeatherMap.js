document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('inputSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var cityOrZip = document.getElementById('cityOrZip').value;
    var getString = "https://api.openweathermap.org/data/2.5/weather?q=" + cityOrZip + ",us&units=imperial&appid=fa7d80c48643dfadde2cced1b1be6ca1";
    console.log("getString='" + getString + "'");
    req.open('GET', getString, true);
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        console.log(JSON.parse(req.responseText));
        var response = JSON.parse(req.responseText);
        document.getElementById('name').textContent = response.name;
        document.getElementById('description').textContent = response.weather[0].description;
        document.getElementById('temperature').textContent = response.main.temp;
        document.getElementById('humidity').textContent = response.main.humidity;
        var walkTemp = response.main.temp;
        console.log("walkTemp " + walkTemp);
        if(walkTemp > 90.0)
        {
        document.getElementById('temp').innerHTML = walkTemp;
        document.getElementById('tooHot').innerHTML = "Over 90 degrees is too hot to walk the dog!";
        }
        else
        {
        document.getElementById('temp').innerHTML = walkTemp;
        document.getElementById('tooHot').innerHTML = "Under 90 degrees it is safe enough to walk the dog!";
        }
        } else {
        console.log("Error in network request: " + response.id);
     }});
    req.send(null);
    event.preventDefault();
  })
}
