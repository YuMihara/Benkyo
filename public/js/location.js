
function getCurrentPos() {

		map = new GMaps({
			div: '#map',
			zoom: 18,
			lat: 0,
			lng: 0
		});

		GMaps.geolocate({
			success: function(position) {
				
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
						
				window.sessionStorage.setItem('latitude',latitude);
				window.sessionStorage.setItem('longitude',longitude);
						
	  		},
			error: function(error) {
	    		alert('エラーしてるよ '+error.message);
	  		},
			not_supported: function() {
	    		alert("ジオロケーションサポートしてないある。");
	  		},
		});
	
}

