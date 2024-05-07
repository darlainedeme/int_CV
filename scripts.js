// Initialize the map on the "map" div
var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Timeline data with all specified dates and locations
const events = [
    { date: "July 1993", location: [3.848, 11.5021], city: "Douala, Cameroon" },
    { date: "January 2002", location: [48.8566, 2.3522], city: "Paris, France" },
    { date: "March 2017", location: [40.7128, -74.0060], city: "NYC, USA" },
    { date: "August 2017", location: [45.4642, 9.1900], city: "Milan, Italy" },
    { date: "March 2018", location: [-25.891968, 32.605135], city: "Maputo, Mozambique" },
    { date: "July 2018", location: [45.4642, 9.1900], city: "Milan, Italy" },
    { date: "January 2019", location: [-25.891968, 32.605135], city: "Maputo, Mozambique" },
    { date: "January 2020", location: [-17.878609, 36.88833], city: "Quelimane, Mozambique" },
    { date: "January 2021", location: [45.4642, 9.1900], city: "Milan, Italy" },
    { date: "February 2022", location: [48.8566, 2.3522], city: "Paris, France" },
    { date: "September 2022", location: [0.347596, 32.582520], city: "Kampala, Uganda" },
    { date: "May 2023", location: [-22.5594, 17.0835], city: "Windhoek, Namibia" },
    { date: "July 2023", location: [45.6495, 13.7768], city: "Trieste, Italy" },
    { date: "August 2023", location: [45.4384, 10.9916], city: "Verona, Italy" },
    { date: "September 2019", location: [45.4642, 9.1900], city: "Milan, Italy" },
    { date: "April 2024", location: [-25.891968, 32.605135], city: "Maputo, Mozambique" },
    { date: "May 2024", location: [5.6037, -0.1870], city: "Accra, Ghana" }
];

// Function to create timeline entries and link them to map locations
events.forEach(event => {
    const timelineContainer = document.getElementById('timeline-container');
    const entry = document.createElement('div');
    entry.className = 'timeline-entry';
    entry.innerHTML = `<strong>${event.date}</strong>: ${event.city}`;
    entry.onclick = function() {
        map.flyTo(event.location, 10); // Zoom in to level 10
    };
    timelineContainer.appendChild(entry);
});
