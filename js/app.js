var playerObj = {
  playerName: '',
  playerThumb: '',
};

var eventObj = {};

var store = {
  teamBadge:
    'https://www.thesportsdb.com/images/media/team/badge/stpsus1425120215.png',
  teamName: 'Boston Red Sox',
  teamDesc: `The Boston Red Sox are an American professional baseball team based in Boston, 
    Massachusetts, that competes in Major League Baseball (MLB). They are members of the East 
    Division of the American League (AL). The Red Sox have won 8 World Series, having appeared 
    in 12. Founded in 1901 as one of the American League's eight charter franchises, the Red Sox's 
    home ballpark has been Fenway Park since 1912. The \"Red Sox\" name was chosen by the team owner, 
    John I. Taylor, around 1908, following the lead of previous teams that had been known as the \"Boston 
    Red Stockings\", including the forerunner of the Atlanta Braves.\r\n\r\nBoston was a dominant team in 
    the new league, defeating the Pittsburgh Pirates in the first World Series in 1903 and winning four 
    more championships by 1918. However, they then went into one of the longest championship droughts 
    in baseball history, called by some the \"Curse of the Bambino\" after its alleged beginning with the 
    Red Sox's sale of Babe Ruth to the rival New York Yankees two years after their world championship in 1918, 
    an 86-year wait before the team's sixth World Championship in 2004. The team's history during that period was 
    punctuated with some of the most memorable moments in World Series history, including Enos Slaughter's \"mad dash\" 
    in 1946, the \"Impossible Dream\" of 1967, Carlton Fisk's home run in 1975, and Bill Buckner's error in 1986. Following 
    their victory in the 2013 World Series, they became the first team to win three World Series trophies in the 21st 
    century, including championships in 2004 and 2007. Red Sox history has also been marked by the team's intense 
    rivalry with the Yankees, arguably the fiercest and most historic in North American professional sports.
    \r\n\r\nThe Boston Red Sox are owned by Fenway Sports Group, which also own Liverpool F.C. of the Premier 
    League in England. The Red Sox are consistently one of the top MLB teams in average road attendance, 
    while the small capacity of Fenway Park prevents them from leading in overall attendance. From May 15, 2003 
    to April 10, 2013, the Red Sox sold out every home game—a total of 820 games (794 regular season) for a major 
    professional sports record.`,
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
  teamStadiumImg:
    'https://www.thesportsdb.com/images/media/team/stadium/rppysv1425119852.jpg',
  teamStadiumName: 'Fenway Park',
  teamStadiumDesc: `Fenway Park is a baseball park in Boston, 
    Massachusetts, located at 4 Yawkey Way near Kenmore Square. 
    It has been the home of the Boston Red Sox Major League Baseball team since 
    it opened in 1912 and it is the oldest ballpark in MLB.\r\n\r\nBecause 
    of its age and constrained location in Boston's dense Fenway–Kenmore neighborhood, 
    the park has been renovated or expanded many times, resulting in quirky features including 
    \"The Triangle\" (below), \"Pesky's Pole\", and the Green Monster in left field. It is 
    the fourth smallest among MLB ballparks by seating capacity, second smallest by total 
    capacity, and one of eight that cannot accommodate at least 40,000 spectators.\r\n\r\nFenway 
    has hosted the World Series ten times, with the Red Sox winning five of them, and 
    the Braves (then of Boston) winning one. The first, in the park's inaugural season, 
    was the 1912 World Series and the most recent was the 2013 World Series. Beside baseball 
    games it has been the site of many other sporting and cultural events including professional 
    football games for the Boston Redskins, Boston Yanks, and the Boston Patriots; concerts; 
    soccer and hockey games; and political and religious campaigns.\r\n\r\nApril 20, 2012, 
    marked Fenway Park's centennial. On March 7 of that year, the park was added to the National 
    Register of Historic Places.\r\n\r\nFormer pitcher Bill Lee has called Fenway Park \"a shrine\". 
    Today, the park is considered to be one of the most well-known sports venues in the world.
    \r\n\r\nIn March 2012, jetBlue Park at Fenway South was opened as the Boston Red Sox's spring 
    training base. This new park in Fort Myers, Florida has a field with exactly the same dimensions as Fenway Park in Boston.`,
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
