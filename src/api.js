//Base URL
const base_url = `https://api.rawg.io/api/`;

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//Popular games

const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game details

export const gameDetailsURL = (id) => `${base_url}games/${id}?key=${process.env.REACT_APP_RAWG_API}`;

//Game screenshots
export const gameScreenshotURL = (id) => `${base_url}games/${id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;

//serached game

export const searchGameURL = (gameName) => `${base_url}games?key=${process.env.REACT_APP_RAWG_API}&search=${gameName}&page_size=9`;

