/*her er selve kortet */
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYTEyMzQ1NiIsImEiOiJja2JnNmUycncwZzVxMnltbDl2OXVtOGczIn0.OA-IL88WgQGJGLg_0A-N4g';
    var map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [/*-74.5, 40*/ 9.5155848, 55.9396761], // start position
    zoom: 6 // starting zoom
    
    });
    /*her er punkterne på mappet */
    var Copenhagen = new mapboxgl.Marker().setLngLat([12.650462, 55.62075]).addTo(map);
    var Billund = new mapboxgl.Marker().setLngLat([9.150999396, 55.73749705]).addTo(map);
    var Sønderborg = new mapboxgl.Marker().setLngLat([9.78836851318,54.958662832]).addTo(map);
    var Bornholm = new mapboxgl.Marker().setLngLat([14.755663644,55.057999768]).addTo(map);
    var Aarhus = new mapboxgl.Marker().setLngLat([10.617997528, 56.2999988]).addTo(map);
    var Aalborg = new mapboxgl.Marker().setLngLat([9.842829962,57.088999644]).addTo(map);
    var midtjylland = new mapboxgl.Marker().setLngLat([8.97378,56.13932]).addTo(map);