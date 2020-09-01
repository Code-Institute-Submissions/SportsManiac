axios
  .get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Boston')
  .then((response) => {
    console.log(response.data.teams[3]);
    $('#data').html(response.data.teams[3].strDescriptionEN);
  });
