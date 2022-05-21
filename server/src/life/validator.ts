import { validate } from './../common/base.validator';
import { Request, Response, NextFunction } from 'express';
import Joi from '@hapi/joi';
import env from '../environments/env';
import createLogger from '../common/logger';
const logger = createLogger(__filename);

const cells = ['alive', 'dead'];
const WIDTH = env.boardWidth;
const HEIGHT = env.boardHeight;

const jGrid = Joi.array().items(Joi.array().items(Joi.string().valid(...cells)).min(HEIGHT).max(HEIGHT)).min(WIDTH).max(WIDTH);

export const nextMove = (req: Request, res: Response, next: NextFunction) => {
    logger.debug(`Validate next move - request body: ${JSON.stringify(req.body)}`);
    const schema = Joi.object().keys(
        {
            grid: jGrid.required(),
        }
    );

    validate(schema, req.body, res, next);
}