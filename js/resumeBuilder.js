
/*BIO OBJECT*/

var bio = {
    "name" : "Karl Longman",
    "role" : "Front-end Web Developer",
    "contacts" : {
        "mobile" : "00 0000 0000",
        "email" : "karl_longman@hotmail.com",
        "github" : "klong",
        "location" : "Bristol, UK"
    },
    "biopic" : "assets/images/karlAug2016",
    "welcomeMsg" : "making software to help people achieve their goals.",
    "skills" : ["Interaction Design", "HTML 5", "JavaScript", "CSS"],

/*DISPLAY BIO FUNCTION*/

    "display": function () {
        "use strict";

        //  format html name and role
        var formattedHTMLheaderNameRole = HTMLheaderNameRole.replace("%name%", bio.name).replace("%role%", bio.role);

        // format html bio picture
        var formattedBioPic = HTMLbioPic.replace(/%data%/g, bio.biopic).replace("%name%", bio.name);
         // formatt html Welcome message
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        //  format html top  & footer contacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//  ADD NAME & ROLE
        $("#bio-card:last").append(formattedHTMLheaderNameRole);
//  ADD WELCOME MESSAGE
        $("#bio-card:last").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
        //  ADD SKILLS HEADING
            $("#bio-card:last").append(HTMLskillsStart);

            for (var skill in bio.skills) {
                //  format html skill(s)
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                //  ADD SKILL(S)
                $("#skills").append(formattedSkill);
            }

        }

//  ADD RESUME BIO PICTURE
        $("#bioGallery").append(formattedBioPic);

//  ADD HEADER CONTACTS
        $("#topContacts").append(formattedEmail)
                .append(formattedGithub)
                .append(formattedLocation);

//  ADD FOOTER CONTACTS
        $("#footerContacts").append(formattedEmail)
          .append(formattedGithub)
          .append(formattedLocation);
    }
};

/*WORK OBJECT*/

var work = {
    "jobs": [
        {
            "jobTitle" : "Freelance editor and edit assistant.",
            "employer" : "Ludorum plc.",
            "years" : "2010 – 2015",
            "location" : "Bristol",
            "description" : "animated children's television series."
        },
        {
            "jobTitle" : "Freelance editor and edit assistant.",
            "employer" : "Woodlore, BBC, Calliope Media, OnSight, Wessex Water plc.",
            "years" : "2008 – 2010",
            "location" : "Bristol",
            "description" : "Freelance video editor"
        },
        {
            "jobTitle" : "Video & editorial technical support",
            "employer" : "Quad Logic Systems",
            "years" : "2007 - 2009",
            "location" : "Bristol",
            "description" : "Video & editorial technical support & installation."
        },
        {
            "jobTitle" : "Offline Storyboard Editor",
            "employer" : "Aardman Animations",
            "years" : "Feb – Mar. 2007",
            "location" : "Bristol",
            "description" : "Storyboard editing of childrens animated series."
        },
        {
            "jobTitle" : "Avid Support & documentary edit assistant.",
            "employer" : "Splice",
            "years" : "2003 – 2007",
            "location" : "Bristol",
            "description" : "Online Edit assistant"
        },
        {
            "jobTitle" : "Senior Interaction Designer",
            "employer" : "Cooper Interaction Design",
            "years" : "2000 – 2001",
            "location" : "Palo Alto",
            "description" : "consultant interaction designer"
        },
        {
            "jobTitle" : "Senior Multimedia Designer",
            "employer" : "Lego A/S",
            "years" : "1998 – 1999",
            "location" : "Billund, Denmark",
            "description" : "Design for Technic CD-ROM"
        },
        {
            "jobTitle" : "Freelance Multimedia Designer",
            "employer" : "CompuServe, Helicon Publishing, AA Publishing",
            "years" : "1995 – 1997",
            "location" : "Oxford, UK",
            "description" : "Freelance multimedia designer"
        },
        {
            "jobTitle" : "Multimedia Designer",
            "employer" : "Attica",
            "years" : "1994 –1996",
            "location" : "Oxford, UK",
            "description" : "interface designer on Multimedia CD-ROM's"
        }
    ],

    /*DISPLAY WORK FUNCTION*/

    "display" : function () {

        for (var count in work.jobs)    {

            // format html Employer entry
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[count].jobTitle);
            var formattedEmployerTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
            var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[count].years);
            var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[count].location);
            var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);

//  ADD EMPLOYMENT ENTRY
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedJobDates);
            $(".work-entry:last").append(formattedJobLocation);
            $(".work-entry:last").append(formattedJobDescription);
        }
    }
};

/*EDUCATION OBJECT*/

var education = {
    "schools":  [

         {
            "name" : "Northern Film School, Leeds Metropolitan University",
            "location" : "Leeds",
            "degree" : "MA",
            "majors" : ["Moving Image Production"],
            "dates" : "2001 – 2003",
            "url" : ""
        },
        {
            "name" : "Coventry University",
            "location" : "Coventry",
            "degree" : "MA",
            "majors" : ["Electronic Graphics"],
            "dates" : "1991 – 1993",
            "url" : ""
        },
        {
            "name" : "Goldsmiths Art College",
            "location" : "London",
            "degree" : "BA (Hons)",
            "majors" : ["Visual Art"],
            "dates" : "1986 - 1989",
            "url" : ""
        }
    ] ,
    "onlineCourses": [
        {
            "title" : "Front-end Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title" : "Mathematics",
            "school" : "Open University Courses",
            "dates" : "2013",
            "url" : "http://www.open.ac.uk/courses/qualifications/q31"
        },
        {
            "title" : "Computers Commerce & Industry",
            "school" : "Open University Software Engineering Module",
            "dates" : "1998 – 1999",
            "url" : "http://www.open.ac.uk/postgraduate/modules/m814"
        }
    ] ,

    /*DISPLAY EDUCATION FUNCTION*/

    "display" : function () {

		for(var school in education.schools) {

      // html formatted Education Schools-College-University
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

//  ADD EDUCATION ENTRY

      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedSchool + formattedDegree);
      $('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedLocation);

			for(var major in education.schools[school].majors) {
        // html formatted Major(s)
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);

//  ADD EDUCATION MAJOR
				$('.education-entry:last').append(formattedMajor);
			}
        }
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);

                for(var course in education.onlineCourses) {
                    // format html online course entry
                    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%link%", education.onlineCourses[course].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedEduDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

                    // ADD ONLINE COURSE ENTRY

                    $('#education').append(HTMLOnlineStart);
                    $('.online-school-entry:last').append(formattedCourseTitle + formattedOnlineSchool);
                    $('.online-school-entry:last').append(formattedEduDates);
                }
        }
    }
};

/*  PROJECTS OBJECT */

var projects = {
    "projects": [
        {
        "ProjectID": "p0",
        "title": "About me",
        "heading": "Create and edit simple HTML and CSS files.",
        "dates": 2015,
        "description":  "",
        "websiteURL": "http://www.google.com",
        "images":   [
          {
              imageName: "assets/images/karl-2015",
              imgExtType: ".jpg"
          },
          {
              imageName: "assets/images/karlAug2016",
              imgExtType: ".jpg"
          }
        ],
        "projectCourses": [
                    {
                        "name": "Intro to HTML and CSS.",
                        "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
                     }
            ],
        "learningGoals": [
                "Get acquainted with Brackets text editor.",
                "Create and edit simple HTML and CSS files to create an 'About me' webpage."
            ],
        "skillsAttained": [
                "Set up Brackets with plugins for HTML and CSS lint tools and W3C validation."
            ]
        },
        {
        "ProjectID": "p1",
        "title": "Build a Portfolio Site",
        "heading": "A Bootstrap responsive website.",
        "dates": 2015,
        "description":  "Build a Portfolio Site.",
        "websiteURL": "http://www.google.com",
        "images":   [],
        "projectCourses": [

                {
                    "name": "Intro to HTML and CSS.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
                },
                {
                    "name": "Responsive Web Design.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
                },
                {
                    "name": "Responsive Images.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd"
                }

        ],
        "learningGoals": [
            "Create a responsive Bootstrap Portfolio website."
        ],
        "skillsAttained": [
            "Followed Udacity FEND - HTML and CSS code and style guides.",
            "Used Bootstrap Framework and Javascript components."
        ]
        },
        {
        "ProjectID": "p2",
        "title": "Online Resume",
        "heading": "Javascript Challenge.",
        "dates": 2015,
        "description":  "Build a JSON data resume.",
        "websiteURL": "http://www.google.com",
        "images":   [],
        "projectCourses": [

                {
                    name: "JavaScript Basics.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
                },
                 {
                    name: "Intro to JQuery.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud245-nd"
                }

            ],
        "learningGoals": [
            "Use JavaScript to turn static web pages into dynamic applications."
        ],
        "skillsAttained": [
            "Creation and accessing of basic JSON formatted data.",
            "Writing/debugging Javascript functions as external scripts and page scripts.",
            "Gained experience of JQuery for DOM element manipulation."
        ]
        },
        {
        "ProjectID": "p3",
        "title": "Classic Arcade Game Clone",
        "heading": "Object Orientated Javascript.",
        "dates": 2015,
        "description":  "HTML5 Canvas Game.",
        "websiteURL": "http://www.google.com",
        "images":   [
            {
                imageName: "assets/images/Frogger_game_arcade",
                imgExtType: ".png"
            },
            {
                imageName: "assets/images/Atari2600_frogger",
                imgExtType: ".jpg"
            }
          ],
        "projectCourses": [

                {
                    name: "Object-Orientated JavaScript.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud015-nd"
                },
                {
                    name: "HTML5 Canvas.",
                    "url": "https://www.udacity.com/course/viewer#!/c-ud292-nd"
                }

        ],
        "learningGoals": [
            "JavaScript game app using HTML5 Canvas."
        ],
        "skillsAttained": []
        }

    ],

/*DISPLAY PROJECT FUNCTION*/

    "display": function() {

        for (var project in projects.projects) {
            // format html project
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
// ADD PROJECT ENTRY
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // if any project images add formatted to project entry
            if (projects.projects[project].images.length > 0) {

                for (var arrayIndex in projects.projects[project].images) {
                    var imageNameRef = projects.projects[project].images[arrayIndex].imageName;
                    var imageExtType = projects.projects[project].images[arrayIndex].imgExtType;
                    // format html project image
                    var formattedImage = HTMLprojectImage.replace(/%imageName%/g, imageNameRef).replace(/%imgExtType%/g, imageExtType);

                    // ADD PROJECT IMAGE(S)
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
    // ADD GOOGLE MAP
    $("#map").append(googleMap);
