import { responseSuccess, responseError, SERVER_ERROR, ServiceResponse } from './../common/service-response';
import { Board, NewGameRequest, LifeGames } from './type';
import { generateUUID } from '../common/util';
import LifeGame from './game';
import createLogger from '../common/logger';
const logger = createLogger(__filename);


const games: LifeGames = {};


export const newGame = (data: NewGameRequest) => {
    logger.info(`New game - data: ${JSON.stringify(data)}`);
    try {
        const id = generateUUID();
        const board: Board = {
            width: data.grid.length,
            height: data.grid[0].length,
            grid: data.grid,
        };
        const game = new LifeGame(id, board);
        games[id] = game;

        return responseSuccess(game);
    } catch (error: any) {
        logger.error(error.message);
        return responseError(500, SERVER_ERROR);
    }
}

export const nextMove = (id: string) => {
    logger.info(`Next move - data: ${JSON.stringify(id)}`);
    try {
        if (!games[id]) {
            logger.error(`Game not found - id: ${id}`);
            return responseError(404, 'Game not found');
        }

        const game = games[id];
        game.playNextMove();

        return responseSuccess(game);
    } catch (error: any) {
        logger.error(error.message);
        return responseError(500, SERVER_ERROR);
    }
}

export const resetGame = (id: string) => {
    logger.info(`Next move - data: ${JSON.stringify(id)}`);
    try {
        if (!games[id]) {
            logger.error(`Game not found - id: ${id}`);
            return responseError(404, 'Game not found');
        }

        const game = games[id];
        game.reset();

        return responseSuccess(games[id]);
    } catch (error: any) {
        logger.error(error.message);
        return responseError(500, SERVER_ERROR);
    }
}