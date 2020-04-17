//
// (C) 2012 株式会社ジャストシステム
//
// ***** DO NOT EDIT THIS FILE *****

var lat = new Array(0);
var lng = new Array(0);
var markerwindowinfo = new Array(0);
var markerwindowopen = new Array(0);
var markerevent = new Array(0);
var firstshown = new Array(0);

function createMarker(map, point, event, info, open) {
	var marker = new google.maps.Marker({position: point, map: map});
	if(open == 1){
	var info = new google.maps.InfoWindow({content: info});
		google.maps.event.addListener(marker, event, function() {
			info.open(map, marker);
		});
	}
	return marker;
}

function hpbmaponload() {
	var mapdiv = document.getElementById("HPBMAP_20200416214910");
	var myOptions = { 
	zoom: 6, 
	center: new google.maps.LatLng( 35.681382, 139.766084 ), 
	mapTypeId: google.maps.MapTypeId.SATELLITE
	}
	var map = new google.maps.Map(mapdiv, myOptions);
	return map;
}