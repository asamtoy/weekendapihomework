var initialize = function(){
  var mapDiv = document.getElementById('big-map');
  var center = {lat: 55.9470, lng: -3.2020};
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers);

  // var mapDiv = document.getElementById('small-map');
  // var center = {lat: 20.9470, lng: 3.2020};
  // var subMap = new MapWrapper(mapDiv, center, 10);
  // subMap.addMarker(center);
  // subMap.addClickEvent();
  // var dropButton = document.querySelector('#button-drop-markers');
  // dropButton.addEventListener('click', mainMap.dropMarkers);

}


window.addEventListener('load', initialize);
