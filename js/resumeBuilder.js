///////////
////bio////
///////////
var bio = {
	"name": "Xiao Lu",
	"role": "  Software Developer",
	"contacts": {
		"email": "frankluxiao@gmail.com",
		"mobile": "612-222-0396",
		"address": "Palo Alto, California, USA"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "The worst moment in our lives makes us who we are.",
	"technicalSkills": [
							"• Languages: C++, JavaScript, C, CUDA C, Java, Python", 
							"• Platforms: Linux, Windows, Mac OS, Visual Studio, MATLAB",
							"• Tools: OpenCV, Weka, Auto CAD, MS Office Suite",
							"• Strong foundation in programming principle, data structure, algorithms and complexity analysis",
							"• Expertise in sorts of Machine Learning and Data Mining algorithms",
							"• Team player, good communication and presentation skills, quick to learn, focused self-starter"
						]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.address));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
//$("#header").append(formattedWelcomeMsg);

if(bio.technicalSkills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.technicalSkills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.technicalSkills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
}

///////////
//project//
///////////
var project = {
	"projects": [
		{
			"title": "Human Detection in Static Images",
			"date": "Jan. 2016 - May 2016",
			"language": "(in C++ and MATLAB)",
			"description": [
			    				"• Enhanced the detection accuracy of positive images and negative images up to 95.82% and 88.24% respectively by combining Histogram of Oriented Gradient (HoG) with cascades of rejectors approach.",
			    				"• Implemented three fundamental feature descriptors: Local Binary Patterns (LBP), Haar-like feature (Haar) and Histogram of Oriented Gradient (HoG) to detect human in images.",
			    				"• Designed and implemented cascades of rejectors method to detect human in static images."
			    			],
			"image": "images/human.jpg"

		},
		{
			"title": "Fast MRI Imaging Reconstruction",
			"date": "Sep. 2015 - Dec. 2015",
			"language": "(in CUDA C, C and MATLAB)",
			"description": [
								"• Achieved 20X speedup compared to C++ sequential implementations.",
								"• Designed paralleled Low-dimensional-structure Self-learning and Thresholding (LOST) algorithm on GPUs.",
								"• Implemented 3D-FFT, 3D-IFFT and Weiner filtering algorithms on GPUs by CUDA C."
							],
			"image": "images/mri.jpg"
		}
	]
};

if(project.projects.length > 0) {
	for(i in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[i].date);
		var formattedLanguage = HTMLprojectLanguage.replace("%data%", project.projects[i].language);
		var formattedImage = HTMLprojectImage.replace("%data%", project.projects[i].image);
		var formattedDescription = [];
		for(j in project.projects[i].description) {
			formattedDescription.push(HTMLprojectDescription.replace("%data%", project.projects[i].description[j]));
		}
		
		$(".project-entry:last").append(formattedTitle+formattedLanguage+formattedDates);
		$(".project-entry:last").append(formattedImage);
		$(".project-entry:last").append(HTMLschoolInfo);
		for(j in formattedDescription) {
			$(".info-entry:last").append(formattedDescription[j]);
		}
	}
}

/////////////
//education//
/////////////
var education = {
	"universities": [ 
		{ 
			"name": "University of Minnesota - Twin-Cities",
			"datesAttended": "Aug. 2014 - Jan. 2017",
			"location": "Minneapolis, Minnesota, USA",
			"degree": "Master of Engineering",
			"major": "Electrical and Computer Engineering",
			"minor": "Computer Science",
			"GPA": "3.6/4.0",
			"url": "https://twin-cities.umn.edu/",
			"courses": [
				"Algorithm and Data Structure,", 
				"Machine Learning,", 
				"Data Mining,", 
				"Computer Vision,", 
				"Predictive Learning,", 
				"Applied Parallel Programming,",
				"Probability and Stochastic Process,", 
				"Computer Architecture"
			]
		},
		{
			"name": "Xi'an University of Technology",
			"datesAttended": "Sep. 2006 - Jul. 2010",
			"location": "Xi'an, Shaanxi, China",
			"degree": "Bachelor of Engineering",
			"major": "Electrical Engineering and Automation",
			"minor": "",
			"GPA": "89.0/100.0",
			"url": "http://old.xaut.edu.cn/english/",
			"courses": [
				"Computer Software,", 
				"C Programming,", 
				"Microcomputer Principle and Application"
			]
		}	
	],
	"onlineCourses": [
		{   "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "March 2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{   "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "March 2014",
			"url": "https://www.udacity.com/course/ud304"
		},	
		{   "school": "Udacity",
			"title": "Web Development",
			"completed": "March 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};


if(education.universities.length > 0) {
	for(i in education.universities) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.universities[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.universities[i].degree).replace("#", education.universities[i].url);			
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.universities[i].datesAttended);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.universities[i].location);			
		var formattedSchoolInfo = [];
		if(education.universities[i].major.length > 0) formattedSchoolInfo.push(HTMLschoolMajor.replace("%data%", education.universities[i].major));
		if(education.universities[i].minor.length > 0) formattedSchoolInfo.push(HTMLschoolMinor.replace("%data%", education.universities[i].minor));
		if(education.universities[i].GPA.length > 0) formattedSchoolInfo.push(HTMLschoolGPA.replace("%data%", education.universities[i].GPA));
		var formattedCourses = [];
		for(j in education.universities[i].courses) {
			formattedCourses.push(HTMLcourseEntry.replace("%data%", education.universities[i].courses[j]));
		}

		$(".education-entry:last").append(formattedSchoolDegree+formattedSchoolName+formattedSchoolLocation+formattedSchoolDates);

		$(".education-entry:last").append(HTMLschoolInfo);
		$(".education-entry:last").append(HTMLcourseInfo);
		
		for(j in formattedSchoolInfo) {
			$(".info-entry:last").append(formattedSchoolInfo[j]);
		}

		$(".course-entry:last").append(HTMLcourseHign);
		for(j in formattedCourses) {
			$(".course-entry:last").append(formattedCourses[j]);
		}
	}
}
/*
if(education.universities.length > 0) {
	$("#education").append(HTMLonlineClasses);
	for(i in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);

		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
	}
}
*/

///////////
///work////
///////////

var work = {
	"works": [
		{
			"employer": "Yunnan Jinsha River Hydropower CO., LTD",
			"title": "Project Manager and Electrical engineer",
			"datesAttended": "Jul. 2010 - Jul. 2013",
			"location": "Kunming, Yunnan, China",
			"description": [
								"• Responsibilities included: User requirements gathering, Electrical equipment maintenance and repairing, Electrical equipment operating status checking, Electrical test conducting.",
								"• Award: Excellent employee."
							]
		}
	]
};
if(work.works.length > 0) {
	for(i in work.works) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.works[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.works[i].title);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.works[i].datesAttended);
		var formattedLocation = HTMLlocation.replace("%data%", work.works[i].location);
		var formattedDescription = [];
		for(j in work.works[i].description) {
			formattedDescription.push(HTMLworkDescription.replace("%data%", work.works[i].description[j]));
		}

		$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedWorkDate);
		$(".work-entry:last").append(HTMLschoolInfo);
		for(j in formattedDescription) {
			$(".info-entry:last").append(formattedDescription[j]);
		}
	}
}

$("#mapDiv").append(googleMap);
