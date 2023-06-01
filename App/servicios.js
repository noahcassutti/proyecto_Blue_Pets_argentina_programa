const mapDiv = document.getElementById("map")
const placeCords= {lat: -34.56814691627842, lng: -58.639474015239145 }
let map;
let marker;
function initMap() {
  map = new google.maps.Map(mapDiv, {
    center: placeCords,
    zoom: 12,
  });
  marker= new google.maps.Marker({
    position: placeCords,
    map: map
  })
}