// Minutes in a football game (3 mins added time each half):
const matchMinutes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, "45+1", "45+2", "45+3", 46, 47, 48, 49 , 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, "90+1", "90+2",
    "90+3"];

// Teams' home goal multipliers:
const manCityHome = 1.25;
const manUtdHome = 1.25;
const liverpoolHome = 1.15;
const chelseaHome = 1.21;
const leicesterHome = 1.3;
const westHamHome = 1.25;
const tottenhamHome = 1.3;
const arsenalHome = 0.95;
const leedsHome = 1.09;
const evertonHome = 0.938;
const astonHome = 1.13;
const newcastleHome = 1.016;
const wolvesHome = 0.86;
const crystalHome = 0.84;
const southamptonHome = 1.09;
const brightonHome = 0.865;
const burnleyHome = 0.81;
const brentfordHome = 0.83;
const norwichHome = 0.82;
const watfordHome = 0.8;

// Teams' away goal multipliers:
const manCityAway = 1.25;
const manUtdAway = 1.25;
const liverpoolAway = 1.25;
const chelseaAway = 1.05;
const leicesterAway = 1.3;
const westHamAway = 1.17;
const tottenhamAway = 1.28;
const arsenalAway = 1.21;
const leedsAway = 1.3;
const evertonAway = 0.93;
const astonAway = 1.015;
const newcastleAway = 0.82;
const wolvesAway = 0.81;
const crystalAway = 0.87;
const southamptonAway = 0.86;
const brightonAway = 0.83;
const burnleyAway = 0.82;
const brentfordAway = 0.84;
const norwichAway = 0.83;
const watfordAway = 0.80;

const scorePredictor = (home, away) => {
    let HomeGoalsRandomiser = Math.random() * 285.6;
    let homeMultiplier;
    switch (home) {
        case "Manchester City":
            homeMultiplier = manCityHome;
            break;
        case "Manchester United":
            homeMultiplier = manUtdHome;
            break;
        case "Liverpool":
            homeMultiplier = liverpoolHome;
            break;
        case "Chelsea":
            homeMultiplier = chelseaHome;
            break;
        case "Leicester City":
            homeMultiplier = leicesterHome;
            break;
        case "West Ham United":
            homeMultiplier = westHamHome;
            break;
        case "Tottenham":
            homeMultiplier = tottenhamHome;
            break;
        case "Arsenal":
            homeMultiplier = arsenalHome;
            break;
        case "Leeds United":
            homeMultiplier = leedsHome;
            break;
        case "Everton":
            homeMultiplier = evertonHome;
            break;
        case "Aston Villa":
            homeMultiplier = astonHome;
            break;
        case "Newcastle United":
            homeMultiplier = newcastleHome;
            break;
        case "Wolves":
            homeMultiplier = wolvesHome;
            break;
        case "Crystal Palace":
            homeMultiplier = crystalHome;
            break;
        case "Southampton":
            homeMultiplier = southamptonHome;
            break;
        case "Brighton":
            homeMultiplier = brightonHome;
            break;
        case "Burnley":
            homeMultiplier = burnleyHome;
            break;
        case "Brentford":
            homeMultiplier = brentfordHome;
            break;
        case "Norwich City":
            homeMultiplier = norwichHome;
            break;
        case "Watford":
            homeMultiplier = watfordHome;
            break;
        default:
            console.log("Please choose a valid home team: Manchester City, Manchester United, Liverpool, Chelsea, Leicester City, West Ham United, Tottenham, Arsenal, Leeds United, Everton, Aston Villa, Newcastle United, Wolves, Crystal Palace, Southampton, Brighton, Burnley, Brentford, Norwich City or Watford.");
            break;
    }
    let homeGoalScore = HomeGoalsRandomiser * homeMultiplier;
    let homeGoals;
    if (homeGoalScore <= 102) {
        homeGoals = 0;
    } else if (homeGoalScore <= 210) {
        homeGoals = 1;
    } else if (homeGoalScore <= 280) {
        homeGoals = 2;
    } else if (homeGoalScore <= 335) {
        homeGoals = 3;
    } else if (homeGoalScore <= 349) {
        homeGoals = 4;
    } else if (homeGoalScore <= 353) {
        homeGoals = 5;
    } else if (homeGoalScore <= 354) {
        homeGoals = 6;
    } else if (homeGoalScore <= 355) {
        homeGoals = 7;
    } else if (homeGoalScore <= 356) {
        homeGoals = 8;
    } else if (homeGoalScore <= 357) {
        homeGoals = 9;
    }
    let awayGoalsRandomiser = Math.random() * 285.6;
    let awayMultiplier;
    switch (away) {
        case "Manchester City":
            awayMultiplier = manCityAway;
            break;
        case "Manchester United":
            awayMultiplier = manUtdAway;
            break;
        case "Liverpool":
            awayMultiplier = liverpoolAway;
            break;
        case "Chelsea":
            awayMultiplier = chelseaAway;
            break;
        case "Leicester City":
            awayMultiplier = leicesterAway;
            break;
        case "West Ham United":
            awayMultiplier = westHamAway;
            break;
        case "Tottenham":
            awayMultiplier = tottenhamAway;
            break;
        case "Arsenal":
            awayMultiplier = arsenalAway;
            break;
        case "Leeds United":
            awayMultiplier = leedsAway;
            break;
        case "Everton":
            awayMultiplier = evertonAway;
            break;
        case "Aston Villa":
            awayMultiplier = astonAway;
            break;
        case "Newcastle United":
            awayMultiplier = newcastleAway;
            break;
        case "Wolves":
            awayMultiplier = wolvesAway;
            break;
        case "Crystal Palace":
            awayMultiplier = crystalAway;
            break;
        case "Southampton":
            awayMultiplier = southamptonAway;
            break;
        case "Brighton":
            awayMultiplier = brightonAway;
            break;
        case "Burnley":
            awayMultiplier = burnleyAway;
            break;
        case "Brentford":
            awayMultiplier = brentfordAway;
            break;
        case "Norwich City":
            awayMultiplier = norwichAway;
            break;
        case "Watford":
            awayMultiplier = watfordAway;
            break;
        default:
            console.log("Please choose a valid away team: Manchester City, Manchester United, Liverpool, Chelsea, Leicester City, West Ham United, Tottenham, Arsenal, Leeds United, Everton, Aston Villa, Newcastle United, Wolves, Crystal Palace, Southampton, Brighton, Burnley, Brentford, Norwich City or Watford.");
            break;
    }
    let awayGoalScore = awayGoalsRandomiser * awayMultiplier;
    let awayGoals;
    if (awayGoalScore <= 102) {
        awayGoals = 0;
    } else if (awayGoalScore <= 210) {
        awayGoals = 1;
    } else if (awayGoalScore <= 280) {
        awayGoals = 2;
    } else if (awayGoalScore <= 335) {
        awayGoals = 3;
    } else if (awayGoalScore <= 349) {
        awayGoals = 4;
    } else if (awayGoalScore <= 353) {
        awayGoals = 5;
    } else if (awayGoalScore <= 354) {
        awayGoals = 6;
    } else if (awayGoalScore <= 355) {
        awayGoals = 7;
    } else if (awayGoalScore <= 356) {
        awayGoals = 8;
    } else if (awayGoalScore <= 357) {
        awayGoals = 9;
    }
    console.log(home + ": " + homeGoals);
    console.log(away + ": " + awayGoals);
    let totalGoals = homeGoals + awayGoals;
    let firstGoalMinute;
    if (totalGoals > 2) {
        firstGoalMinute = matchMinutes[Math.floor(Math.random() * (matchMinutes.length-9))];
        console.log("The first goal will be scored in the " + firstGoalMinute + "\' minute.");
    } else if (totalGoals === 1) {
        firstGoalMinute = matchMinutes[Math.floor(Math.random() * matchMinutes.length)];
        console.log("The only goal will be scored in the " + firstGoalMinute + "\' minute.");
    } else if (totalGoals === 0) {
        console.log("This game will have no goals.")
    } else {
        firstGoalMinute = matchMinutes[Math.floor(Math.random() * (matchMinutes.length))];
        console.log("The first goal will be scored in the " + firstGoalMinute + "\' minute.");
    }
}

scorePredictor("Liverpool", "Crystal Palace");

