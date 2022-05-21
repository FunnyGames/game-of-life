import { Grid } from './../types/game.d';
import axios from './axios.instance';
import urls from './urls';

export const nextStep = (grid: Grid) => {
    return axios.post(urls.NEXT_STEP, { grid });
}
