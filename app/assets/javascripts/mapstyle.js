function initialize(lonStation, latstation) {

	latitude = window.sessionStorage.getItem('latitude');
	longitude = window.sessionStorage.getItem('longitude');

	window.sessionStorage.clear();

	var station_name = $('#station').data("station-station_name");
	
  var currentPos = new google.maps.LatLng(latitude, longitude); /*現在地*/
  var stationPos = new google.maps.LatLng(latstation, lonStation); /*駅*/
  //var stationPos2 = new google.maps.LatLng(35.680323, 139.761782); /*駅*/
  //var stationPos3 = new google.maps.LatLng(35.684241, 139.762818); /*駅*/
  
  var myOptions = {
    zoom: 15, /*拡大比率*/
    center: currentPos, /*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  
  /*アイコン設定(今ココ)*/
  var iconImakoko = new google.maps.MarkerImage('/assets/ico.png',
    new google.maps.Size(55,72), /*アイコンサイズ設定*/
    new google.maps.Point(0,0) /*アイコン位置設定*/
    );
  
  /*アイコン設定(駅ココ)*/
  var iconEkikoko = new google.maps.MarkerImage('/assets/ico01.png',
    new google.maps.Size(55,72), /*アイコンサイズ設定*/
    new google.maps.Point(0,0) /*アイコン位置設定*/
    );
  
  /*今ココ表示設定*/
    var markerOptions = {
    position: currentPos,
    map: map,
    icon: iconImakoko,
    title: ' 現在地'
  };
  
  var markerImakoko = new google.maps.Marker(markerOptions);
  
  /*駅ココ表示設定*/
    var markerOptions = {
    position: stationPos,
    map: map,
    icon: iconEkikoko,
    title: ' 駅'
  };
  var markerEkikoko = new google.maps.Marker(markerOptions);
  
  /*駅ココ表示設定*/
    var markerOptions = {
    position: stationPos2,
    map: map,
    icon: iconEkikoko,
    title: ' 駅'
  };
  var markerEkikoko = new google.maps.Marker(markerOptions);
  
   /*駅ココ表示設定*/
    var markerOptions = {
    position: stationPos3,
    map: map,
    icon: iconEkikoko,
    title: ' 駅'
  };
  var markerEkikoko = new google.maps.Marker(markerOptions);
  
 
  
  /*範囲描画*/
  new google.maps.Circle({
  center: currentPos,       // 中心点(google.maps.LatLng)
  fillColor: '#BAE3F9',   // 塗りつぶし色
  fillOpacity: 0.3,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
  map: map,             // 表示させる地図（google.maps.Map）
  radius: 500,          // 半径（ｍ）
  strokeColor: '#7ECEF4', // 外周色 
  strokeOpacity: 1,       // 外周透過度（0: 透明 ⇔ 1:不透明）
  strokeWeight: 1         // 外周太さ（ピクセル）
  });
  /*範囲描画ここまで*/
  
  /*取得スタイルの貼り付け*/
  var styleOptions = [
  {
    "stylers": [
    { "saturation": -100 },
    { "visibility": "simplified" },
    { "lightness": 22 }
    ]
  }
  ];
  var styledMapOptions = { name: ' ' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}

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
				
				//map.setCenter(latitude, longitude);
				//map.addMarker({
					//lat: latitude,
					//lng: longitude,
					//title:"場所",
					//infoWindow: {
						//content: '<p style="width:200px">現在地</p>'
						
						alert(latitude);
						alert(longitude);
						
	  		},
			error: function(error) {
	    		alert('エラーしてるよ '+error.message);
	  		},
			not_supported: function() {
	    		alert("ジオロケーションサポートしてないある。");
	  		},
		});
	
}

