describe('checkBadge', function () {

    var data1 = {
        strSport: 'Baseball',
        strTeamLogo: 'https://www.thesportsdb.com/images/media/team/logo/vqvrwu1425121055.png'
    };

    var data2 = {
        strSport: 'Baseball',
        strTeamLogo: null
    }

    var data3 = {
        strSport: 'Rugby',
        strTeamLogo: null
    }


    describe('checkBadge tests', function () {
        it('should return https://www.thesportsdb.com/images/media/team/logo/vqvrwu1425121055.png', function () {
            expect(checkLogo(data1)).toBe('https://www.thesportsdb.com/images/media/team/logo/vqvrwu1425121055.png');
        });
        it('should return ./assets/images/icons/baseball-solid.svg', function () {
            expect(checkLogo(data2)).toBe('./assets/images/icons/baseball-solid.svg');
        });
        it('should return ./assets/images/icons/football-ball-solid.svg', function () {
            expect(checkLogo(data3)).toBe('./assets/images/icons/football-ball-solid.svg');
        });
    })
})