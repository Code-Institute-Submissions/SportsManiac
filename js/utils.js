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

  var accordionString = `<div><div class='accordion green lighten-1 row'><div class='col s8 m2 grey darken-3'>
    <img class='accordion-sports-logo' src='${logoUrl}' /></div><span class='col m9'>
      <h2 class='team-name'>${teamName}</h2></span><span id='accordion${teamIndex}' class='accordion-btn white col m1 s4' onclick='rollout(${teamIndex})'>
      <h2><i class='fas fa-caret-down fa-3x green-text lighten-1'></i></h2></span>
      </div><div id='accordion${teamIndex}-rollout' class='accordion-rollout row green lighten-1' style='display: none'>
      <div class='col s12 m3 grey darken-3 accordion-sports-badge'><img src='${teamBadge}' class='accordion-sports-badge-badge' />
      </div><div class='col s12 m7'><p class='accordion-team-description'>${teamText}</p><div class="col s12 m2 accordion-link">
      <div class="btn-large white accordion-link-btn" onclick="teamRollout(${teamId})"><h4 class="accordion-link-btn-text">Read More</h4></div></div></div></div></div>`;

  return accordionString;
}

//Return a string of HTMl to generate player cards
function addTeamPlayerCards(playerArray){

  var playerCardHTML = '';

  playerArray.forEach((player)=>{
    playerCardHTML += `<span class="team-card"><div class="team-card-image">
      <img src="${player.playerThumb}" alt=""></div><div class="team-card-playername">
      ${player.playerName}</div></span>`;
  })

  return playerCardHTML;
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
function checkLogo(obj){
  if(obj.strTeamLogo){
    return obj.strTeamLogo
  }

  var sport = obj.strSport;
  switch(sport){
    case 'Baseball':
      return 'https://simpleicon.com/wp-content/uploads/baseball.png';
    case 'Soccer':
      return 'https://www.flaticon.com/svg/static/icons/svg/53/53283.svg';
    case 'American Football':
      return 'https://i.pinimg.com/originals/b7/55/65/b755651418f77fed1882754857f9f65c.png';
    case 'Basketball':
      return 'data:image/png;base64,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';
    case 'Ice Hockey':
      return 'https://c7.uihere.com/files/769/902/417/ice-hockey-field-hockey-computer-icons-hockey-sticks-hockey.jpg';
    case 'Rugby':
      return 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/rugby-512.png';
    default:
      return 'https://icons.iconarchive.com/icons/icons8/windows-8/256/Sports-Teams-icon.png';
  }
}

//Build unfiltered accordions from search
function buildAccordions(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj, index) => {
      var logo = checkLogo(obj);
      accordionArray += addAccordion(
        logo,
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

//Store the team data in the store object
function storeTeam(teamObj){
  store.teamName = teamObj.teams[0].strTeam;
  store.teamBadge = teamObj.teams[0].strTeamBadge;
  store.teamDesc = teamObj.teams[0].strDescriptionEN;
  store.teamStadiumImg = teamObj.teams[0].strStadiumThumb;
  store.teamStadiumName = teamObj.teams[0].strStadium;
  store.teamStadiumDesc = teamObj.teams[0].strStadiumDescription;
}

//Push the team Players into the Store
function storePlayers(teamObj){
  teamObj.player.forEach((player) =>{
    var newPlayer = {
      playerId: player.idPlayer,
      playerName: player.strPlayer,
      playerThumb: player.strThumb,
    };

    store.teamPlayers.push(newPlayer);
  })
}

//Reset the store to default
function resetStore(){
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
  jQuery('#teamCards').html(addTeamPlayerCards(store.teamPlayers));

  // store.teamPlayers.forEach((member, index) =>{
  //   jQuery(`#teamMember${index}`).css(
  //     {
  //       'background' : `url(${member.playerThumb})`,
  //     'background-size': 'contain',
  //     'background-repeat': 'no-repeat',
  //     'background-position' : 'center'
  //     });
  // })
  jQuery('#search-page').hide();
  jQuery('#team-page').show();
  window.scroll({top: 0, left: 0});
}

function backButton(){
  jQuery('#team-page').hide();
  jQuery('#search-page').show();
}
