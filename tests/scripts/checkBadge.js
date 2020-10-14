function checkBadge(obj) {
    if (obj.strTeamBadge) {
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