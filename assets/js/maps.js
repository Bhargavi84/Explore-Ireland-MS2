//Adding Google maps

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 7,
                center: {
                    lat: 53.3689389,
                    lng: -7.9796705
                }
            });
    
  
        const markers =[
            {
                coordinates: {lat:52.9714985, lng:-9.431077}, //   
                content: '<h4>Cliffs of Moher</h4>',
                info: `<img class="img-top img-fluid" src="assets/images/cliffs-of-Moher.jpeg" alt="">
                <h4 class="py-4">Cliffs of Moher</h4>
                <p>One of Ireland’s favourite visitor experiences and representing the best of Clare, the Cliffs of Moher tower over the rugged west Clare coast.  Walk the safe, paved pathways and view the famous Cliffs on Europe’s western frontier and enjoy the spectacular vistas over the Atlantic Ocean and the Aran Islands.   Their natural beauty has inspired artists, musicians, and poets for generations, as well as absorbing scientists and geologists, drawn by the unique landscape in which they sit.  The Cliffs of Moher, the most famous cliffs in Ireland, will leave you awestruck, creating memories that will stay with you forever.</p>`
            },
            {
                coordinates: {lat:51.8363298, lng:-9.9021226}, // 
                content: '<h4>Ring of Kerry</h4>',
                info: `<img class="img-top img-fluid" src="assets/images/Ring-of-Kerry.jpeg" alt="">
                <h4 class="py-4">Ring of Kerry</h4>
                <p>The Ring of Kerry is a scenic drive around the Iveragh Peninsula in southwest Ireland’s County Kerry. Its 179km-long, circular route takes in rugged and verdant coastal landscapes and rural seaside villages. Skellig Michael, a rocky island with an abandoned 7th-century Christian monastery, is a major destination point, with several boats from Portmagee making the 12km crossing during the warmer months.</p>`
            },
            {
                coordinates: {lat:51.6083325, lng:-8.5465325}, // 
                content: '<h4>The Old Head Kinsale</h4>',
                info: `<img class="img-top img-fluid" src="assets/images/kinsale.jpeg" alt="">
                <h4 class="py-4">The Old Head Kinsale</h4>
                <p>Soaked in history and in a scenic coastal setting at the gateway to West Cork, Kinsale has been attracting large numbers of visitors for decades. It's one of the best small towns in Ireland for tourists.Occupying a stunning and unique headland reaching out over two miles into the Atlantic Ocean, A castle has been on the headland since at least the 3rd century,An early lighthouse was established here in the 17th century</p>`
            },
            {
                coordinates: {lat:53.0095271, lng:-6.3374194}, // 
                content: '<h4>Glendalough Mountains</h4>',
                info: `<img class="img-top img-fluid" src="assets/images/glendalough.jpeg" alt=""></br>
                <h4 class="py-4">Glendalough Mountains</h4>
                <p>The Glendalough Valley is located in the Wicklow Mountains National Park and has many attractions to entice, entertain and enthral visitors, from its world famous Monastic Site with Round Tower to its scenic lakes and valleys, as well as a selection of walks and trails in the area including The Wicklow Way. The National Park also run educational nature walks for adults and children.</p>`
            },
            {
                coordinates: {lat:51.9290922, lng:-8.5730734}, // 
                content: '<h4>Blarney Castle</h4>',
                info: `<img class="img-top img-fluid" src="assets/images/blarney-castle.jpeg" alt=""></br>
                <h4 class="py-4">Blarney Castle</h4>
                <p>Blarney Castle is a medieval stronghold in Blarney, near Cork, Ireland. Though earlier fortifications were built on the same spot, the current keep was built by the MacCarthy of Muskerry dynasty, a cadet branch of the Kings of Desmond, and dates from 1446. The Blarney Stone is among the machicolations of the castle.</p>`
            },
            
        ];

        for(var i = 0; i < markers.length; i++) {
            
            addMarker(markers[i]);
        }

      
    
    function addMarker(properties) {
        const marker = new google.maps.Marker({
        position: properties.coordinates,
        map: map,        
        });

        if(properties.content){
            const infowindow = new google.maps.InfoWindow({
                content:properties.content
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