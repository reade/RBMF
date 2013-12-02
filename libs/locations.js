var locations = [
	{
	  position: new google.maps.LatLng(38.914239, -77.045222),
	  title: "Glen’s Garden Market, Dupont Circle",
	  content: "<a class='location-link' target='_blank' href='http://glensgardenmarket.com/'>Glens Garden Market</a><br/><br/><h3>2001 S St NW, Washington, DC </h3>"
	},
	{
	  position: new google.maps.LatLng(38.928543, -77.037402),
	  title: "Each Peach Market, Columbia Heights",
	  content: "<a class='location-link' target='_blank' href='http://www.eachpeachmarket.com/'>Each Peach Market</a><br/><br/><h3>3068 Mt. Pleasant St NW, Washington, DC</h3>"
	},
	{
	  position: new google.maps.LatLng(38.952609, -77.225532),
	  title: "Nourish Market, Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Mclean</a><br/><br/><h3>8100 Old Dominion Dr, Mclean, VA</h3>"	
	},
	{
	  position: new google.maps.LatLng(38.891377, -77.185371),
	  title: "Nourish Market, Falls Church",
	  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Falls Church</a><br/><br/><h3>1053 W Broad St, Falls Church, VA</h3>"	
	},
	{
	  position: new google.maps.LatLng(38.933628, -77.175796),
	  title: "The Organic Butcher of Mclean",
	  content: "<a class='location-link' target='_blank' href='http://www.theorganicbutcher.com/ml_home.html/'>The Organic Butcher of Mclean</a><br/><br/><h3>6712 Old Dominion Dr  McLean, VA 22101</h3>"	
	},
	{
	  position: new google.maps.LatLng(38.758980, -77.160940),
	  title: "Nalls Produce",
	  content: "<a class='location-link' target='_blank' href='http://www.nallsproduce.com/'>Nalls Produce of Alexandria, VA</a><br/><br/><h3>6712 Old Dominion Dr  McLean, VA 22101</h3>"	
	},
	{
	  position: new google.maps.LatLng(38.934960, -77.024469),
	  title: "The Sanctuary",
	  content: "<a class='location-link' target='_blank' href='https://www.facebook.com/pages/Milk-Cult/131405660359212'>The Sanctuary</a><br/><br/><h3>3632 Georgia Ave NW Washington, DC 20010 </h3>"
	},
	{
	  position: new google.maps.LatLng(38.955930, -77.069808),
	  title: "Little Red Fox",
	  content: "<a class='location-link' target='_blank' href='http://maps.google.com/maps?saddr=current+location&amp;daddr=Sydney+Opera+House,+Sydney+Opera+House,+Bennelong+Point,+Sydney+NSW+2000,+Australia&amp;hl=en&amp;ll=7.362467,-158.203125&amp;spn=86.548468,158.027344&amp;sll=1.616397,-146.695222&amp;sspn=87.009078,158.027344&amp;geocode=Fbb6NQIdNAv1-ilD8-2-_zVdiDF69XgC58OyNQ%3BFR1f-_0dhFsDCSndL4leZq4SazFRwhpa1_gzMQ&amp;oq=sydney+op&amp;mra=pd&amp;t=m&amp;z=3'>Little Red Fox</a><br/><br/><h3>5035 Connecticut Ave. NW Washington, DC 20008</h3>"
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
			icon: 'pics/location-pin.png'
		});


		google.maps.event.addListener(marker, "click", function() { 
			marker.setAnimation(google.maps.Animation.DROP);
			$('.location-list').html(location.content);
		});
	});
}


google.maps.event.addDomListener(window, 'load', initialize);