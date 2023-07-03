ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.939274846621196,30.31588494652214],
        zoom: 15
    }, {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search'
    });
    
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('zoomControl');

    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) 
        {   
            var coords = e.get('coords');
            
            let layout = ymaps.templateLayoutFactory.createClass(
                '<h1>Кафе XL</h1>' +
                '<img src="/" alt="альтернативный текст">'+
                '<div><p>Координаты: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>' +
                '<p style="text-align: center"> <button id="addMark">Добавить метку</button></div>', 
                {
                build: function () {
                    layout.superclass.build.call(this);
                    let doc = document.getElementById("addMark");
                    doc.addEventListener("click", e => {
                        var placemark = new ymaps.Placemark([coords[0], coords[1]], {}, {});
                        myMap.geoObjects.add(placemark);
                        myMap.balloon.close();
                    });
                }});

            myMap.balloon.open(coords, {coords: coords},
            {
                contentLayout: layout
            });
            
        }
        else {
            myMap.balloon.close();
        }
    });
}