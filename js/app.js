var playerObj = {
  playerName: '',
  playerThumb: '',
};

var eventObj = {};

var store = {
  teamBadge:'',
  teamName: '',
  teamDesc: ``,
  teamPlayers: [
    {
      playerName: 'Christian Vazquez',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/63arim1550940324.jpg',
    },
    {
      playerName: 'Alex Cora',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/jpzmb31550941893.jpg',
    },
    {
      playerName: 'Andrew Benintendi"',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/918dky1551105961.jpg',
    },
    {
      playerName: 'Chris Sale',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/fjsbdy1550940883.jpg',
    },
    {
      playerName: 'Collin McHugh',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/4052zb1551287862.jpg',
    },
    {
      playerName: 'Dustin Pedroia"',
      playerThumb:
        'https://www.thesportsdb.com/images/media/player/thumb/tvk3ix1550939835.jpg',
    },
  ],
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
