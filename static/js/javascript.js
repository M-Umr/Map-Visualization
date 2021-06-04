function initMap() {
    var latitude = 31.5204;
    var lngitude = 74.3587;
    // The location of Uluru
    const uluru = { lat: latitude, lng: lngitude };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 6,
            center: uluru,
        }
    );

    var d = 'Fungal infection';
    var d1 = 'Allergy';
    var arr = [d, d1];
    // The marker, positioned at Uluru

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Click here for more details",
    });
    marker.addListener('click', () => {
        //alert("Hello World");
        map.setZoom(9);
        map.setCenter(marker.getPosition());
        var xValues = ["Fungal infection", "GRED", "Malaria", "Chicken pops", "Acen"];
        var yValues = [55, 49, 44, 24, 30];
        var barColors = ["red", "green", "blue", "orange", "brown"];

        new Chart("#myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Diseases and their Number of Patients"
                }
            }
        });


    });
}