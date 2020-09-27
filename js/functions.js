const API_URI = 'https://www.thesportsdb.com/api/v1/json/&APIKEY&/';
const API_KEY = '4013017';

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

async function getTeamEventsLast(teamId, callback) {
  var url = API_URI + 'eventslast.php?id=&ID&';

  processedUrl = processURL(url, teamId);

  await axios.get(processedUrl).then((res) => {
    callback(res.data);
  });
}

//DOM manipulation Functions

function addAccordion(logoUrl, teamName, teamBadge, teamText, teamID) {
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
  //       </div>
  //     </div>

  var accordionString =
    "<div><div class='accordion green lighten-1 row'><div class='col s8 m2 grey darken-3'><img class='accordion-sports-logo' src='&TEAMLOGO&' /></div><span class='col m9'><h2 class='team-name'>&TEAMNAME&</h2></span><span id='accordion#ACCNUM#' class='accordion-btn white col m1 s4' onclick='rollout(#ACCNUM#)'><h2><i class='fas fa-caret-down fa-3x green-text lighten-1'></i></h2></span></div><div id='accordion#ACCNUM#-rollout' class='accordion-rollout row green lighten-1' style='display: none'><div class='col s12 m3 grey darken-3 accordion-sports-badge'><img src='&TEAMBADGE&' class='accordion-sports-badge-badge' /></div><div class='col s12 m7'><p class='accordion-team-description'>&TEXT&</p></div></div></div>";

  var addedAccordion = accordionString.replace('&TEAMLOGO&', logoUrl);
  addedAccordion = addedAccordion.replace('&TEAMNAME&', teamName);
  addedAccordion = addedAccordion.replace('#ACCNUM#', teamID);
  addedAccordion = addedAccordion.replace('#ACCNUM#', teamID);
  addedAccordion = addedAccordion.replace('#ACCNUM#', teamID);
  addedAccordion = addedAccordion.replace('&TEAMBADGE&', teamBadge);
  addedAccordion = addedAccordion.replace('&TEXT&', teamText);

  return addedAccordion;
}

function rollout(index) {
  var element = '#accordion' + index + '-rollout';
  if (!jQuery(element).is(':visible')) {
    jQuery(element).slideDown();
  } else {
    jQuery(element).slideUp();
  }
}

//Run Functions
/*For Teesting Purposes only */

//Callback test
/*Can now pass a function into the axios functions for use elsewhere */
function callBackTest(data) {
  console.log(data);
}

//getTeams('Boston', callBackTest);

//getTeamById('135252', callBackTest);

//getTeamMembers('Boston%20Red%20Sox', callBackTest);

//getTeamEventsNext('135252', callBackTest);

//getTeamEventsLast('135252', callBackTest);
