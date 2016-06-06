
ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [44.95744682, 34.11098015],
            zoom: 17
        });
    

 		myPlacemark = new ymaps.Placemark([44.95744682, 34.11098015], { 
            hintContent: 'Flo-Masters', 
            balloonContent: 'Cтудия флористики Flo-Masters' 
        },{
        	  iconLayout: 'default#image',
        	  iconImageHref: 'images/mapicon.png',
        	  iconImageSize: [100, 100],
        	  iconImageOffset: [-40, -90],
        });
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }

