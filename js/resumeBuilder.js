
var bio = {

        "name": "Slavo Popovich",
        "role": "Web Developer",
        "contacts": {
            "mobile": "+1(561) 283 6675",
            "email": "slavo@mimicom24.com",
            "github": "https://github.com/slavo7",
            "twitter": "@OurHealthyDay", 
            "location": "Miami, FL" 
            },
        "welcomeMessage": "Discipline is the bridge between goals and accomplishment.",
        "skills": ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Angular", "Python", "Swift" ],
        "biopic": "images/profile.jpg",
        "display": function() {

    var myName = HTMLheaderName.replace("%data%", bio.name);
    $("#name-title").append(myName);
    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name-title").append(myRole);
    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);
    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    

    $("#topContacts, #footerContacts").append(myMobile);
    //$("#footerContacts").append(myMobile);
    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(myEmail);
    //$("#footerContacts").append(myEmail);
    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(myGithub);
    ///$("#footerContacts").append(myGithub);
    
    var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(myTwitter);
    //$("#footerContacts").append(myTwitter);
    
    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(myLocation);
    //$("#footerContacts").append(myLocation);

    var myPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(myPic);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);


// In JavaScript, for-in loops can be used for objects, but should not be used for arrays. This is because the for-in loop passes the keys of each property. Array values do not have any keys.
            /*for (var s in bio.skills) {
            var skill = HTMLskills.replace("%data%", bio.skills[s]);
            $("#skills").append(skill);
            }*/


            for (var s = 0; s < bio.skills.length; s++){
            var skill = HTMLskills.replace("%data%", bio.skills[s]);
            $("#skills").append(skill);
            
            }
        }
    }
};


var education = {

"schools": [
   
    {
     "name": "The School of Electrical and Computer Engineering of Applied Studies",
     "location": "Belgrade, Serbia",
     "degree": "Bachelor of Appl.",
     "majors": ["Computer Engineering"],
     "dates": "2000-2004",
     "url": "http://www.viser.edu.rs/?lang=EN"
    }
     ],

"onlineCourses": [
    
     {
     "title": "Microsoft Certified Proffesional",
     "school": "Microsoft",
     "dates": "05-2008",
     "url":"https://www.microsoft.com/en-us/learning/microsoft-certified-professional.aspx"
   },
   {
     "title": "Front End Web Developer",
     "school": "Udacity",
     "dates": "01-2017",
     "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   },
   {
     "title": "HTML, CSS & JavaScript Certified",
     "school": "Coursera",
     "dates": "05-2016",
     "url":"https://www.coursera.org/account/accomplishments/certificate/H8AG2WBC5E93"
   },
   {
    "title": "Front End Developmet",
     "school": "FreeCodeCamp",
     "dates": "09-2016",
     "url": "https://www.freecodecamp.com/slavo7"
   },
   {
     "title": "The Web Developer Bootcamp(nodejs)",
     "school": "Udemy",
     "dates": "08-2016",
     "url": "https://www.udemy.com/user/slavoljub-popovic/"
   },
   {
     "title": "The Complete Digital Marketing Course",
     "school": "Udemy",
     "dates": "11-2016",
     "url": "https://www.udemy.com/user/slavoljub-popovic/"
   },
   {
     "title": "iOS10 & Swift3",
     "school": "DevsLopes",
     "dates": "03-2016",
     "url": "https://www.udemy.com/user/slavoljub-popovic/"
   },
   {
     "title": "Moder React with Redux",
     "school": "Udemy",
     "dates": "12-2016",
     "url": "https://www.udemy.com/user/slavoljub-popovic/"
   },
   {
     "title": "Intro to Computer Science",
     "school": "Udacity",
     "dates": "03-2014",
     "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
   },
   {
     "title": "Programming Foundations with Python",
     "school": "Udacity",
     "dates": "05-2014",
     "url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
   },
   {
     "title": "Computer Networking",
     "school": "Udacity/Georgia Tech",
     "dates": "01-2015 - 12-2015",
     "url": "https://www.udacity.com/course/computer-networking--ud436"
   },

     ],
"display": function() {

    if (education.schools.length > 0) {

        $("#education").append(HTMLschoolStart);
        for (var school in education.schools) {

            var mySchoolURL = HTMLschoolName.replace("#", education.schools[school].url);
            var mySchool = mySchoolURL.replace("%data%", education.schools[school].name);
            var mySchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var mySchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var mySchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var myMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
            var URL = HTMLonlineURL.replace("%data", education.schools[school].url);
            

            $("#education").append(mySchool + mySchoolDegree);
            $("#education").append(mySchoolDates);
            $("#education").append(mySchoolLocation);
            $("#education").append(myMajor);
            //$("#education").append(URL); looks better 

        }
    }

    if (education.onlineCourses.length > 0) {

    $("#education").append(HTMLonlineClasses);
    for(var course in education.onlineCourses) {

        var cTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var courseTitle = cTitle.replace("#", education.onlineCourses[course].url);
        var schl = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var URL = HTMLonlineURL.replace("%data",
        education.onlineCourses[course].url);

        $("#education").append(courseTitle + schl);
        $("#education").append(courseDates);
        //$("#education").append(URL);  looks better 
            }
        }
    }
};

/* Object that contains information about work experience and
* display() method to display data on the page */
var work = {

"jobs": [
        
     {
     "employer": "MimiCom24",
     "title": "Founder/Web Developer",
     "location": "Miami, Fl",
     "dates": "in progress",
     "url": "http://www.mimicom24.com/",
     "description": "In January 2016, I have founded MimiCom24. Company focused on Web and Mobile Application development.MimiCom24 strives to Engineer Long Lasting high quality Software. As a founder I have a various responsibilities. From negotiation with potential customers, to development and testing software solutions."
   },
    
    {
     "employer": "OurHealthyday",
     "title": "Wellness Consultant",
     "location": "Santa Clarita, CA",
     "dates": "Oct, 2008 - in progress",
     "url": "http://www.ourhealthyday.com/",
     "description": "My passion is to help people to achieve there weight loss goals."
   },
    
    {
     "employer": "Princess Cruises",
     "title": "Computer System Spetialis",
     "location": "Santa Clarita, CA",
     "dates": "Apr, 2013 - Nov, 2014",
     "url": "http://www.princess.com/",
     "description": "Monitored Windows Servers and all company computers and devices to maximize uptime. Repairs software and Hardware."
   },
    
   {
     "employer": "Princess Cruises",
     "title": "Crew Welfare Coordinator",
     "location": "Santa Clarita, CA",
     "dates": "Sep, 2010 - Apr, 2013",
     "url": "http://www.princess.com/",
     "description": "Assists to HR manager, working when is embarkation day, organize all activities for crew and helping them in extra duty job, organize everything what is good for crew and I take care of all employee and  helping them to feel more comfortable. "
   },
   {
     "employer": "MCD Security",
     "title": "General Manager",
     "location": "Belgrade, Serbia",
     "dates": "Jun, 2005 - Aug, 2010",
     "url": "http://www.mimicom24.com/",
     "description": "Executed integrated advertising campaign across multiple media channels. Built financial model for new business unit. Developed department's first incentive performance plan which motivated staff and resulted in a 23% increase in sales. I was responsible - Troubleshot and maintained all networking devices and infrastructure across the enterprise including switches, routers and firewall."
   },
   {
     "employer": "MCD Security",
     "title": "System/Network Administrator",
     "location": "Belgrade, Serbia",
     "dates": "Feb, 2002 - Jun, 2005",
     "url": "https://www.mimicom24.com",
     "description": "I was responsible for configuration and maintenance of Microsoft Servers and Cisco Network equipment (Switches and Routers).Implemented and maintained firewalls, series switches and security appliances."
   }
     ],
"display": function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        for(var job in work.jobs) {

            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var myEmployer = employer.replace("#", work.jobs[job].url);
            var myTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $("#workExperience").append(myEmployer + myTitle);
            $("#workExperience").append(workDates);
            $("#workExperience").append(workLocation);
            $("#workExperience").append(workDescription);

            }
        }
    }
}; 

/* Object that contains information about projects that person participated
* and display() method to display data on the page */
var projects = {
 "projects": [
     {
      "title": "OurHealthyDay", 
      "dates": "March, 2012 - in progress",
      "url": "http://www.ourhealthyday.com/",
      "description": "HTML, CSS, JavaScript, WordPress.",
      "images": ["images/ourhealthyday.gif",]
   },
  {
      "title": "MimiCom24", 
      "dates": "Jun, 2016 - in progress",
      "url": "http://www.mimicom24.com/",
      "description": "HTML, CSS, jQuery, JavaScript, Bootstrap",
      "images": ["images/mimicom.png"]
   },
   {
      "title": "Sal Limo Service", 
      "dates": "Feb, 2015 - in progress",
      "url": "http://www.sallimoservice.com/",
      "description": "HTML, CSS, JavaScript, WordPress",
      "images": ["images/sallimo.png"]
   },
  {
      "title": "So Flo Lives Real State WebSite", 
      "dates": "Jan, 2016 - in progress",
      "url": "http://www.soflolives.com/",
      "description": "HTML, CSS, JavaScript, WordPress",
      "images": ["images/soflolives.png"]
   },

     ],
"display": function() {
    if(projects.projects.length > 0) {

        $("#projects").append(HTMLprojectStart);

        // In JavaScript, for-in loops can be used for objects, but should not be used for arrays. This is because the for-in loop passes the keys of each property. Array values do not have any keys.
       /* for(var proj in projects.projects) {

            var _project = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var myProject = _project.replace("#", projects.projects[proj].url);
            var projectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            var projectImg = HTMLprojectImage.replace("%data%", projects.projects[proj].images[0]);
             
            
            $("#projects").append(myProject);
            $("#projects").append(projectDates);
            $("#projects").append(projectDescription);
            $("#projects").append(projectImg);
         
        } */

         projects.projects.forEach(function(proj) {
          var _project = HTMLprojectTitle.replace("%data%", proj.title);
          var myProject = _project.replace("#", proj.url);
          var projectDates = HTMLprojectDates.replace("%data%", proj.dates);
          var projectDescription = HTMLprojectDescription.replace("%data%", proj.description);
          var projectImg = HTMLprojectImage.replace("%data%", proj.images[0]);


          $("#projects").append(myProject);
          $("#projects").append(projectDates);
          $("#projects").append(projectDescription);
          $("#projects").append(projectImg);

        });
        }
    }
};


/* calling display() methods for above declared objects */
bio.display();
education.display();
work.display();
projects.display();

/* adding div for google map */
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});
