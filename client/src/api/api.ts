import { Grid } from '../types/game';
import * as service from './service';

const perform = async (func: Function, data: {}) => {
    try {
        return await func(data);
    } catch (error: any) {
        console.log(error.message);
        return { error: error.message };
    }
}

export const nextStep = async (grid: Grid) => {
    return await perform(service.nextStep, grid);
}
