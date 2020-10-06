const API_URI = 'https://www.thesportsdb.com/api/v1/json/&APIKEY&/';
const API_KEY = '4013017';

// Process the API Url for specific tasks
function processURL(url, parameter) {
  var ammendedUrl = url.replace('&APIKEY&', API_KEY);
  ammendedUrl = ammendedUrl.replace('&PARAMETER&', parameter);

  return ammendedUrl;
}

//AXIOS functions

//get teams
async function getTeams(term, callback) {
  var url = API_URI + 'searchteams.php?t=&PARAMETER&';

  processedUrl = processURL(url, term);

  await axios.get(processedUrl).then((res) => {
    callback(res.data.teams);
  });
}

//get team by id
async function getTeamById(teamId, callback) {
  var url = API_URI + 'lookupteam.php?id=&ID&';

  processedUrl = processURL(url, teamId);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//get team members
async function getTeamMembers(team, callback) {
  var url = API_URI + 'searchplayers.php?t=&TEAM&';

  processedUrl = processURL(url, team);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//get next 5 events
async function getTeamEventsNext(teamId, callback) {
  var url = API_URI + 'eventsnext.php?id=&ID&';

  processedUrl = processURL(url, teamId);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//get last 5 events
async function getTeamEventsLast(teamId, callback) {
  var url = API_URI + 'eventslast.php?id=&ID&';

  processedUrl = processURL(url, teamId);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//Function call for getTeams Axios function
function searchForTeam(input) {
  getTeams(input, buildAccordions);
}

//DOM manipulation Functions

//Add an accordion for each team data packet returned

function addAccordion(
  logoUrl,
  teamName,
  teamBadge,
  teamText,
  teamIndex,
  teamId
) {
  // <div class="home-container">
  //       <div class="accordion green lighten-1 row">
  //         <div class="col s8 m2 grey darken-3">
  //           <img
  //             class="accordion-sports-logo"
  //             src="&TEAMLOGO&"
  //           />
  //         </div>
  //         <span class="col m9"><h2 class="team-name">&TEAMNAME&</h2></span>
  //         <span id="accordion#ACCNUM#" class="accordion-btn white col m1 s4" onclick="rollout(#ACCNUM#)"
  //           ><h2>
  //             <i class="fas fa-caret-down fa-3x green-text lighten-1"></i></h2
  //         ></span>
  //       </div>
  //       <div
  //         id="accordion#ACCNUM#-rollout"
  //         class="accordion-rollout row green lighten-1"
  //         style="display: none"
  //       >
  //         <div class="col s12 m3 grey darken-3 accordion-sports-badge">
  //           <img
  //             src="&TEAMBADGE&"
  //             class="accordion-sports-badge-badge"
  //           />
  //         </div>
  //         <div class="col s12 m7">
  //           <p class="accordion-team-description">
  //             &TEXT&
  //           </p>
  //         </div>
  // <div class="col s12 m2 accordion-link">
  //   <div class="btn-large white accordion-link-btn" onclick="storeTeam()">
  //     <h4 class="accordion-link-btn-text">Read More</h4>
  //   </div>
  // </div>
  //       </div>
  //     </div>

  var accordionString = `<div><div class='accordion green lighten-1 row'><div class='col s8 m2 grey darken-3'>
    <img class='accordion-sports-logo' src='${logoUrl}' /></div><span class='col m9'>
      <h2 class='team-name'>${teamName}</h2></span><span id='accordion${teamIndex}' class='accordion-btn white col m1 s4' onclick='rollout(${teamIndex})'>
      <h2><i class='fas fa-caret-down fa-3x green-text lighten-1'></i></h2></span>
      </div><div id='accordion${teamIndex}-rollout' class='accordion-rollout row green lighten-1' style='display: none'>
      <div class='col s12 m3 grey darken-3 accordion-sports-badge'><img src='${teamBadge}' class='accordion-sports-badge-badge' />
      </div><div class='col s12 m7'><p class='accordion-team-description'>${teamText}</p><div class="col s12 m2 accordion-link">
      <div class="btn-large white accordion-link-btn" onclick="storeTeam(${teamId})"><h4 class="accordion-link-btn-text">Read More</h4></div></div></div></div></div>`;

  return accordionString;
}

//Dynamic Accordion Jquery slide down (used with above function)
function rollout(index) {
  var element = '#accordion' + index + '-rollout';
  if (!jQuery(element).is(':visible')) {
    jQuery(element).slideDown();
  } else {
    jQuery(element).slideUp();
  }
}

// Filter teams data array depending on sport selected
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

//Build unfiltered accordions from search
function buildAccordions(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      accordionArray += addAccordion(
        obj.strTeamLogo,
        obj.strTeam,
        obj.strTeamBadge,
        obj.strDescriptionEN,
        index,
        obj.idTeam
      );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only baseball teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only soccer teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only american football teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only basketball teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only hockey teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only rugby teams
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
          index,
          obj.idTeam
        );
    });
  }
  jQuery('#accordions').html(accordionArray);
}

function storeTeam(teamId) {
  jQuery('#search-page').hide();
  jQuery('#team-page').show();
}
