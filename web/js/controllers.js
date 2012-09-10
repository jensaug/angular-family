'use strict';

/* Controllers */

function GMapCtrl($scope, $http) {

    $scope.person = { quote:"\"I put on my robe and wizard hat\" - BloodNinja", img:"img/vidvattnet.jpg" };
    
    $http.get('family.json').success(function(data, status, headers, config) {
       $scope.all = data; 
    });
    
    $scope.persons = [
        { id:1, name:'Bertil', quote:'\"I put on my robe and wizard hat\" - BloodNinja', img:'img/vidvattnet.jpg' },
        { id:2, name:'Adam', quote:'\"I put on my robe and wizard hat\" - BloodNinja', img:'img/vidvattnet.jpg' }];
        
        
    $scope.map = null;
    $scope.markers = {};
    $scope.family = {};
 /*   										
	if (GBrowserIsCompatible()) {
        $scope.map = new GMap2(document.getElementById("map"));
        $scope.map.setCenter(new GLatLng(57.84701, 12.36555), 11);
		$scope.map.setMapType(G_HYBRID_MAP);
		$scope.map.addControl(new GSmallMapControl());				
			
		GDownloadUrl("family.json", function(data, responseCode) {
				//var myval = eval('(' + data + ')');												
				eval("$scope.family = (" + data + ")");

				//Sort by person id
				var personIds = new Array();
				for (var id in $scope.family.persons) {
						personIds.push(id);
				}
				personIds.sort();
				//Loop through persons
				personIds.each(function(id) {
						//map marker
						var person = $scope.family.persons[id];
						if (person.placeId && $scope.family.places && $scope.family.places[person.placeId]) {
							 var marker = createGMarker(person, family.places[person.placeId]);
							 $scope.map.addOverlay(marker);
							 $scope.markers[id] = marker;									 
						}
						//menu item
						$('menuitems').innerHTML += "<li><a href=\"#\" onClick=\"JavaScript:displayPerson('" + id + "');\">" + person.name + "</a></li>";
				});						
		});
	}
	
    function createGMarker(person, place) {
        var point = new GLatLng(parseFloat(place.lat), parseFloat(place.lon));
        var marker = new GMarker(point);
    	var infoTabs = [
        new GInfoWindowTab("info", createTabContact(person)),
        new GInfoWindowTab("familj", createTabFamily(person))		
     ];
     GEvent.addListener(marker, "click", function() {
       marker.openInfoWindowTabsHtml(infoTabs);
     });
     return marker;
    }		

    function createTabContact(p) {
		var text = "<b>" + p.name + "</b> ";
		if (p.email) {
			 text += 	"<i>&nbsp;(<a href='mailto:" + p.email + "'>" + p.email + "</a>)</i>";
		}
		text += "<br/>";
		if (p.mobile) {
			 text += "<i>mobilnr: " + p.mobile + "</i> ";
		}				
		if (family.places[p.placeId]&& family.places[p.placeId].address) {
			 text += "<br/><a href='http://kartor.eniro.se/query?streetname=" + family.places[p.placeId].address + "&what=map&asearch=1'>" + family.places[p.placeId].address + "</a>";				}				
		text += "<br/>";				
		if (p.url) {
			 text += "<i><a href='" + p.url + "'>" + p.url + "</a></i>";
		}				
		return text;		
	}
	
	function createTabFamily(person) {
		var text = "";
		if (person.relation) {
			 for (var i = 0; i < person.relation.length; i++) {
			 		 var rel = person.relation[i];
					//alert(person.name);
					//alert(rel);
					//alert(rel.personId);
					//alert(rel.type);
					if (rel && rel.personId && rel.personId != null) {
			 			 text += "<i>" + rel.type + "</i> <a href=\"JavaScript:displayPerson('" + rel.personId + "')\">" + rel.value + "</a>";							 
					} else {					 
		 		 		 text += "<i>" + rel.type + "</i> " + rel.value;		 
					}
					 
					 if ((i%2) == 1) {
					 		text += "<br/>";
					 } else if ((i%2) != 1 && i+1 < person.relation.length) {
					 		text += ", ";
					 }							 
			 }
		}
		return text;		
	}

	function displayPerson(id) {
		 if (family.persons[id].image) {				
  		 $('frontphoto').src = family.persons[id].image;
		 } else {
		 	 $('frontphoto').src = 'img/vidvattnet.jpg';
		 }
		 if (family.persons[id].quote) {				
  		 $('quote').innerHTML = family.persons[id].quote;
		 } else {
		 	 $('quote').innerHTML = '\"I put on my robe and wizard hat\"<br />(BloodNinja)';
		 }						 
		 if (markers[id]) {
		 map.panTo(markers[id].getPoint());		
		 GEvent.trigger(markers[id], "click");						 
		 }
	}
    */
}

function MyCtrl1() {
}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];
