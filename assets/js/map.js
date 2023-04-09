// Initialize and add the map
function initMap() {
    // The location of Kao Thai food truck
    const kaothai = { lat: 53.71369564965506, lng: -6.349364168048878 };
    // The map, centered at Kao Thai food truck
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: kaothai,
    });
    // The marker, positioned at Kao Thai food truck
    /*const marker = new google.maps.Marker({
        position: kaothai,
        map: map,
    });*/
}

window.initMap = initMap;