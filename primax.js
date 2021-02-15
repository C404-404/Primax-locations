class stations {
    constructor(roadLength, stations) {
        this.roadLength = roadLength,
        this.stations = stations
    }
}

document.getElementById('formPrimax').addEventListener('submit', function(e) {
    const road = document.getElementById('roadLength').value;
    const stations = document.getElementById('gasStations').value;

    const newStations = new stations(road, stations);

    const stationNumbers = road / stations;

    if(stationNumbers % 2 == 0) {
        alert('La cantidad ingresada de estaciones tienen cobertura sin interferencia')
    } else {
        alert('-1')
    }

})