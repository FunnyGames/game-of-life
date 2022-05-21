import { responseSuccess, responseError, SERVER_ERROR } from './../common/service-response';
import LifeGame from './game';
import createLogger from '../common/logger';
import { Grid } from './type';
const logger = createLogger(__filename);


export const nextMove = (grid: Grid) => {
    logger.info(`Next move - grid: ${JSON.stringify(grid)}`);
    try {
        const game = LifeGame.playNextMove(grid);

        return responseSuccess(game);
    } catch (error: any) {
        logger.error(error.message);
        return responseError(500, SERVER_ERROR);
    }
}
