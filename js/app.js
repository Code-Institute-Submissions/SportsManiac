//Function call for getTeams Axios function
function searchForTeam(input) {
  getTeams(input, buildAccordions);
}

function buildAccordions(dataArr) {
  accordionArray = '';
  if (dataArr) {
    dataArr.forEach((obj) => {
      accordionArray += addAccordion(
        obj.strTeamLogo,
        obj.strTeam,
        obj.strTeamBadge,
        obj.strDescriptionEN
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
});
