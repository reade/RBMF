var locations = [
	{
		position: new google.maps.LatLng(38.918764, -77.032358),
		title: "Smuckers Farms of Lancaster Cty, U St",
		content: "<a class='location-link' target='_blank' href='http://www.smuckerfarmsdc.com/'>Smuckers Farms of Lancaster Cty, U St</a><br/><br/><h2>2118 14th St NW, Washington, DC</h2>"
	},
	{
	  position: new google.maps.LatLng(38.914239, -77.045222),
	  title: "Glen’s Garden Market, Dupont Circle",
	  content: "<a class='location-link' target='_blank' href='http://glensgardenmarket.com/'>Glens Garden Market</a><br/><br/><h2>2001 S St NW, Washington, DC </h2>"
	},
	{
	  position: new google.maps.LatLng(38.928543, -77.037402),
	  title: "Each Peach Market, Columbia Heights",
	  content: "<a class='location-link' target='_blank' href='http://www.eachpeachmarket.com/'>Each Peach Market</a><br/><br/><h2>3068 Mt. Pleasant St NW, Washington, DC</h2>"
	},
	{
	  position: new google.maps.LatLng(38.952609, -77.225532),
	  title: "Nourish Market, Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Mclean</a><br/><br/><h2>8100 Old Dominion Dr, Mclean, VA</h2>"	
	},
	{
	  position: new google.maps.LatLng(38.891377, -77.185371),
	  title: "Nourish Market, Falls Church",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Falls Church</a><br/><br/><h2>1053 W Broad St, Falls Church, VA</h2>"	
	},
	{
	  position: new google.maps.LatLng(38.933628, -77.175796),
	  title: "The Organic Butcher of Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.theorganicbutcher.com/ml_home.html/'>The Organic Butcher of Mclean</a><br/><br/><h2>6712 Old Dominion Dr  McLean, VA 22101</h2>"	
	},
	{
	  position: new google.maps.LatLng(38.758980, -77.160940),
	  title: "Nalls Produce",
	  content: "<a class='location-link' target='_blank' href='http://www.nallsproduce.com/'>Nalls Produce of Alexandria, VA</a><br/><br/><h2>6712 Old Dominion Dr  McLean, VA 22101</h2>"	
	}
];

function initialize() {
	var map_canvas = $('.map-container').get(0);
	var mapOptions = {
		center: new google.maps.LatLng(38.8800, -77.1367),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(map_canvas, mapOptions);

		var infowindow = new google.maps.InfoWindow({
				maxWidth: 800
		});

	_.each(locations, function(location){
		var marker = new google.maps.Marker({
			title: location.title,
			position: location.position,
			map: map,
			icon: '../pics/location-pin.png'
		});


		google.maps.event.addListener(marker, "click", function() { 
			infowindow.close();
			infowindow.setContent(location.content);
			infowindow.open(map, marker);
		});
	});
}


google.maps.event.addDomListener(window, 'load', initialize);