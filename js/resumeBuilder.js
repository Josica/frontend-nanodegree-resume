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
  skills: ['C++', 'Ruby', 'Python', 'Perl', 'Javascript'],
  biopic: 'https://i.imgur.com/GJqlRvw.jpg',
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
  }
};

// Function calls

bio.display();
