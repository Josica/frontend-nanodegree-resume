// Bio object

var bio = {
  name: 'Felicity Smoak',
  role: 'IT Support at Queen Consolidated',
  contacts: {
    mobile: '1-000-111-0000',
    email: 'fsmoak@qconsolidated.com',
    github: 'FelicityMSmoak1',
    twitter: 'fsmoak',
    location: 'Starling City'
  },
  welcomeMessage: 'I HATE MYSTERIES. THEY BUG ME. THEY NEED TO BE SOLVED.',
  skills: ['C++', 'Ruby', 'Python'],
  biopic: 'https://i.imgur.com/IQB6Ap3.jpg',
  display: function() {

    // variable declarations

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    // jquery functions

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(HTMLskillsStart);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    // loop through skills

    for(var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#header").append(formattedSkill);
    };

  }
};

// Education object

var education = {
  schools: [{
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, Massachusetts, United States',
    degree: 'Bachelor of Science in Computer Science',
    majors: ['Computer Science'],
    dates: '2008'
  },
  {
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, Massachusetts, United States',
    degree: 'Master\'s Degree in Cyber Security and Computer Sciences',
    majors: ['Cyber Security', 'Computer Science'],
    dates: '2009'
  }],
  onlineCourses: [{
    title: 'Self-Driving Car Engineer - Computer Vision',
    school: 'Udacity',
    dates: '2017',
    url: 'https://www.udacity.com/course/sdc-computer-vision--cx32'
  }],
  display: function() {

    // loop through schools

    for(var i = 0; i < education.schools.length; i++){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
    };

    $("#education").append(HTMLonlineClasses);

    // loop through online courses

    for(var i = 0; i < education.onlineCourses.length; i++){
      $("#education").append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    };
  }
};

// Work Object

var work = {
  
};
// Function calls

bio.display();
education.display();
