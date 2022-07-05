// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.71369564965506, lng: -6.349364168048878 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;