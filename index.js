function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if 
                (cases>100){
                    color:"rgb(255,0,0)"  
                }
                else{
                    color:"rgb({$cases},0,0)"
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color:"rgb(100,0,0)"
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
let setInterval=200
setInterval(updateMap(),interval);
updateMap();