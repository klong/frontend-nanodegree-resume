
/*
BIO JSON OBJECT
*/

var bio = {
    "name" : "Karl Longman",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "022 32312 231",
        "email" : "karl_longman@hotmail.com",
        "github" : "klong",
        "location" : "Bristol"
    },
    "biopic" : "assets/images/karl-2015",
    "welcomeMsg" : "Oi, I Say it's me with a welcome message message en't",
    "skills" : ["Video Editing", "Interaction Design", "Art", "Visual effects design & editing"],

    /*DISPLAY BIO*/

    "display": function () {
        "use strict";
        //  format html name and role
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

        // formatt html picture and welcome message
        var formattedBioPic = HTMLbioPic.replace(/%data%/g, bio.biopic).replace("%name%", bio.name);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

         //  format html top  & footer contacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        // add bio entry to resume header
        $("#header").prepend(formattedHTMLheaderRole).prepend(formattedHTMLheaderName);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedBioPic);

        if (bio.skills.length > 0) {

            // REPLACE with a loop *******  TODO    **********
            $("#header").append(HTMLskillsStart);

            //  format html resume skills
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);

        }
         // ******* TODO    **********
        //  add contacts to resume header
        $("#topContacts").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedLocation);

        //  add contacts to resume footer
        $("#footerContacts").append(formattedMobile)
         .append(formattedEmail)
         .append(formattedGithub)
         .append(formattedLocation);
    }
};

/*
WORK JSON OBJECT
*/

var work = {
    "jobs": [
        {
            "jobTitle" : "Render Editor",
            "employer" : "Ludorum",
            "years" : 3,
            "location" : "Bristol",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will."
        },
        {
            "jobTitle" : "Animatic Editor",
            "employer" : "Aardman",
            "years" : 0.3,
            "location" : "Bristol",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will"
        },
        {
            "jobTitle" : "Edit Assistant",
            "employer" : "Splice",
            "years" : 3,
            "location" : "Bristol",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will"
        },
        {
            "jobTitle" : "Interaction Designer",
            "employer" : "Cooper Interaction Design",
            "years" : "1998 - 18 months",
            "location" : "Palo Alto",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will"
        },
        {
            "jobTitle" : "CD-ROM Designer",
            "employer" : "Lego",
            "years" : 1.5,
            "location" : "Billund, Denmark",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will"
        },
        {
            "jobTitle" : "CD-ROM Designer",
            "employer" : "Attica",
            "years" : "1990 - 1993",
            "location" : "Oxford, UK",
            "description" : "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will"
        }
    ],
    "display" : function () {

        for (var count in work.jobs)    {

            // format html Employer entry
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[count].jobTitle);
            var formattedEmployerTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
            var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[count].years);
            var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[count].location);
            var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);

            // add Employment entry to resume
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedJobDates);
            $(".work-entry:last").append(formattedJobLocation);
            $(".work-entry:last").append(formattedJobDescription);

        }
    }
};

/*
EDUCATION JSON OBJECT
*/

var education = {
    "schools":  [
         {
            "name" : "Leeds MU University",
            "location" : "Leeds",
            "degree" : "PgDip/MA",
            "majors" : ["fiction film"],
            "dates" : 2001,
            "url" : "http://"
        },
        {
            "name" : "Coventry University",
            "location" : "Coventry",
            "degree" : "PgDip/MA",
            "majors" : ["Computer Art"],
            "dates" : 1993,
            "url" : "http://"
        },
        {
            "name" : "Goldsmiths College",
            "location" : "New Cross, London",
            "degree" : "BA honors",
            "majors" : ["Fine Art"],
            "dates" : 1989,
            "url" : "http://www.goldsmithscolledge.co.uk"
        }
    ] ,
    "onlineCourses": [
        {
            "title" : "Mathematics",
            "school" : "Open University",
            "dates" : 2013,
            "url" : "http://www.openuniversity.ac.uk"
        },
        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "dates" : 2015,
            "url" : "http://www.udacity.com/course/ud804"
        }
    ] ,
    "display" : function () {

        // Education Schools-College-University
		for(var school in education.schools) {

            // html formatted data
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

            // append schools data to resume
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedSchool + formattedDegree);
            $('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedLocation);

			for(var major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$('.education-entry:last').append(formattedMajor);
			}

        }

        // Online Courses
        if (education.onlineCourses.length > 0) {

            // add Online Class section to resume
            $('#education').append(HTMLonlineClasses);

                for(var course in education.onlineCourses) {

                    // format html for online course entry
                    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

                    // add online course entry to resume
                    $('#education').append(HTMLschoolStart);
                    $('.education-entry:last').append(formattedCourseTitle + formattedOnlineSchool);
                    $('.education-entry:last').append(formattedDates);
                    $('.education-entry:last').append(formattedOnlineURL);

                }
        }
    }
};

/*
PROJECTS JSON OBJECT
*/
var projects = {
    "projects": [
        {
        "title": "Sample Project 1",
        "dates": 2015,
        "description":  "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will",
        "images":   [
            "assets/images/197x148.gif",
            "assets/images/197x148.gif",
            "assets/images/197x148.gif",
            "assets/images/197x148.gif"
            ]
        },
        {
        "title": "Sample Project 2",
        "dates": 2013,
        "description":  "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will",
        "images":   [
            "assets/images/197x148.gif"
            ]
        }
    ],
    "display" : function() {

        for (var project in projects.projects) {

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $("#projects").append(HTMLprojectStart);

            // add project entry to resume
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // if any project images add formatted to project entry
            if (projects.projects[project].images.length > 0) {

                for (var image in projects.projects[project].images) {

                    // format html for project image
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                    // add image to project entry
                    $(".project-entry:last").append(formattedImage);

                }
            }
        }
    }
};


/*BUILD THE RESUME PAGE*/

    bio.display();
    work.display();
    projects.display();
    education.display();
    // Google map
    $("#mapDiv").append(googleMap);


