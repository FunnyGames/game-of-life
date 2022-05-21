import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export const nextMove = (req: Request, res: Response, next: NextFunction) => {
    const grid = req.body.grid;

    const resp = service.nextMove(grid);
    res.status(resp.status).send(resp.data);
}