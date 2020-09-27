//Function call for getTeams Axios function
function searchForTeam(input) {
  getTeams(input, buildAccordions);
}

function filterSport(input, sport) {
  if (sport == 'Baseball') {
    getTeams(input, baseballAccordion);
  } else if (sport == 'Soccer') {
    getTeams(input, soccerAccordion);
  } else if (sport == 'American Football') {
    getTeams(input, footballAccordion);
  } else if (sport == 'Basketball') {
    getTeams(input, basketBallAccordion);
  } else if (sport == 'Ice Hockey') {
    getTeams(input, hockeyAccordion);
  } else if (sport == 'Rugby') {
    getTeams(input, rugbyAccordion);
  }
}

function buildAccordions(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      accordionArray += addAccordion(
        obj.strTeamLogo,
        obj.strTeam,
        obj.strTeamBadge,
        obj.strDescriptionEN,
        index
      );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function baseballAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Baseball')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function soccerAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Soccer')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function footballAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'American Football')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function basketBallAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Basketball')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function hockeyAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Ice Hockey')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function rugbyAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Rugby')
        accordionArray += addAccordion(
          obj.strTeamLogo,
          obj.strTeam,
          obj.strTeamBadge,
          obj.strDescriptionEN,
          index
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

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
