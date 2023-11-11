function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:  22.811000, lng:91.263947};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bijoy Nogor Sporting Club (বিজয়নগর স্পোটিং ক্লাব)' // Title Location
    });
}

