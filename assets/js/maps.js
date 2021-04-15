function initMap() {
  const options = {
    center: { lat: 53.1424, lng: 7.6921 },
    zoom: 3
  };
   
  const map = new
  google.maps.Map(document.getElementById("map"), options);

        const markers =[
            {
                coordinates: {lat:52.9715, lng:9.4309}, //   
                content: '<h4>Cliffs of Moher</h4>',
                info: `<img class="img-fluid" src="assets/images/" alt="Jeti-Oguz ">
                <h4 class="py-4"></h4>
                <p>.</p>`
            },
            {
                coordinates: {lat:51.9427, lng:-9.9172}, // 
                content: '<h4>Ring of Kerry</h4>',
                info: `<img class="img-fluid" src="assets/images/" alt="">
                <h4 class="py-4"></h4>
                <p>.</p>`
            },
            {
                coordinates: {lat:51.9108, lng:10.3549}, // 
                content: '<h4>Valentia Island</h4>',
                info: `<img class="img-fluid" src="assets/images/ " alt="">
                <h4 class="py-4"></h4>
                <p>.</p>`
            },
            {
                coordinates: {lat:53.0120, lng:6.3298}, // 
                content: '<h4>Glendalough, Co. Wicklow</h4>',
                info: `<img class="img-fluid" src="assets/images/" alt=""></br>
                <h4 class="py-4"></h4>
                <p>.</p>`
            },
            {
                coordinates: {lat:51.9291, lng:8.5709}, // 
                content: '<h4>Blarney Castle</h4>',
                info: `<img class="img-fluid" src="assets/images/" alt=""></br>
                <h4 class="py-4"></h4>
                <p>.</p>`
            },
            
        ];

        for(var i = 0; i < markers.length; i++) {
            
            addMarker(markers[i]);
        }

      
    
    function addMarker(props) {
        const marker = new google.maps.Marker({
        position: props.coordinates,
        map: map,        
        });

        if(props.content){
            const infowindow = new google.maps.InfoWindow({
                content:props.content
            });
            
            marker.addListener('mouseover', function(){
                infowindow.open(map, marker);
                
            google.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
                });
            }); 
            
           google.maps.event.addListener(marker, 'click', (function(i) {
    
            return function() {
           document.getElementById("gamebar").innerHTML = markers[i].info;
                };
            })(i));

        }        
    }  
}