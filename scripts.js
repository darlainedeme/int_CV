// Initialize the map on the "map" div
var map = L.map('map').setView([51.505, -0.09], 13);

// Add an OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for example
var marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup('A significant place in my life.').openPopup();

// ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create scene for each timeline event
document.querySelectorAll('.timeline-event').forEach(function(elem) {
    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.75,
        reverse: false
    })
    .setClassToggle(elem, 'visible') // Add class to timeline event
    .addTo(controller);
});

// Function to move map to a new location
function updateMap(latitude, longitude) {
    map.setView([latitude, longitude], 13);
}

// Add listeners to elements for map updates
document.querySelectorAll('.map-location').forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        updateMap(elem.dataset.lat, elem.dataset.lng);
    });
});

// Initial setup to hide elements before they become visible in the viewport
window.onload = function() {
    document.querySelectorAll('.timeline-event').forEach(function(elem) {
        elem.classList.add('hidden');
    });
};
