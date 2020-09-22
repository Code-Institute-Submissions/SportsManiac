//Function call for getTeams Axios function
function searchForTeam(input) {
  getTeams(input, callBackTest);
}

//Document app functions
$(document).ready(() => {
  $('#search-btn').click(() => {
    var input = $('#search-input').val();
    if (input) {
      searchForTeam(input);
    }
  });

  //Testing only
  $('#accordions').html(
    addAccordion(
      'https://www.thesportsdb.com/images/media/team/logo/vqvrwu1425121055.png',
      'Boston Red Sox',
      'https://www.thesportsdb.com/images/media/team/badge/stpsus1425120215.png',
      'Boston Red Sox description here'
    ) +
      addAccordion(
        'https://www.thesportsdb.com/images/media/team/logo/ol4sht1554563677.png',
        'Boston Bruins',
        'https://www.thesportsdb.com/images/media/team/badge/vuspuq1421791546.png',
        'Bruins description here'
      ) +
      addAccordion(
        'https://www.thesportsdb.com/images/media/team/logo/xwuypy1420737149.png',
        'Boston Celtics',
        'https://www.thesportsdb.com/images/media/team/badge/051sjd1537102179.png',
        'Celtics Description here'
      )
  );
});
