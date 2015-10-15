
/*
BIO OBJECT
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
    "pictureURL" : "images/karl-2015-medium.jpg",
    "welcomeMsg" : "Oi, I Say it's me with a welcome message message en't",
    "skills" : ["Video Editing", "Interaction Design", "Art", "Visual effects design & editing"],
    /*DISPLAY BIO*/
    "display": function () {
    //    name and role
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%",bio.role);
         $("#header").prepend(formattedHTMLheaderRole).prepend(formattedHTMLheaderName);
    // Bio picture and welcome message
        var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
    //  skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);
        }
    //    top  & footer contacts
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedLocation);
         $("#footerContacts").append(formattedMobile)
         .append(formattedEmail)
         .append(formattedGithub)
         .append(formattedLocation);
    }
};

/*
WORK OBJECT
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
    ] ,
    "display" : function () {
        for (count in work.jobs)    {
            $("#workExperience").append(HTMLworkStart);
            // Employer HTML
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
             // JobTitle HTML
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[count].jobTitle);
            var formattedEmployerTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
            // add a HTML div for Employer & job title
            $(".work-entry:last").append(formattedEmployerTitle);
            // years HTML
            var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[count].years);
            $(".work-entry:last").append(formattedJobDates);
            // location HTML
            var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[count].location);
            $(".work-entry:last").append(formattedJobLocation);
            // description HTML
            var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);
            $(".work-entry:last").append(formattedJobDescription);

        }
    }
};

/*
EDUCATION OBJECT
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
		for(school in education.schools) {
            $('#education').append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$('.education-entry:last').append(formattedSchool + formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$('.education-entry:last').append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$('.education-entry:last').append(formattedLocation);

			for(major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$('.education-entry:last').append(formattedMajor);
			}
		}
        // Online Courses
        if (education.onlineCourses.length > 0) {

            $('#education').append(HTMLonlineClasses); // heading
                for(course in education.onlineCourses) {
                    $('#education').append(HTMLschoolStart);
                    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    $('.education-entry:last').append(formattedCourseTitle + formattedOnlineSchool);

                    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    $('.education-entry:last').append(formattedDates);

                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                    $('.education-entry:last').append(formattedOnlineURL);
                }
        }
    }
};

/*
PROJECTS OBJECT
*/
var projects = {
    "projects": [
        {
        "title": "Sample Project 1",
        "dates": 2015,
        "description":  "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will",
        "images":   [
            "images/197x148.gif",
            "images/197x148.gif",
            "images/197x148.gif",
            "images/197x148.gif"
            ]
        },
        {
        "title": "Sample Project 2",
        "dates": 2013,
        "description":  "website. Your code will add information to each of the sections of the resume below. You can pretty easily figure out what each section will",
        "images":   [
            "images/197x148.gif"
            ]
        }
    ],
    "display" : function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};


/*BUILD THE RESUME*/

bio.display();
work.display();
projects.display();
education.display();

// Google map
$("#mapDiv").append(googleMap);


