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
  var url = API_URI + 'lookupteam.php?id=&PARAMETER&';

  processedUrl = processURL(url, teamId);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//get team members
async function getTeamMembers(teamId, callback) {
  var url = API_URI + 'lookup_all_players.php?id=&PARAMETER&';

  processedUrl = processURL(url, teamId);

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

  var accordionString = `<div><div class='accordion green lighten-1 row'><div class='col s8 m4 l2 grey darken-3'>
                          <img class='accordion-sports-logo' src='${logoUrl}' /></div><span class='col m6 l9'>
                          <h2 class='team-name'>${teamName}</h2></span><span id='accordion${teamIndex}' class='accordion-btn white col s4 m2 l1 ' onclick='rollout(${teamIndex})'>
                          <span><i class='fas fa-caret-down fa-3x green-text lighten-1'></i></span></span></div>
                          <div id='accordion${teamIndex}-rollout' class='accordion-rollout row green lighten-1' style='display: none'>
                          <div class='col s12 l3 grey darken-3 accordion-sports-badge'><img src='${teamBadge}' class='accordion-sports-badge-badge' />
                          </div><div class='col s12 l7'><p class='accordion-team-description'>${teamText}</p></div>
                          <div class="col s12 l2 accordion-link grey darken-3"><div class="btn white accordion-link-btn" onclick="teamRollout(${teamId})">
                          <span class="accordion-link-btn-text">Read More</span></div></div></div></div>` ;

  return accordionString;
}

//Return a string of HTMl to generate player cards
function addTeamPlayerCards(playerArray) {
  if (playerArray) {
    var playerCardHTML = '';

    playerArray.forEach((player) => {
      playerCardHTML += `<span class="team-card"><div class="team-card-image">
        <img src="${player.playerThumb}" alt=""></div><div class="team-card-playername">
        ${player.playerName}</div></span>`;
    })

    return playerCardHTML;

  }

}

function noDataAccordion() {
  return `<div class="accordion green lighten-1">
        <h2 class="nodata">No Data Found. <span>Try another term</span></h2>
        </div>`
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

//Check if theres a Team logo.  If not replace with defaults
function checkLogo(obj) {
  if (obj.strTeamLogo) {
    return obj.strTeamLogo
  }

  var sport = obj.strSport;
  switch (sport) {
    case 'Baseball':
      return `./assets/images/icons/baseball-solid.svg`;
    case 'Soccer':
      return `./assets/images/icons/futbol-solid.svg`;
    case 'American Football':
      return `./assets/images/icons/football-helmet-solid.svg`;
    case 'Basketball':
      return `./assets/images/icons/basketball-ball-solid.svg`;
    case 'Ice Hockey':
      return `./assets/images/icons/hockey-sticks-solid.svg`;
    case 'Rugby':
      return `./assets/images/icons/football-ball-solid.svg`;
    default:
      return `./assets/images/icons/running-solid.svg`;
  }
}

//Check if theres a Team Badge.  If not replace with defaults
function checkBadge(obj) {
  if (obj.strTeamLogo) {
    return obj.strTeamBadge
  }

  var sport = obj.strSport;
  switch (sport) {
    case 'Baseball':
      return `./assets/images/icons/baseball-solid.svg`;
    case 'Soccer':
      return `./assets/images/icons/futbol-solid.svg`;
    case 'American Football':
      return `./assets/images/icons/football-helmet-solid.svg`;
    case 'Basketball':
      return `./assets/images/icons/basketball-ball-solid.svg`;
    case 'Ice Hockey':
      return `./assets/images/icons/hockey-sticks-solid.svg`;
    case 'Rugby':
      return `./assets/images/icons/football-ball-solid.svg`;
    default:
      return `./assets/images/icons/running-solid.svg`;
  }
}

//Build unfiltered accordions from search
function buildAccordions(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      var logo = checkLogo(obj);
      var badge = checkBadge(obj);
      accordionArray += addAccordion(
        logo,
        obj.strTeam,
        badge,
        obj.strDescriptionEN,
        index,
        obj.idTeam
      );
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only baseball teams
function baseballAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Baseball') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only soccer teams
function soccerAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Soccer') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only american football teams
function footballAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'American Football') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only basketball teams
function basketBallAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Basketball') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only hockey teams
function hockeyAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Ice Hockey') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Build Filtered accordion displaying only rugby teams
function rugbyAccordion(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      if (obj.strSport == 'Rugby') {
        var logo = checkLogo(obj);
        var badge = checkBadge(obj);
        accordionArray += addAccordion(
          logo,
          obj.strTeam,
          badge,
          obj.strDescriptionEN,
          index,
          obj.idTeam
        );
      }
    });
  }
  else {
    accordionArray = noDataAccordion();
  }
  jQuery('#accordions').html(accordionArray);
}

//Store the team data in the store object
function storeTeam(teamObj) {

  var stadiumImage;
  if (!teamObj.teams[0].strStadiumThumb) {
    stadiumImage = './assets/images/icons/stadium_icon.png';
  }
  else {
    stadiumImage = teamObj.teams[0].strStadiumThumb;
  }

  store.teamName = teamObj.teams[0].strTeam;
  store.teamBadge = teamObj.teams[0].strTeamBadge;
  store.teamDesc = teamObj.teams[0].strDescriptionEN;
  store.teamStadiumImg = stadiumImage;
  store.teamStadiumName = teamObj.teams[0].strStadium;
  store.teamStadiumDesc = teamObj.teams[0].strStadiumDescription;
}

//Push the team Players into the Store
function storePlayers(teamObj) {
  if (teamObj.player) {
    teamObj.player.forEach((player) => {

      var thumbnail;
      if (!player.strThumb) {
        thumbnail = './assets/images/icons/playerShirt.svg';
      }

      else if (player.strThumb) {
        thumbnail = player.strThumb;
      }

      var newPlayer = {
        playerId: player.idPlayer,
        playerName: player.strPlayer,
        playerThumb: thumbnail,
      };

      store.teamPlayers.push(newPlayer);
    })
  }
}

//Reset the store to default
function resetStore() {
  store.teamBadge = '';
  store.teamDesc = '';
  store.teamEvents = [];
  store.teamName = '';
  store.teamPlayers = [];
  store.teamStadiumDesc = '';
  store.teamStadiumImg = '';
  store.teamStadiumName = '';
}

//Populate the Team Rollout with the selected teams data
async function teamRollout(teamId) {
  resetStore();

  await getTeamById(teamId, storeTeam);
  await getTeamMembers(teamId, storePlayers);

  jQuery('#teamBadge').attr('src', store.teamBadge);
  jQuery('#teamTitle').html(store.teamName);
  jQuery('#teamDesc').html(store.teamDesc);
  jQuery('#stadiumImg').css(`background`, `url(${store.teamStadiumImg})`)
  jQuery('#stadiumDesc').html(store.teamStadiumDesc);
  jQuery('#stadiumTitle').html(store.teamStadiumName);

  if (store.teamPlayers) {
    jQuery('#teamCards').html(addTeamPlayerCards(store.teamPlayers));
  }

  jQuery('#search-page').hide();
  jQuery('#team-page').show();
  window.scroll({ top: 0, left: 0 });
}

//Back button to return to team search
function backButton() {
  jQuery('#team-page').hide();
  jQuery('#search-page').show();
}
