// Initialize the map on the "map" div
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example data array, replace with your actual data source
const timelineData = [
    { year: "2020", event: "Graduated from University", location: { lat: 51.505, lng: -0.09 } },
    { year: "2021", event: "Moved to Berlin", location: { lat: 52.520, lng: 13.405 } },
    // More data here...
];

let currentIndex = 0;

function loadMoreContent() {
    const container = document.getElementById('timeline-container');
    if (currentIndex < timelineData.length) {
        const entry = timelineData[currentIndex];
        const element = document.createElement('div');
        element.className = 'timeline-entry';
        element.innerHTML = `<strong>${entry.year}</strong>: ${entry.event}`;
        container.appendChild(element);
        
        // Update map location
        map.setView([entry.location.lat, entry.location.lng], 13);

        currentIndex++;
    }
}

// Initial load
window.onload = function() {
    loadMoreContent(); // Load first item
};

// Infinite scrolling
window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreContent();
    }
};
