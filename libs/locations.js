var locations = [
	{
	  position: new google.maps.LatLng(38.928543, -77.037402),
	  title: "Each Peach Market, Columbia Heights",
	  content: "<a class='location-link' target='_blank' href='http://www.eachpeachmarket.com/'>Each Peach Market</a><br/><br/><h2>3068 Mt. Pleasant St NW, Washington, DC</h2><div class='b-logo each-peach'></div>"
	},
	{
	  position: new google.maps.LatLng(38.952609, -77.225532),
	  title: "Nourish Market, Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Mclean</a><br/><br/><h2>8100 Old Dominion Dr, Mclean, VA</h2><div class='b-logo each-peach'></div>"
	},
	{
	  position: new google.maps.LatLng(38.891377, -77.185371),
	  title: "Nourish Market, Falls Church",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Falls Church</a><br/><br/><h2>1053 W Broad St, Falls Church, VA</h2><div class='b-logo nourish-market'></div>"	
	},
	{
	  position: new google.maps.LatLng(38.933628, -77.175796),
	  title: "The Organic Butcher of Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.theorganicbutcher.com/ml_home.html'>The Organic Butcher of Mclean</a><br/><br/><h2>6712 Old Dominion Dr  McLean, VA 22101</h2><div class='b-logo ob-mclean'></div>"	
	},
	{
	  position: new google.maps.LatLng(38.934960, -77.024469),
	  title: "The Sanctuary",
	  content: "<a class='location-link' target='_blank' href='https://www.facebook.com/pages/Milk-Cult/131405660359212'>The Sanctuary</a><br/><br/><h2>3632 Georgia Ave NW Washington, DC 20010 </h2><div class='b-logo milk-cult'></div>"
	},
	{
	  position: new google.maps.LatLng(38.955930, -77.069808),
	  title: "Little Red Fox",
	  content: "<a class='location-link' target='_blank' href='http://www.littleredfoxdc.com/'>Little Red Fox</a><br/><br/><h2>5035 Connecticut Ave. NW Washington, DC 20008</h2><div class='b-logo red-fox'></div>"
	},
	{
	  position: new google.maps.LatLng(38.758980, -77.160940),
	  title: "Nalls Produce",
	  content: "<a class='location-link' target='_blank' href='http://www.nallsproduce.com/'>Nalls Produce of Alexandria, VA</a><br/><br/><h2>6712 Old Dominion Dr  McLean, VA 22101</h2><div class='b-logo nalls'></div>"	
	},
	{
	  position: new google.maps.LatLng(38.658985, -78.225428),
	  title: "Heritage Hallow Farms",
	  content: "<a class='location-link' target='_blank' href='http://heritagehollowfarms.net/'>Heritage Hallow at Mount Vernon Farm, VA</a><br/><br/><h2>12018B Lee Highway, Sperryville, Virginia 22740</h2><div class='b-logo hallow'></div>"	
	}
];



function initialize() {
	var map_canvas = $('.map-container').get(0);
	var mapOptions = {
		center: new google.maps.LatLng(38.7980866, -77.5852035),
		zoom: 9,
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
			icon: 'pics/location-pin.png'
		});


		google.maps.event.addListener(marker, "click", function() { 
			marker.setAnimation(google.maps.Animation.DROP);
			$('.location-list').html(location.content);
		});
	});
}


google.maps.event.addDomListener(window, 'load', initialize);