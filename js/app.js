//Store Object for state management
var store = {
  teamBadge:'',
  teamName: '',
  teamDesc: ``,
  teamPlayers: [],
  teamStadiumImg:'',
  teamStadiumName: '',
  teamStadiumDesc: ``,
  teamEvents: [],
};

//Document app functions
$(document).ready(() => {
  $('#search-btn').click(() => {
    var input = $('#search-input').val();
    if (input) {
      searchForTeam(input);
    }
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
