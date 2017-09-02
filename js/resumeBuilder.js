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
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
  }
};

// Function calls

bio.display(); 
