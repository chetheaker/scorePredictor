

// Teams' home goal multipliers:
const manCityHome = 1.3;
const manUtdHome = 1.3;
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
const manCityAway = 1.3;
const manUtdAway = 1.3;
const liverpoolAway = 1.3;
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

const scorePredictor = (home) => {
    let goals = Math.random() * 285.6;
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
    let homeGoalScore = goals * homeMultiplier;
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
    
}

scorePredictor("Crystal Palace");