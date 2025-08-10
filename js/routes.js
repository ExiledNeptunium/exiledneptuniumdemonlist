import List from './pages/List.js';
import PList from './pages/PList.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/demons', component: List },
    { path: '/pemons', component: PList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
