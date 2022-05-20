import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export const newGame = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const resp = service.newGame(data);
    res.status(resp.status).send(resp.data);
}

export const nextMove = (req: Request, res: Response, next: NextFunction) => {
    const id = <string>req.query.id;

    const resp = service.nextMove(id);
    res.status(resp.status).send(resp.data);
}

export const resetGame = (req: Request, res: Response, next: NextFunction) => {
    const id = <string>req.query.id;

    const resp = service.resetGame(id);
    res.status(resp.status).send(resp.data);
}