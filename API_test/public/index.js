var initialize = function(){

  var createLiTags = function(forecast){
    var liTag = document.createElement("li");
    liTag.innerText =  + " is a " + character.gender + " " + character.species + " who lives in " + character.house;
    return liTag;

  }
  var renderWeather = function(forecast){
    var ulTag = document.querySelector("#weatherForecast");
    characters.forEach(function(forecast){
      var liTag = createLiTags(forecast);
      ulTag.appendChild(liTag);

    })
  }

  var url = "api.openweathermap.org/data/2.5/forecast?zip=92021";
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener("load", function(){

    if(this.status ===200){
      var characters = JSON.parse(this.responseText);
    renderCharacters(characters);
    }

  })
  request.send();
}

window.addEventListener("load", initialize);
