
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
/*BIO CARD HELPER HTML*/
//  name & role HTML
var HTMLheaderNameRole = '<div class="resume-heading"><h1 id="name">%name%</h1><br><span class="small" id="roleTitle">%role%</span></div>';
//  contacts
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
//  bio picture
var HTMLbioPic = '<figure class="biopic"><a href="#"><picture><source media="(min-width: 1200px)" srcset="%data%-medium_2x.jpg 2x, %data%-medium.jpg" /><source media="(min-width: 992px) and (max-width: 1199px)" srcset="%data%-medium.jpg 2x, %data%-small.jpg" /><source media="(min-width: 768px) and (max-width: 991px)" srcset="%data%-medium_2x.jpg 2x, %data%-medium.jpg" /><img class="img-responsive" alt="%name%" src="%data%-small.jpg" width="50%" height="50%"></picture></a></figure>';
//  welcome message HTML
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div>';

/*SKILLS HELPER HTML*/
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item skill-list-item"><span>%data%</span></li>';

/*WORK HELPER HTML*/
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%</a>';
var HTMLworkTitle = ' <div class="job-title">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="job-description">%data%</p>';

/*PROJECT HELPER HTML*/
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#"><h4>%data%</h4></a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

/*MY PROJECT HELPER HTML*/

var myHTMLprojectStart = '<article class="%id% project col-xs-12 col-md-4" id="%id%"></article>';

var myHTMLprojectHeader = '<header><h2 class="project-title"><a href="#" data-toggle="collapse" data-target="#%id%Section">%id%&nbsp;<small>%title%</small></a></h2><p>%heading%</p></header>';
var myHTMLprojectCollapseSection = ' <section id="%id%Section" class="project row collapse"></section>';

var myHTMLprojectFirstColumn = '<div class="col-xs-6 col-md-4 col-lg-6 first-column" id="%id%FirstColumn"></div>';
var myHTMLprojectImage = '<figure><a href="#"><picture><source media="(min-width: 1200px)" srcset="%imageName%-medium_2x%ImgExtType% 2x, %imageName%-medium%ImgExtType%" /><source media="(min-width: 992px) and (max-width: 1199px)" srcset="%imageName%-medium%ImgExtType% 2x, %imageName%-small%ImgExtType%" /><source media="(min-width: 768px) and (max-width: 991px)" srcset="%imageName%-medium_2x%ImgExtType% 2x, %imageName%-medium%ImgExtType%" /><img class="img-rounded img-responsive" alt="%name%" src="%imageName%-small%ImgExtType%"></picture></a><figcaption></figcaption></figure>';
var myHTMLprojectWebsite = '<a href="%data%">Website</a>';

var myHTMLprojectAccordion =  '<div class="panel-group" id="%id%Accordion" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="panel-heading" role="tab" id="%id%headingOne"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#%id%Accordion" href="#%id%collapseOne" aria-expanded="false" aria-controls="%id%collapseOne">Courses</a></h4></div><div id="%id%collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="%id%headingOne"><div id="%id%CourseList" class="panel-body"></div></div></div>  <div class="panel panel-default"><div class="panel-heading" role="tab" id="%id%headingTwo"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#%id%Accordion" href="#%id%collapseTwo" aria-expanded="false" aria-controls="%id%collapseTwo">Learning Goals</a></h4></div><div id="%id%collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="%id%headingTwo"><div id="%id%LearningGoalList" class="panel-body"></div></div></div><div class="panel panel-default"><div class="panel-heading" role="tab" id="%id%headingThree"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#%id%Accordion" href="#%id%collapseThree" aria-expanded="false" aria-controls="%id%collapseThree">Skills attained</a></h4></div><div id="%id%collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="%id%headingThree"><div id="%id%SkillAttainedList" class="panel-body"></div></div></div></div>';
var myHTMLprojectSecondColumn = '<div class="col-xs-6 col-md-8 col-lg-6 second-column" id="%id%SecondColumn"></div>';


var myHTMLProjectAccordionListEntry = '<li class="list-group-item"><a href="%courseURL%">%projectCourse%</a></li>';

var myHTMLProjectAccordionText = '<p>%data%</p>';

var myHTMLprojectFooter ='<!-- %id% footer --><footer><span class="copyright">© %data%</span></footer>';

var myHTMLprojectDates = '<span class="date-text">%data%</span>';

var myHTMLprojectCourse = '';

/*EDUCATION HELPER HTML*/

 //  schools
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="major"><em>%data%</em></div>';

//  online courses
var HTMLOnlineStart = '<div class="education-entry online-school-entry"></div>';
var HTMLonlineClasses = '<span><h3 class="online-course">Online Classes</h3></span>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="#" target="_blank">%data%</a>';

//var internationalizeButton = '<button>Internationalize</button>';

/*MAP HELPER HTML*/
var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function () {
    "use strict";
  $('button').click(function () {
    var iName = inName() || function () {};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/

var clickLocations = [];

function logClicks(x, y) {
    "use strict";
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/

var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #map-div in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    // log the locations used for map markers to console
    console.log(locations);
    return locations;

  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {

    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}
/*
GOOGLE MAP
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //  Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
