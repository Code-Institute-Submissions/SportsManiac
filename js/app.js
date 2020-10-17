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

  $('#baseball').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'Baseball');
    }
  });

  $('#soccer').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'Soccer');
    }
  });

  $('#football').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'American Football');
    }
  });

  $('#basketball').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'Basketball');
    }
  });

  $('#hockey').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'Ice Hockey');
    }
  });

  $('#rugby').click(() => {
    var input = $('#search-input').val();
    if (input) {
      filterSport(input, 'Rugby');
    }
  });
});
