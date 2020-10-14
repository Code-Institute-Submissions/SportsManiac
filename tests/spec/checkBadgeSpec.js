describe('checkBadge', function () {

    var data1 = {
        strSport: 'Baseball',
        strTeamBadge: 'https://www.thesportsdb.com/images/media/team/badge/stpsus1425120215.png'
    };

    var data2 = {
        strSport: 'Baseball',
        strTeamBadge: null
    }

    var data3 = {
        strSport: 'Rugby',
        strTeamBadge: null
    }


    describe('checkBadge tests', function () {
        it('should return https://www.thesportsdb.com/images/media/team/badge/stpsus1425120215.png', function () {
            expect(checkBadge(data1)).toBe('https://www.thesportsdb.com/images/media/team/badge/stpsus1425120215.png');
        });
        it('should return ./assets/images/icons/baseball-solid.svg', function () {
            expect(checkBadge(data2)).toBe('./assets/images/icons/baseball-solid.svg');
        });
        it('should return ./assets/images/icons/football-ball-solid.svg', function () {
            expect(checkBadge(data3)).toBe('./assets/images/icons/football-ball-solid.svg');
        });
    })
})