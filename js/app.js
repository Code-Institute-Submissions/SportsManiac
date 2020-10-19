// Store Object for state management
var store = {
  teamBadge: '',
  teamName: '',
  teamDesc: ``,
  teamPlayers: [],
  teamStadiumImg: '',
  teamStadiumName: '',
  teamStadiumDesc: ``,
  teamEvents: [],
};

// Document app functions
$(document).ready(() => {

  var filter = $('#sportFilter');

  $('#search-btn').click(() => {
    var input = $('#search-input').val();
    if (input) {
      searchForTeam(input);
    }
    filter.show();
  });

  var filters = [
    ['baseball', 'Baseball'],
    ['soccer', 'Soccer'],
    ['football', 'American Football'],
    ['basketball', 'Basketball'],
    ['hockey', 'Ice Hockey'],
    ['rugby', 'Rugby']
  ]

  // Filter method for each sport 
  filters.forEach(sport => {
    $(`#${sport[0]}`).click(() => {
      var input = $('#search-input').val();
      if (input) {
        filterSport(input, `${sport[1]}`);
      }
    });
  })
});
