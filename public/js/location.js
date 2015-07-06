
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
				
				// index.htmlのresultMapLinkのURLに緯度、経度を設定する
				var url = $("#resultMapLink").attr("href");
				url += "?latitude="  + latitude;		// 緯度 
				url += "&longitude=" + longitude;		// 経度
				$("#resultMapLink").attr("href", url);
	  		},
			error: function(error) {
	    		alert('エラーしてるよ '+error.message);
	  		},
			not_supported: function() {
	    		alert("ジオロケーションサポートしてないある。");
	  		},
		});
	
}

