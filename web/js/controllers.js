'use strict';

/* Controllers */

function Family($scope, $http) {
    
    $http.get('family.json').success(function(data, status, headers, config) {
       $scope.persons = data.persons;
       $scope.places = data.places;
       $scope.map = null;
    
        if (GBrowserIsCompatible()) {
            $scope.map = new GMap2(document.getElementById("map"));
            $scope.map.setCenter(new GLatLng(57.84701, 12.36555), 11);
    		$scope.map.setMapType(G_HYBRID_MAP);
    		$scope.map.addControl(new GSmallMapControl());				
    
    		$scope.persons.each(function(person) {
    			if (person.placeId && $scope.places[person.placeId]) {
    				 var marker = createGMarker(person, $scope.places[person.placeId]);
    				 $scope.map.addOverlay(marker);
                     person.marker = marker;
    			}                    
    		})       
        }
    
    /*
    $scope.persons = [
        { id:1, name:'Bertil', quote:'\"I put on my robe and wizard hat\" - BloodNinja', img:'img/vidvattnet.jpg' },
        { id:2, name:'Adam', quote:'\"I put on my robe and wizard hat\" - BloodNinja', img:'img/vidvattnet.jpg' }];
     */   
        
	});
    
    $scope.getImage = function(person) {
        return person && person.image ? person.image : "img/vidvattnet.jpg";
    }
    
    $scope.getQuote = function(person) {
        return person ? person.quote : "I put on my robe and wizard hat";
    }
    
    $scope.displayPerson = function(p) {
        $scope.person = p;
        $scope.map.panTo(p.marker.getPoint());
        GEvent.trigger(p.marker, "click");
    }    
    
    $scope.displayPersonByName = function(n) {
    	$scope.persons.each(function(person) {
			if (person.name == n) {
				 displayPerson(person);
			}                    
		})         
    }
    
    function createGMarker(person, place) {
        var point = new GLatLng(parseFloat(place.lat), parseFloat(place.lon));
        var marker = new GMarker(point);
    	var infoTabs = [
        new GInfoWindowTab("info", createTabContact(person)),
        //Hur skapar man en länk till en AngularJS-funktionen displayPerson?
        //new GInfoWindowTab("familj", createTabFamily(person))
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
		if ($scope.places[p.placeId]&& $scope.places[p.placeId].address) {
			//text += "<br/><a href='http://kartor.eniro.se/query?streetname=" + $scope.places[p.placeId].address + "&what=map&asearch=1'>" + $scope.places[p.placeId].address + "</a>";				}				
            text += "<br/>" + $scope.places[p.placeId].address;}				
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
                        //text += "<i>" + rel.type + "</i> <a href=\"JavaScript:displayPersonByName('" + rel.value + "')\">" + rel.value + "</a>";
			 			 //text += "<i>" + rel.type + "</i> <a href='#" + rel.value +"' ng-click='displayPersonByName(&#39;" + rel.value + "&#39;)' class='ng-binding'>" + rel.value + "</a>";
                         text += "<i>" + rel.type + "</i> <a href='#" + rel.value +"' ng-click='displayPersonByName('" + rel.value + "')>" + rel.value + "</a>";                          
                         //text += $compile("<i>" + rel.type + "</i> <a href='#" + rel.value +"' ng-click='displayPersonByName(&#39;" + rel.value + "&#39;)'>" + rel.value + "</a>");
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

}

function FamilyList($scope) {
}
    
function MyCtrl1() {
}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];
