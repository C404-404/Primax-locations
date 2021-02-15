document.getElementById('formPrimax').addEventListener('submit', function(e) {
    const road = parseInt( document.getElementById('roadLength').value);
    const stations = parseInt(document.getElementById('gasStations').value);

    const Diameter = Math.round(road / stations);
    
    stationCounter = Diameter * stations;

    if(stationCounter > road) {
        alert('se debe eliminar alguna o algunas de las estaciones')
    } else if(stationCounter === road){
        alert('Toda el camino está cubierto de estaciones de gas sin terferencia')
    }
    else {
        alert('-1')        
    }
    e.preventDefault();
})